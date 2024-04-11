import { useEffect, useState } from "react";
import PostCatModel from "../../models/PostCatModel";
import SideBar from "../sidebar/SideBar";
import { getPostCats } from "../../api/PostCatAPI";
import { useNavigate } from "react-router-dom";
import PostModel from "../../models/PostModel";
import { deletePost, getListPost, getPosts } from "../../api/PostAPI";
import { Pagination } from "../../utils/Pagination";
import { Button, Modal } from "react-bootstrap";
import TheoryModel from "../../models/TheoryModel";
import { deleteTheory, getListTheory } from "../../api/TheoryAPI";
import TheoryRowAdmin from "./TheoryRowAdmin";

function TheoryListAdmin() {
    const [theories, setTheories] = useState<TheoryModel[] | null>([]);
    const [loadingData, setLoadingData] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [currPage, setCurrPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [notification, setNotification] = useState('');
    const navigate = useNavigate();

    
    useEffect(() => {
        getListTheory(currPage - 1)
            .then(
                res => {
                    setTheories(res.result);
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
        const deleleted = deleteTheory(id);
        if (await deleleted === true) {
            setNotification('Deleted successfully');
            setShowModal(true);
            if (theories) {
                const newTheories = theories.filter(theories => theories.theoryDetailId !== id);
                setTheories(newTheories);
            } else {
                setError("There are no records");
            }
        }
    }

    const handleOnUpdate = (id: number) => {
        navigate(`/admin/theory/edit/${id}`)
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
            <div id="layoutSidenav_content" className="text-start">
                <main>
                    <div id="content" className="container-fluid">
                        <div className="card">
                            <div className="card-header font-weight-bold d-flex justify-content-between align-items-center">
                                <h5 className="m-0 ">Show Theory List</h5>
                            </div>
                            <div className="card-body">
                                <table className="table table-striped table-checkall">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Created at</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            theories?.map((theory) => (
                                                <TheoryRowAdmin key={theory.theoryDetailId} theory={theory} onDelete={handleOnDelete} onUpdate={handleOnUpdate} />
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

export default TheoryListAdmin;