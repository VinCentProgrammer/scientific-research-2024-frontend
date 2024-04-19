
import { NavLink } from "react-router-dom";
import ScrollToTopButton from "../../utils/ScrollToTopButton";
import { useEffect, useState } from "react";
import ThreadModel from "../../models/ThreadModel";
import { Pagination } from "../../utils/Pagination";
import ThreadItem from "./ThreadItem";
import { getListThread } from "../../api/ThreadAPI";

function Forum() {
    const [threads, setThreads] = useState<ThreadModel[] | null>([]);
    const [loadingData, setLoadingData] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [currPage, setCurrPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        getListThread(currPage - 1)
            .then(
                res => {
                    setThreads(res.result);
                    setTotalPages(res.totalPages);
                    setLoadingData(false);
                }
            )
            .catch((error) => {
                setLoadingData(true);
                setError(error.message);
            })
    }, [currPage])


    const paginate = (currPage: number) => {
        setCurrPage(currPage);
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
            <div>{error}</div>
        )
    }



    return (
        <div className="container text-start my-4 rounded-2" id="forum" style={{ minHeight: '700px' }}>
            <ScrollToTopButton />
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-6 text-start">
                            <h2 className="mb-4 mx-2">Recent Threads</h2>
                        </div>
                        <div className="col-lg-6 text-end">
                            <NavLink className="btn btn-block btn-success rounded-2 py-3 mb-3 bg-op-6 roboto-bold" to="/forum/quesion/add">Ask Question</NavLink>
                        </div>
                    </div>
                    {
                        threads?.map((thread) => (
                            <ThreadItem thread={thread} />
                        ))
                    }

                    <nav aria-label="Page navigation example">
                        <Pagination currentPage={currPage} totalPages={totalPages} paginate={paginate} />
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Forum;