import SideBar from "../sidebar/SideBar";
import PermissionModule from "./PermissionModule";


function RoleForm() {
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
                                <form method="POST" action="">

                                    <div className="form-group mt-2">
                                        <label className="text-strong" htmlFor="name">Tên vai trò</label>
                                        <input className="form-control" type="text" name="name" id="name" />
                                    </div>
                                    <div className="form-group my-4">
                                        <label className="text-strong" htmlFor="description">Mô tả</label>
                                        <textarea className="form-control" name="description" id="description"></textarea>
                                    </div>
                                    <strong className="pt-2">Vai trò này có quyền gì?</strong>
                                    <small className="form-text text-muted pb-2"> Check vào module hoặc các hành động bên dưới để chọn quyền.</small>

                                    <PermissionModule />

                                    <input type="submit" name="btn-add" className="btn btn-primary" value="Thêm mới" />
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default RoleForm;