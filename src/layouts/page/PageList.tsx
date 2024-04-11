import SideBar from "../sidebar/SideBar";

function PageList() {
    return (
        <div id="layoutSidenav">
            <SideBar />
            <div id="layoutSidenav_content" className="text-start">
                <main>
                    <div id="content" className="container-fluid">
                        <div className="card">
                            <div className="card-header font-weight-bold d-flex justify-content-between align-items-center">
                                <h5 className="m-0 ">Page List</h5>
                                <div className="form-search form-inline">
                                    <form action="#">
                                        <input type="" className="form-control form-search" placeholder="Tìm kiếm" />
                                        <input type="submit" name="btn-search" value="Tìm kiếm" className="btn btn-primary" />
                                    </form>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="analytic">
                                    <a href="" className="text-primary">Trạng thái 1<span className="text-muted">(10)</span></a>
                                    <a href="" className="text-primary">Trạng thái 2<span className="text-muted">(5)</span></a>
                                    <a href="" className="text-primary">Trạng thái 3<span className="text-muted">(20)</span></a>
                                </div>
                                <div className="form-action form-inline py-3">
                                    <select className="form-control mr-1" id="">
                                        <option>Chọn</option>
                                        <option>Tác vụ 1</option>
                                        <option>Tác vụ 2</option>
                                    </select>
                                    <input type="submit" name="btn-search" value="Áp dụng" className="btn btn-primary" />
                                </div>
                                <table className="table table-striped table-checkall">
                                    <thead>
                                        <tr>
                                            <th scope="col">
                                                <input name="checkall" type="checkbox" />
                                            </th>
                                            <th scope="col">#</th>
                                            <th scope="col">Ảnh</th>
                                            <th scope="col">Tiêu đề</th>
                                            <th scope="col">Danh mục</th>
                                            <th scope="col">Ngày tạo</th>
                                            <th scope="col">Tác vụ</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <input type="checkbox" />
                                            </td>
                                            <td scope="row">1</td>
                                            <td><img src="http://via.placeholder.com/80X80" alt="" /></td>
                                            <td><a href="">Giá xăng sẽ tiếp tục tăng ở mức cao, lần thứ 4 liên tiếp vào ngày mai?</a></td>
                                            <td>Tin nóng</td>
                                            <td>26:06:2020 14:00</td>
                                            <td><button className="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i className="fa fa-edit"></i></button>
                                                <button className="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i className="fa fa-trash"></i></button>
                                            </td>

                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="checkbox" />
                                            </td>
                                            <td scope="row">2</td>
                                            <td><img src="http://via.placeholder.com/80X80" alt="" /></td>
                                            <td><a href="#">Xuất hiện ứng dụng ngân hàng Việt Nam leo lên vị trí Top 1 trên App Store</a></td>
                                            <td>Tin nóng</td>
                                            <td>26:06:2020 14:00</td>
                                            <td><button className="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i className="fa fa-edit"></i></button>
                                                <button className="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i className="fa fa-trash"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="checkbox" />
                                            </td>
                                            <td scope="row">3</td>
                                            <td><img src="http://via.placeholder.com/80X80" alt="" /></td>
                                            <td><a href="">Giá xăng sẽ tiếp tục tăng ở mức cao, lần thứ 4 liên tiếp vào ngày mai?</a></td>
                                            <td>Tin nóng</td>
                                            <td>26:06:2020 14:00</td>
                                            <td><button className="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i className="fa fa-edit"></i></button>
                                                <button className="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i className="fa fa-trash"></i></button>
                                            </td>

                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="checkbox" />
                                            </td>
                                            <td>4</td>
                                            <td><img src="http://via.placeholder.com/80X80" alt="" /></td>
                                            <td><a href="">Xuất hiện ứng dụng ngân hàng Việt Nam leo lên vị trí Top 1 trên App Store</a></td>
                                            <td>Tin nóng</td>
                                            <td>26:06:2020 14:00</td>
                                            <td><button className="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i className="fa fa-edit"></i></button>
                                                <button className="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i className="fa fa-trash"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="checkbox" />
                                            </td>
                                            <td scope="row">5</td>
                                            <td><img src="http://via.placeholder.com/80X80" alt="" /></td>

                                            <td><a href="">Giá xăng sẽ tiếp tục tăng ở mức cao, lần thứ 4 liên tiếp vào ngày mai?</a></td>
                                            <td>Tin nóng</td>
                                            <td>26:06:2020 14:00</td>
                                            <td><button className="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i className="fa fa-edit"></i></button>
                                                <button className="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i className="fa fa-trash"></i></button>
                                            </td>

                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="checkbox" />
                                            </td>
                                            <td scope="row">6</td>

                                            <td><img src="http://via.placeholder.com/80X80" alt="" /></td>

                                            <td><a href="#">Xuất hiện ứng dụng ngân hàng Việt Nam leo lên vị trí Top 1 trên App Store</a></td>
                                            <td>Tin nóng</td>
                                            <td>26:06:2020 14:00</td>
                                            <td><button className="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i className="fa fa-edit"></i></button>
                                                <button className="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i className="fa fa-trash"></i></button>
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

export default PageList;