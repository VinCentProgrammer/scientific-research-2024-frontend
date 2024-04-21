import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getThreadById } from "../../api/ThreadAPI";
import ThreadModel from "../../models/ThreadModel";
import calculateTimeDifference from "../../utils/date-time/calculateTimeDifference ";
import UserModel from "../../models/UserModel";
import { getUserByThreadId } from "../../api/UserAPI";
import ThreadCatModel from "../../models/ThreadCatModel";
import { getThreadCatByThreadId } from "../../api/ThreadCatAPI";
import FormCommnet from "./FormComment";
import ThreadCommentModel from "../../models/ThreadCommentModel";
import { getThreadCommentsByThreadId } from "../../api/ThreadCommentAPI";
import CommentItem from "./CommentItem";
import { jwtDecode } from "jwt-decode";
import JwtPayload from "../../models/JwtPayLoad";
import capitalize from "../../utils/string/CapitalizeString";
import ThreadImageModel from "../../models/ThreadImageModel";
import { getThreadImageByThreadId } from "../../api/ThreadImageAPI";

function ThreadDetail() {
    const { threadIdParam } = useParams();
    const [thread, setThread] = useState<ThreadModel | null>(null);
    const [threadCat, setThreadCat] = useState<ThreadCatModel | null>(null);
    const [comments, setComments] = useState<ThreadCommentModel[]>([]);
    const [user, setUser] = useState<UserModel | null>(null);
    const [loadingData, setLoadingData] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [commentString, setCommentString] = useState<string>('');
    const [votesIncrease, setVotesIncrease] = useState<boolean>(true);
    const [votesDecrease, setVotesDecrease] = useState<boolean>(true);
    const [threadImage, setThreadImage] = useState<ThreadImageModel[] | null>(null);

    let threadId = 0;
    try {
        threadId = parseInt(threadIdParam + '');
    } catch (error) {
        threadId = 0;
        console.log('Error', error);
    }
    if (Number.isNaN(threadId))
        threadId = 0;

    useEffect(() => {
        getThreadById(threadId)
            .then(
                result => {
                    if (result) {
                        setThread(result);
                        setLoadingData(false);
                    }
                }
            ).catch(error => {
                console.error('Error fetching user data:', error);
                setError(error.message);
            });
    }, [threadId]);

    useEffect(() => {
        getUserByThreadId(threadId)
            .then(
                result => {
                    setUser(result);
                    setLoadingData(false);
                }
            ).catch(error => {
                console.error('Error fetching user data:', error);
                setError(error.message);
            });
    }, [threadId]);

    useEffect(() => {
        getThreadCatByThreadId(threadId)
            .then(
                result => {
                    setThreadCat(result);
                    setLoadingData(false);
                }
            ).catch(error => {
                console.error('Error fetching user data:', error);
                setError(error.message);
            });
    }, [threadId]);

    useEffect(() => {
        getThreadCommentsByThreadId(threadId)
            .then(
                result => {
                    const sortedComments = result.sort((a, b) => b.commentId - a.commentId);
                    setComments(sortedComments);
                }
            ).catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, [threadId]);

    useEffect(() => {
        getThreadImageByThreadId(threadId)
            .then(
                result => {
                    setThreadImage(result);
                }
            ).catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, [threadId]);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const token = localStorage.getItem('token');
        if (commentString && token) {
            const decodedToken = jwtDecode(token) as JwtPayload;
            const userId = decodedToken.userId;
            fetch("http://localhost:8080/api/thread/comment/add",
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        commentId: 0,
                        commentParentId: 1,
                        userId: userId,
                        threadId: threadId,
                        comment: commentString,
                        level: 1,
                        status: false,
                        createdAt: '',
                        updatedAt: '',
                    })
                }
            ).then((response) => {
                if (response.ok) {
                    console.log("Added successfully!");
                    setCommentString('');
                    const newComment = {
                        commentId: 0,
                        commentParentId: 1,
                        userId: userId,
                        threadId: threadId,
                        comment: commentString,
                        level: 1,
                        status: false,
                        createdAt: new Date().toISOString(),
                        updatedAt: '',
                    }
                    setComments([newComment, ...comments]);
                } else {
                    console.log("An error occurred while adding!");
                }
            })
        }
    }

    const handleOnClickIncreaseVote = () => {
        if (votesIncrease && thread != null && threadCat != null && user != null) {
            setVotesIncrease(false);
            fetch("http://localhost:8080/api/thread/update",
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        threadId: thread.threadId,
                        threadCatId: threadCat.threadCatId,
                        userId: user.userId,
                        shortQuestion: thread.shortQuestion,
                        detailQuestion: thread.detailQuestion,
                        views: thread.views,
                        votes: thread.votes + 1,
                        replies: thread.replies,
                        status: thread.status,
                        createdAt: '',
                        updatedAt: '',
                    })
                }
            )

            setThread({
                threadId: thread.threadId,
                threadCatId: threadCat.threadCatId,
                userId: user.userId,
                shortQuestion: thread.shortQuestion,
                detailQuestion: thread.detailQuestion,
                views: thread.views,
                votes: thread.votes + 1,
                replies: thread.replies,
                status: thread.status,
                createdAt: '',
                updatedAt: '',
            });
        }
    }

    const handleOnClickDecreaseVote = () => {
        if (votesDecrease && thread != null && threadCat != null && user != null && thread.votes > 0) {
            setVotesDecrease(false);

            fetch("http://localhost:8080/api/thread/update",
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        threadId: thread.threadId,
                        threadCatId: threadCat.threadCatId,
                        userId: user.userId,
                        shortQuestion: thread.shortQuestion,
                        detailQuestion: thread.detailQuestion,
                        views: thread.views,
                        votes: thread.votes - 1,
                        replies: thread.replies,
                        status: thread.status,
                        createdAt: '',
                        updatedAt: '',
                    })
                }
            )

            setThread({
                threadId: thread.threadId,
                threadCatId: threadCat.threadCatId,
                userId: user.userId,
                shortQuestion: thread.shortQuestion,
                detailQuestion: thread.detailQuestion,
                views: thread.views,
                votes: thread.votes - 1,
                replies: thread.replies,
                status: thread.status,
                createdAt: '',
                updatedAt: '',
            });
        }
    }


    if (loadingData) {
        return (
            <div id="layoutSidenav" className="container-fluid mt-4" style={{ minHeight: '700px', textAlign: 'center' }}>
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div id="layoutSidenav" className="container-fluid mt-4" style={{ minHeight: '700px', textAlign: 'center' }}>
                <div>{error}</div>
            </div>
        )
    }

    return (
        <div className="text-start" style={{ minHeight: '700px' }}>
            <div className="container mt-5 mb-5">
                <div className="d-flex justify-content-center row">
                    <div className="d-flex flex-column col-md-8">
                        <div className="d-flex flex-row align-items-center text-left comment-top p-2 bg-white border-bottom px-4 row">
                            <div className="col-md-1">
                                <div className="profile-image">
                                    <div className="fs-4" style={{ padding: '11px 0px 11px 24px', fontWeight: 'bold' }}>{user && capitalize(user?.username)}</div>
                                    <img className="rounded-circle text-center" src={user?.avatar} width="100" height={100} />
                                </div>
                            </div>

                            <div className="col-md-10">
                                <div className="p-5">
                                    {
                                        threadImage && <img className="text-center" style={{ maxWidth: '500px' }} src={threadImage[0].path} />
                                    }
                                    <p style={{ margin: "5px 20px" }}>{thread?.detailQuestion}</p>
                                </div>
                            </div>

                            <div className="col-md-1">
                                <div className="d-flex flex-column-reverse flex-grow-0 align-items-center votings ml-1 p-2">
                                    <div onClick={handleOnClickIncreaseVote}>
                                        <i className="fa fa-sort-up fa-2x hit-voting"></i>
                                    </div>
                                    <span>{thread?.votes}</span>
                                    <div onClick={handleOnClickDecreaseVote}>
                                        <i className="fa fa-sort-down fa-2x hit-voting"></i>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className="coment-bottom bg-white p-2 px-4">
                            {
                                thread &&
                                <FormCommnet thread={thread} handleSubmit={handleSubmit} comment={commentString} setComment={setCommentString} />
                            }

                            <div className="px-4">
                                {
                                    comments?.map((comment) => (
                                        <CommentItem comment={comment} commentString={commentString} setComment={setCommentString} handleSubmit={handleSubmit} />
                                    ))
                                }
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThreadDetail;