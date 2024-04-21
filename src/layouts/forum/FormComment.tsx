import { jwtDecode } from "jwt-decode";
import ThreadModel from "../../models/ThreadModel";
import UserModel from "../../models/UserModel";
import JwtPayload from "../../models/JwtPayLoad";
import { useEffect, useState } from "react";
import { getUserById } from "../../api/UserAPI";
import UserLoginRequire from "../require/UserLoginRequire";

interface FormCommentProps {
    thread: ThreadModel;
    comment: string;
    setComment: (comment: string) => void;
    handleSubmit: (e: React.FormEvent) => void;
}

const FormComment: React.FC<FormCommentProps> = (props) => {
    const [user, setUser] = useState<UserModel | null>(null);

    const token = localStorage.getItem('token');
    let userId = 0;
    if (token) {
        const decodedToken = jwtDecode(token) as JwtPayload;
        userId = decodedToken.userId;
    }

    useEffect(() => {
        getUserById(userId)
            .then(result => {
                if (result)
                    setUser(result)
            })
    }, [userId])


    return (
        <div className="d-flex flex-row add-comment-section mt-4 mb-4">
            <div className="col-md-1 m-2" >
                <img className="img-fluid img-responsive rounded-circle mr-2" src={user?.avatar} width={50} height={50}/>
            </div>
            <div className="col-md-10">
                <textarea
                    className="form-control mr-3 mx-2"
                    placeholder="Add comment"
                    value={props.comment}
                    onChange={(e) => props.setComment(e.target.value)}
                    rows={5}
                    cols={80}
                />
            </div>
            <div className="col-md-1 m-4">
                <button className="btn btn-primary" onClick={props.handleSubmit} type="submit">Comment</button>
            </div>
        </div>
    )
}

export default UserLoginRequire(FormComment);