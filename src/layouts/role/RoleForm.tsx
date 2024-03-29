import { NavLink } from "react-router-dom";
import { getPermission } from "../../api/PermissionAPI";
import PermissionModel from "../../models/PermissionModel";
import SideBar from "../sidebar/SideBar";
import { useState, useEffect } from 'react';
import RequireAdmin from "../admin/RequireAdmin";


function RoleForm() {

    const [permissions, setPermissions] = useState<PermissionModel[] | null>([]);
    const [selectedPermissions, setSelectedPermissions] = useState<string[]>([]); // State để lưu các quyền được chọn
    const [roleName, setRoleName] = useState<string>('');
    const [desc, setDesc] = useState<string>('');

    const [errorRoleName, setErrorRoleName] = useState<string>('');
    const [errorDesc, setErrorDesc] = useState<string>('');
    const [successNoti, setSuccessNoti] = useState("");
    const [errorNoti, setErrorNoti] = useState("");


    const handleSubmit = (e: React.FormEvent) => {
        // Clear 
        setErrorRoleName('');
        setErrorDesc('');

        // Prevent default
        e.preventDefault();

        // 
        if (roleName && desc && selectedPermissions) {
            const token = localStorage.getItem('token');
            fetch("http://localhost:8080/role/add",
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        permissionId: 0,
                        roleName: roleName,
                        desc: desc,
                        permissions: selectedPermissions,
                    })
                }
            ).then((response) => {
                if (response.ok) {
                    setSuccessNoti("Đã thêm vai trò thành công!");
                    setRoleName('');
                    setDesc('');
                } else {
                    setErrorNoti("Gặp lỗi trong quá trình thêm vai trò!");
                }
            })
        }
    }

    const handleOnChangeRoleName = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setRoleName(e.target.value);
            setErrorRoleName('');
        } else {
            setRoleName('');
            setErrorRoleName('Trường này không được bỏ trống');
        }
    }

    const handleOnChangeDesc = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setDesc(e.target.value);
            setErrorDesc('');
        } else {
            setDesc('');
            setErrorDesc('Trường này không được bỏ trống');
        }
    }

    const handlePermissionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const permissionId = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) {
            setSelectedPermissions([...selectedPermissions, permissionId]); // Thêm quyền được chọn vào danh sách
        } else {
            setSelectedPermissions(selectedPermissions.filter(id => id !== permissionId)); // Xóa quyền được bỏ chọn khỏi danh sách
        }
    };

    useEffect(() => {
        getPermission("http://localhost:8080/permission")
            .then(
                res => {
                    setPermissions(res.result);
                }
            )
            .catch((error) => {
                console.log(error.message);
            })
    }, [])

    // Hàm để lấy danh sách các module từ dữ liệu permissions
    const getModules = (): { [key: string]: PermissionModel[] } => {
        if (!permissions) return {};

        // Sử dụng phương thức reduce để tạo một đối tượng với các module làm khóa
        return permissions.reduce((modules: { [key: string]: PermissionModel[] }, permission: PermissionModel) => {
            const moduleName: string = permission.name;
            if (!modules[moduleName]) {
                modules[moduleName] = [];
            }
            modules[moduleName].push(permission);
            return modules;
        }, {});
    }

    // Hàm để render HTML cho từng module
    const renderModulePermissions = (moduleName: string, modulePermissions: PermissionModel[]): JSX.Element => {
        return (
            <div key={moduleName}>
                <div className="card my-4 border">
                    <div className="card-header">
                        <label htmlFor={moduleName.toLowerCase()} className="m-2">Module {moduleName}</label>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            {/* Mapping through modulePermissions array and rendering each permission */}
                            {modulePermissions.map(permission => (
                                <div className="col-md-3" key={permission.permissionId}>
                                    <input type="checkbox" className="permission m-2" value={permission.permissionId} name="permission_id[]" id={permission.slug} onChange={handlePermissionChange} />
                                    <label htmlFor={permission.slug}>{permission.desc}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Lấy danh sách các module
    const modules = getModules();

    return (
        <div id="layoutSidenav">
            <SideBar />
            <div id="layoutSidenav_content">
                <main>
                    <div id="content" className="container-fluid text-start">
                        <div className="card">
                            <div className="card-header font-weight-bold d-flex justify-content-between align-items-center">
                                <h5 className="m-2 ">Thêm mới vai trò</h5>
                            </div>
                            <div className="card-body">
                                <form method="POST" action=""
                                    onSubmit={handleSubmit}
                                >

                                    <div className="form-group mt-2">
                                        <label className="text-strong" htmlFor="name">Tên vai trò <span className="text-danger">(*) {errorRoleName}</span></label>
                                        <input className="form-control" type="text" name="name" id="name"
                                            value={roleName}
                                            onChange={handleOnChangeRoleName}
                                        />
                                    </div>
                                    <div className="form-group my-4">
                                        <label className="text-strong" htmlFor="description">Mô tả <span className="text-danger">(*) {errorDesc}</span></label>
                                        <input className="form-control" type="text" name="desc" id="desc"
                                            value={desc}
                                            onChange={handleOnChangeDesc}
                                        />
                                    </div>
                                    <strong className="pt-2">Vai trò này có quyền gì?</strong>
                                    <small className="form-text text-muted pb-2"> Check vào module hoặc các hành động bên dưới để chọn quyền.</small>
                                    <div>
                                        {/* Duyệt qua danh sách các module và render HTML tương ứng */}
                                        {Object.keys(modules).map(moduleName => (
                                            renderModulePermissions(moduleName, modules[moduleName])
                                        ))}
                                    </div>
                                    <div>
                                        {
                                            successNoti && <NavLink to='/admin/role/list' className="btn btn-info btn-sm w-25 col-md-6 mx-4 mt-4">View list role</NavLink>
                                        }
                                        <button type="submit" className="btn btn-primary btn-sm w-25 col-md-6 mt-4">Thêm mới</button>
                                    </div>
                                    {successNoti && <div className="text-success">{successNoti}</div>}
                                    {errorNoti && <div className="text-danger">{errorNoti}</div>}
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default RequireAdmin(RoleForm);