import SideBar from "../sidebar/SideBar";


function RoleList() {
    return (
        <div id="layoutSidenav">
            <SideBar />
            <div id="layoutSidenav_content">
                <main>
                    <div id="content" className="container-fluid text-start">
                        <div className="card">
                            <div className="card-header font-weight-bold d-flex justify-content-between align-items-center p-4">
                                <h5 className="m-0 ">Danh sách vai trò</h5>
                                <div className="form-search form-inline">
                                    <form action="#">
                                        <input type="" className="form-control form-search" placeholder="Tìm kiếm" />
                                    </form>
                                </div>
                            </div>
                            <div className="card-body">
                                <table className="table table-striped table-checkall">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Vai trò</th>
                                            <th scope="col">Mô tả</th>
                                            <th scope="col">Ngày tạo</th>
                                            <th scope="col">Tác vụ</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td scope="row">1</td>
                                            <td><a href="">Admin</a></td>
                                            <td>Quản trị chung toàn bộ hệ thống</td>
                                            <td>26:06:2025 14:00</td>
                                            <td><button className="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i className="fa fa-edit"></i></button>
                                                <button className="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i className="fa fa-trash"></i></button>
                                            </td>

                                        </tr>
                                        <tr>
                                            <td scope="row">2</td>
                                            <td><a href="">Content Manager</a></td>
                                            <td>Quản lý phát triển nội dung</td>
                                            <td>26:06:2025 14:00</td>
                                            <td><button className="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i className="fa fa-edit"></i></button>
                                                <button className="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i className="fa fa-trash"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td scope="row">3</td>
                                            <td><a href="">Sale Manager</a></td>
                                            <td>Quản lý bán hàng</td>
                                            <td>26:06:2025 14:00</td>
                                            <td><button className="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i className="fa fa-edit"></i></button>
                                                <button className="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i className="fa fa-trash"></i></button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default RoleList;