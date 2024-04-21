import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import PostModel from "../../models/PostModel";
import { getPostCatByPostId } from "../../api/PostCatAPI";
import formatDateTimeUser from "../../utils/date-time/FormatDateTimeUser";

interface PostItemInterface {
    post: PostModel;
}

const PostItem: React.FC<PostItemInterface> = (props) => {
    const [postCatName, setPostCatName] = useState<string>('');

    useEffect(() => {
        getPostCatByPostId(props.post.postId)
            .then((result) => {
                if (result != null) {
                    setPostCatName(result.postCatName);
                }
            })
    })

    return (
        <div className="col-lg-4 mb-5">
            <div className="card h-100 shadow border-0">
                <NavLink to={`/post/${props.post.postId}`}>
                    <img className="card-img-top" src={props.post.thumbnail} alt="..." />
                </NavLink>
                <div className="card-body p-4">
                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">News</div>
                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">{postCatName}</div>
                    <NavLink className="text-decoration-none link-dark stretched-link" to={`/post/${props.post.postId}`}><h5 className="card-title mb-3">{props.post.title}</h5></NavLink>
                    <p className="card-text mb-0">{props.post.desc}</p>
                </div>
                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                    <div className="d-flex align-items-end justify-content-between">
                        <div className="d-flex align-items-center">
                            <img className="rounded-circle me-3" src="https://dummyimage.com/40x40/ced4da/6c757d" alt="..." />
                            <div className="small">
                                <div className="fw-bold">Admin</div>
                                <div className="text-muted">{formatDateTimeUser(props.post.createdAt)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostItem;