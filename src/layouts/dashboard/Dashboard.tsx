import RequireAdminOrStaff from "../admin/RequireAdminOrStaff";
import SideBar from "../sidebar/SideBar";

function Dashboard() {
    return (
        <div id="layoutSidenav" className="container-fluid" style={{ minHeight: '700px', textAlign: 'left' }}>
            <div className="row">
                <div className="col-md-2">
                    <SideBar />
                </div>
                <div id="layoutSidenav_content" className="col-md-10">
                    <main>
                        <div className="container-fluid py-5">
                            <div className="row">
                                <div className="col">
                                    <div className="card text-white bg-primary mb-3" style={{ maxWidth: '18rem' }}>
                                        <div className="card-header">ĐƠN HÀNG THÀNH CÔNG</div>
                                        <div className="card-body">
                                            <h5 className="card-title">2.680</h5>
                                            <p className="card-text">Đơn hàng giao dịch thành công</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card text-white bg-danger mb-3" style={{ maxWidth: '18rem' }}>
                                        <div className="card-header">ĐANG XỬ LÝ</div>
                                        <div className="card-body">
                                            <h5 className="card-title">10</h5>
                                            <p className="card-text">Số lượng đơn hàng đang xử lý</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card text-white bg-success mb-3" style={{ maxWidth: '18rem' }}>
                                        <div className="card-header">DOANH SỐ</div>
                                        <div className="card-body">
                                            <h5 className="card-title">2.5 tỷ</h5>
                                            <p className="card-text">Doanh số hệ thống</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card text-white bg-dark mb-3" style={{ maxWidth: '18rem' }}>
                                        <div className="card-header">ĐƠN HÀNG HỦY</div>
                                        <div className="card-body">
                                            <h5 className="card-title">125</h5>
                                            <p className="card-text">Số đơn bị hủy trong hệ thống</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header font-weight-bold">
                                    ĐƠN HÀNG MỚI
                                </div>
                                <div className="card-body">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Mã</th>
                                                <th scope="col">Khách hàng</th>
                                                <th scope="col">Sản phẩm</th>
                                                <th scope="col">Số lượng</th>
                                                <th scope="col">Giá trị</th>
                                                <th scope="col">Trạng thái</th>
                                                <th scope="col">Thời gian</th>
                                                <th scope="col">Tác vụ</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>1212</td>
                                                <td>
                                                    Phan Văn Cương <br />
                                                    0988859692
                                                </td>
                                                <td><a href="#">Samsung Galaxy A51 (8GB/128GB)</a></td>
                                                <td>1</td>
                                                <td>7.790.000₫</td>
                                                <td><span className="badge badge-warning">Đang xử lý</span></td>
                                                <td>26:06:2020 14:00</td>
                                                <td>
                                                    <a href="#" className="btn btn-success btn-sm rounded-0 text-white" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i className="fa fa-edit"></i></a>
                                                    <a href="#" className="btn btn-danger btn-sm rounded-0 text-white" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i className="fa fa-trash"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>1213</td>
                                                <td>
                                                    Minh Anh <br />
                                                    0868873382
                                                </td>
                                                <td><a href="#">Samsung Galaxy A51 (8GB/128GB)</a></td>
                                                <td>1</td>
                                                <td>7.790.000₫</td>
                                                <td><span className="badge badge-warning">Đang xử lý</span></td>
                                                <td>26:06:2020 14:00</td>
                                                <td>
                                                    <a href="#" className="btn btn-success btn-sm rounded-0 text-white" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i className="fa fa-edit"></i></a>
                                                    <a href="#" className="btn btn-danger btn-sm rounded-0 text-white" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i className="fa fa-trash"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>1214</td>
                                                <td>
                                                    Trần Thu Hằng <br />
                                                    0234343545
                                                </td>
                                                <td><a href="#">Điện thoại iPhone 11 Pro Max 64GB</a></td>
                                                <td>1</td>
                                                <td>29.490.000₫</td>
                                                <td><span className="badge badge-success">Hoàn thành</span></td>
                                                <td>26:06:2020 14:00</td>
                                                <td>
                                                    <a href="#" className="btn btn-success btn-sm rounded-0 text-white" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i className="fa fa-edit"></i></a>
                                                    <a href="#" className="btn btn-danger btn-sm rounded-0 text-white" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i className="fa fa-trash"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">4</th>
                                                <td>1212</td>
                                                <td>
                                                    Tuấn Anh <br />
                                                    091236768
                                                </td>
                                                <td><a href="#">Apple MacBook Pro Touch 2020 i5 512GB</a></td>
                                                <td>1</td>
                                                <td>47.990.000₫</td>
                                                <td><span className="badge badge-warning">Đang xử lý</span></td>
                                                <td>26:06:2020 14:00</td>
                                                <td>
                                                    <a href="#" className="btn btn-success btn-sm rounded-0 text-white" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i className="fa fa-edit"></i></a>
                                                    <a href="#" className="btn btn-danger btn-sm rounded-0 text-white" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i className="fa fa-trash"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>1214</td>
                                                <td>
                                                    Trần Thu Hằng <br />
                                                    0234343545
                                                </td>
                                                <td><a href="#">Điện thoại iPhone 11 Pro Max 64GB</a></td>
                                                <td>1</td>
                                                <td>29.490.000₫</td>
                                                <td><span className="badge badge-success">Hoàn thành</span></td>
                                                <td>26:06:2020 14:00</td>
                                                <td>
                                                    <a href="#" className="btn btn-success btn-sm rounded-0 text-white" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i className="fa fa-edit"></i></a>
                                                    <a href="#" className="btn btn-danger btn-sm rounded-0 text-white" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i className="fa fa-trash"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">4</th>
                                                <td>1212</td>
                                                <td>
                                                    Tuấn Anh <br />
                                                    091236768
                                                </td>
                                                <td><a href="#">Apple MacBook Pro Touch 2020 i5 512GB</a></td>
                                                <td>1</td>
                                                <td>47.990.000₫</td>
                                                <td><span className="badge badge-success">Hoàn thành</span></td>
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
        </div>

    )
}

export default RequireAdminOrStaff(Dashboard);


<div id="layoutSidenav" className="container-fluid" style={{ minHeight: '700px', textAlign: 'left' }}>
    <div className="row">
        <div className="col-md-2">
            <SideBar />
        </div>
        <div id="layoutSidenav_content" className="col-md-10">

        </div>
    </div>
</div>
