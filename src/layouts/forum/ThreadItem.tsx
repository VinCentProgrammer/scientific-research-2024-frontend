import { useEffect, useState } from "react";
import ThreadModel from "../../models/ThreadModel";
import calculateTimeDifference from "../../utils/datetime/calculateTimeDifference ";
import UserModel from "../../models/UserModel";
import { getUserByThreadId } from "../../api/UserAPI";
import ThreadCatModel from "../../models/ThreadCatModel";
import { getThreadCatByThreadId } from "../../api/ThreadCatAPI";
import { NavLink } from "react-router-dom";
import { getRepliesByThreadId } from "../../api/ThreadCommentAPI";

interface ThreadRowProps {
    thread: ThreadModel;
}

const ThreadItem: React.FC<ThreadRowProps> = (props) => {

    const [user, setUser] = useState<UserModel | null>(null);
    const [numberReplies, setNumberReplies] = useState<number>(0);
    const [threadCat, setThreadCat] = useState<ThreadCatModel | null>(null);

    useEffect(() => {
        getUserByThreadId(props.thread.threadId)
            .then((result) => {
                if (result)
                    setUser(result);
            })
    }, [props.thread.threadId])

    useEffect(() => {
        getThreadCatByThreadId(props.thread.threadId)
            .then((result) => {
                if (result)
                    setThreadCat(result);
            })
    }, [props.thread.threadId])

    useEffect(() => {
        getRepliesByThreadId(props.thread.threadId)
            .then((result) => {
                setNumberReplies(result);
            })
    }, [props.thread.threadId])

    const handleIncreaseViews = () => {
        fetch("http://localhost:8080/api/thread/update",
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    threadId: props.thread.threadId,
                    threadCatId: threadCat?.threadCatId,
                    userId: user?.userId,
                    shortQuestion: props.thread.shortQuestion,
                    detailQuestion: props.thread.detailQuestion,
                    views: props.thread.views + 1,
                    votes: props.thread.votes,
                    replies: props.thread.replies,
                    status: props.thread.status,
                    createdAt: '',
                    updatedAt: '',
                })
            }
        )
        
    }

    return (
        <div className="card row-hover pos-relative py-2 px-4 mb-3 border-warning border-top-0 border-right-0 border-bottom-0 rounded-1">
            <div className="row align-items-center">
                <div className="col-md-8 mb-3 mb-sm-0">
                    <h5>
                        <NavLink onClick={handleIncreaseViews} to={`/thread/${props.thread.threadId}`} className="text-primary text-decoration-none">{props.thread.shortQuestion}</NavLink>
                    </h5>
                    <p className="text-sm my-0"><span className="op-6 fst-italic">Posted {calculateTimeDifference(props.thread.createdAt)} by </span>
                        <a className="badge bg-primary bg-gradient rounded-pill mb-2" href="#">{user?.username}</a></p>
                    <div className="text-sm op-5">
                        <a className="badge bg-warning bg-gradient rounded-pill mb-2" href="#">{threadCat?.name}</a>
                    </div>
                </div>
                <div className="col-md-4 op-7">
                    <div className="row text-center op-7">
                        <div className="col px-1"> <i className="ion-connection-bars icon-1x"></i> <span className="d-block text-sm">{props.thread.votes} Votes</span> </div>
                        <div className="col px-1"> <i className="ion-ios-chatboxes-outline icon-1x"></i> <span className="d-block text-sm">{numberReplies} Replies</span> </div>
                        <div className="col px-1"> <i className="ion-ios-eye-outline icon-1x"></i> <span className="d-block text-sm">{props.thread.views} Views</span> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThreadItem;