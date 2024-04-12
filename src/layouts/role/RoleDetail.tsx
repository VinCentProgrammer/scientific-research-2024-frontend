import { useEffect, useState } from "react";
import PermissionModel from "../../models/PermissionModel";
import { getPermissionsByRoleId } from "../../api/PermissionAPI";
import SideBar from "../sidebar/SideBar";
import { useParams } from "react-router-dom";
import PermissionRow from "./PermissionRow";
import { getRoleById } from "../../api/RoleAPI";
import RequireAdmin from "../admin/RequireAdmin";


const RoleDetail: React.FC<{}> = () => {
    const { roleIdParam } = useParams();

    let roleId = 0;
    try {
        roleId = parseInt(roleIdParam + '');
    } catch (error) {
        roleId = 0;
        console.log('Error', error);
    }
    if (Number.isNaN(roleId))
        roleId = 0;

    const [permissions, setPermissions] = useState<PermissionModel[] | null>([]);
    const [loadingData, setLoadingData] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [nameRole, setNameRole] = useState<string>('');

    useEffect(() => {
        getPermissionsByRoleId(roleId)
            .then(
                res => {
                    setPermissions(res);
                }
            )
            .catch((error) => {
                setLoadingData(true);
                setError(error.message);
            })
    }, [])

    useEffect(() => {
        getRoleById(roleId)
            .then(
                res => {
                    if (res !== null)
                        setNameRole(res.roleName);
                }
            )
            .catch((error) => {
                setLoadingData(true);
                setError(error.message);
            })
    }, [])

    const handleOnDelete = async (id: number) => { }

    const handleOnUpdate = (id: number) => { }


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
        <div id="layoutSidenav" className="container-fluid" style={{ minHeight: '700px', textAlign: 'left' }}>
            <div className="row">
                <div className="col-md-2">
                    <SideBar />
                </div>
                <div id="layoutSidenav_content" className="col-md-10">

                    <main className="">
                        <div className="card">
                            <div className="card-header font-weight-bold">
                                Danh sách quyền của vai trò {nameRole}
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
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>

    )
}

export default RequireAdmin(RoleDetail);