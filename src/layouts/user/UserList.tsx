import SideBar from "../sidebar/SideBar";


function UserList() {
    return (
        <div id="layoutSidenav">
            <SideBar />
            <div id="layoutSidenav_content">
                <main>
                    <div id="content" className="container-fluid text-start">
                        <div className="card">
                            <div className="card-header font-weight-bold d-flex justify-content-between align-items-center">
                                <h5 className="m-0 ">Danh sách thành viên</h5>
                                <div className="form-search form-inline">
                                    <form action="#">
                                        <input type="" className="form-control form-search" placeholder="Tìm kiếm" />
                                    </form>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="analytic">
                                    <a href="" className="text-primary">Trạng thái 1<span className="text-muted">(10)</span></a>
                                    <a href="" className="text-primary">Trạng thái 2<span className="text-muted">(5)</span></a>
                                    <a href="" className="text-primary">Trạng thái 3<span className="text-muted">(20)</span></a>
                                </div>
                                <div className="form-action form-inline py-3 row">
                                    <div className="col-md-2">
                                        <select className="form-control mr-1" id="">
                                            <option>Action</option>
                                            <option>Delete</option>
                                            <option>Order By Name</option>
                                        </select>
                                    </div>
                                </div>
                                <table className="table table-striped table-checkall">
                                    <thead>
                                        <tr>
                                            <th>
                                                <input type="checkbox" name="checkall" />
                                            </th>
                                            <th scope="col">#</th>
                                            <th scope="col">Họ tên</th>
                                            <th scope="col">Username</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Quyền</th>
                                            <th scope="col">Ngày tạo</th>
                                            <th scope="col">Tác vụ</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <input type="checkbox" />
                                            </td>
                                            <th scope="row">1</th>
                                            <td>Phan Văn Cương</td>
                                            <td>phancuong</td>
                                            <td>phancuong.qt@gmail.com</td>
                                            <td>Admintrator</td>
                                            <td>26:06:2020 14:00</td>
                                            <td>
                                                <a href="#" className="btn btn-success btn-sm rounded-0 text-white" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i className="fa fa-edit"></i></a>
                                                <a href="#" className="btn btn-danger btn-sm rounded-0 text-white" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i className="fa fa-trash"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="checkbox" />
                                            </td>
                                            <th scope="row">2</th>
                                            <td>Phan Trần Minh Anh</td>
                                            <td>minhanh</td>
                                            <td>minhanh@gmail.com</td>
                                            <td>Editor</td>
                                            <td>26:06:2020 14:00</td>
                                            <td>
                                                <a href="#" className="btn btn-success btn-sm rounded-0 text-white" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i className="fa fa-edit"></i></a>
                                                <a href="#" className="btn btn-danger btn-sm rounded-0 text-white" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i className="fa fa-trash"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="checkbox" />
                                            </td>
                                            <th scope="row">3</th>
                                            <td>Nguyễn Hồng Nhung</td>
                                            <td>hongnhung</td>
                                            <td>hongnhung@gmail.com</td>
                                            <td>Editor</td>
                                            <td>26:06:2020 14:00</td>
                                            <td>
                                                <a href="#" className="btn btn-success btn-sm rounded-0 text-white" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i className="fa fa-edit"></i></a>
                                                <a href="#" className="btn btn-danger btn-sm rounded-0 text-white" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i className="fa fa-trash"></i></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Previous">
                                                <span aria-hidden="true">Trước</span>
                                                <span className="sr-only">Sau</span>
                                            </a>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>

    )
}

export default UserList;