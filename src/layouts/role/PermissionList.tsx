import { useEffect, useState } from "react";
import PermissionModel from "../../models/PermissionModel";
import { Pagination } from "../../utils/Pagination";
import { deletePermission, getPermissions } from "../../api/PermissionAPI";
import SideBar from "../sidebar/SideBar";
import { useNavigate } from "react-router-dom";
import PermissionRow from "./PermissionRow";
import { Button, Modal } from "react-bootstrap";
import RequireAdmin from "../admin/RequireAdmin";


const PermissionList: React.FC<{}> = () => {
    const [permissions, setPermissions] = useState<PermissionModel[] | null>([]);
    const [loadingData, setLoadingData] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [currPage, setCurrPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [notification, setNotification] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        getPermissions(currPage - 1)
            .then(
                res => {
                    setPermissions(res.result);
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
        const deleleted = deletePermission(id);
        if (await deleleted === true) {
            setNotification('Xóa thành công');
            setShowModal(true);
            if (permissions) {
                const newPermissions = permissions.filter(permission => permission.permissionId !== id);
                setPermissions(newPermissions);
            } else {
                setError("Không có bản ghi nào");
            }
        }
    }

    const handleOnUpdate = (id: number) => {
        navigate(`/admin/role/permission/edit/${id}`)
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
            <div id="layoutSidenav_content" className="text-start m-4">
                <main className="">
                    <div className="card">
                        <div className="card-header font-weight-bold">
                            Danh sách quyền
                        </div>
                        <div className="card-body">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Tên quyền</th>
                                        <th scope="col">Slug</th>
                                        <th scope="col">Desc</th>
                                        <th scope="col">Created</th>
                                        <th scope="col">Updated</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        permissions?.map((permission) => (
                                            <PermissionRow key={permission.permissionId} permission={permission} onDelete={handleOnDelete} onUpdate={handleOnUpdate} />
                                        ))
                                    }

                                </tbody>
                            </table>
                            <nav aria-label="Page navigation example">
                                <Pagination currentPage={currPage} totalPages={totalPages} paginate={paginate} />
                            </nav>
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

export default RequireAdmin(PermissionList);