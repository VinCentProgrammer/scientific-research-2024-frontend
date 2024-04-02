import { useEffect, useState } from "react";
import SideBar from "../sidebar/SideBar";
import PostCatModel from "../../models/PostCatModel";
import { useNavigate } from "react-router-dom";
import { deletePostCat, getListPostCat, getPostCats } from "../../api/PostCatAPI";
import { Pagination } from "../../utils/Pagination";
import { Button, Modal } from "react-bootstrap";
import PostCatItemAdmin from "./PostCatItemAdmin";

function PostCatListAdmin() {
    const [postCats, setPostCats] = useState<PostCatModel[]>([]);
    const [loadingData, setLoadingData] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [currPage, setCurrPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [notification, setNotification] = useState('');
    const navigate = useNavigate();


    useEffect(() => {
        getListPostCat(currPage - 1)
            .then(
                res => {
                    setPostCats(res.result);
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


    const handleOnDelete = async (id: number) => {
        const deleleted = deletePostCat(id);
        if (await deleleted === true) {
            setNotification('Xóa thành công');
            setShowModal(true);
            if (postCats) {
                const newPostCat = postCats.filter(postCat => postCat.postCatId !== id);
                setPostCats(newPostCat);
            } else {
                setError("Không có bản ghi nào");
            }
        }
    }

    const handleOnUpdate = (id: number) => {
        navigate(`/admin/post/cat/edit/${id}`)
    }

    const handleClose = () => {
        setShowModal(false);
    }


    if (loadingData) {
        return (
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        )
    }

    if (error) {
        return (
            <div>{error}</div>
        )
    }



    return (
        <div id="layoutSidenav">
            <SideBar />
            <div id="layoutSidenav_content">
                <main>
                    <div id="content" className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header font-weight-bold">
                                        Danh sách các danh mục
                                    </div>
                                    <div className="card-body">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Tên danh mục</th>
                                                    <th scope="col">Mô tả</th>
                                                    <th scope="col">Parent ID</th>
                                                    <th scope="col">Ngày tạo</th>
                                                    <th scope="col">Ngày chỉnh sửa</th>
                                                    <th scope="col">Hành động</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    postCats?.map((postCat) => (
                                                        <PostCatItemAdmin key={postCat.postCatId} postCat={postCat} onDelete={handleOnDelete} onUpdate={handleOnUpdate} />
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                        <nav aria-label="Page navigation example">
                                            <Pagination currentPage={currPage} totalPages={totalPages} paginate={paginate} />
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </main>
                <section>
                    <Modal show={showModal} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Thông báo</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                <p className="text-center fs-2 font-weight-bold"> <i className="bi bi-check-circle text-success mx-2"></i> {notification}</p>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Đóng
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </section>
            </div>
        </div>
    )
}

export default PostCatListAdmin;