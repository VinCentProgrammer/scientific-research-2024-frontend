import { useEffect, useState } from "react";
import SideBar from "../sidebar/SideBar";
import { useNavigate } from "react-router-dom";
import { deletePostCat  } from "../../api/PostCatAPI";
import { Pagination } from "../../utils/Pagination";
import { Button, Modal } from "react-bootstrap";
import TheoryCatModel from "../../models/TheoryCatModel";
import { deleteTheoryCat, getListTheoryCat } from "../../api/TheoryCatAPI";
import TheoryCatItemAdmin from "./TheoryCatItemAdmin";

function TheoryCatListAdmin() {
    const [theoryCats, setTheoryCats] = useState<TheoryCatModel[]>([]);
    const [loadingData, setLoadingData] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [currPage, setCurrPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [notification, setNotification] = useState('');
    const navigate = useNavigate();


    useEffect(() => {
        getListTheoryCat(currPage - 1)
            .then(
                res => {
                    setTheoryCats(res.result);
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
        const deleleted = deleteTheoryCat(id);
        if (await deleleted === true) {
            setNotification('Deleted successfully');
            setShowModal(true);
            if (theoryCats) {
                const newTheoryCats = theoryCats.filter(theoryCat => theoryCat.theoryCatId !== id);
                setTheoryCats(newTheoryCats);
            } else {
                setError("There are no records");
            }
        }
    }

    const handleOnUpdate = (id: number) => {
        navigate(`/admin/theory/topic/edit/${id}`)
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
                                        List Theory Topic
                                    </div>
                                    <div className="card-body">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Parent ID</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Description</th>
                                                    <th scope="col">Created At</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    theoryCats?.map((theoryCat) => (
                                                        <TheoryCatItemAdmin key={theoryCat.theoryCatId} theoryCat={theoryCat} onDelete={handleOnDelete} onUpdate={handleOnUpdate} />
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

export default TheoryCatListAdmin;