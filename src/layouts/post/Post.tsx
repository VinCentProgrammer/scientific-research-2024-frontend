import { useEffect, useState } from "react";
import PostItem from "./components/PostItem";
import PostModel from "../../models/PostModel";
import { getListPost } from "../../api/PostAPI";
import { Pagination } from "../../utils/Pagination";
import PostDetail from "./components/PostDetail";
import ScrollToTopButton from "../../utils/ScrollToTopButton";

function Post() {
    const [posts, setPosts] = useState<PostModel[] | null>([]);
    const [loadingData, setLoadingData] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [currPage, setCurrPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        getListPost(currPage - 1)
            .then(
                res => {
                    setPosts(res.result);
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
            <div style={{ minHeight: '700px' }}>
                <div className="spinner-border" role="status" >
                    <span className="sr-only"></span>
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
        <div className="text-start">
            <ScrollToTopButton />
            <section className="py-5">
                <div className="container px-5">
                    <h2 className="fw-bolder fs-5 mb-4">Featured Posts</h2>
                    <div className="row gx-5">
                        {
                            posts?.map((post) => (
                                <PostItem key={post.postId} post={post} />
                            ))
                        }
                    </div>
                    <div className="text-end mb-5 mb-xl-0">
                        <nav aria-label="Page navigation example">
                            <Pagination currentPage={currPage} totalPages={totalPages} paginate={paginate} />
                        </nav>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Post;