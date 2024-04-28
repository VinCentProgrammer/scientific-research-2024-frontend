import { useEffect, useState } from "react";
import ThreadCommentModel from "../../models/ThreadCommentModel";
import UserModel from "../../models/UserModel";
import { getUserById } from "../../api/UserAPI";
import calculateTimeDifference from "../../utils/datetime/calculateTimeDifference ";
import capitalize from "../../utils/string/CapitalizeString";

interface CommentItemProps {
    comment: ThreadCommentModel;
    commentString: string;
    setComment: (comment: string) => void;
    handleSubmit: (e: React.FormEvent) => void;
}

const CommentItem: React.FC<CommentItemProps> = (props) => {
    const [user, setUser] = useState<UserModel | null>(null);

    useEffect(() => {
        getUserById(props.comment.userId)
            .then(
                result => {
                    setUser(result);
                }
            ).catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, [props.comment.userId]);

    return (
        <div className="commented-section mt-2">
            <div className="d-flex flex-row align-items-center commented-user">
                <img className="img-fluid img-responsive rounded-circle mr-2" src={user?.avatar} width="38" />
                <h5 className="mx-3">{user && capitalize(user?.username)}</h5>
                <span className="dot"></span>
                <span className="mb-1 ml-2 mx-2 fst-italic">Commented {calculateTimeDifference(props.comment.createdAt)}</span>
            </div>
            <div className="comment-text-sm" style={{ margin: '2px 58px' }}>
                <span>{props.comment.comment}</span>
            </div>
            <hr />
        </div >
    )
}

export default CommentItem;