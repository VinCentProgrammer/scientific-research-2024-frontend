import SideBar from "../sidebar/SideBar";

function PostCat() {
    return (
        <div id="layoutSidenav">
            <SideBar />
            <div id="layoutSidenav_content">
                <main>
                    <div id="content" className="container-fluid">
                        <div className="row">
                            <div className="col-4">
                                <div className="card">
                                    <div className="card-header font-weight-bold">
                                        Thêm danh mục
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="name">Tên danh mục</label>
                                                <input className="form-control" type="text" name="name" id="name" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="">Danh mục cha</label>
                                                <select className="form-control" id="">
                                                    <option>Chọn danh mục</option>
                                                    <option>Danh mục 1</option>
                                                    <option>Danh mục 2</option>
                                                    <option>Danh mục 3</option>
                                                    <option>Danh mục 4</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="">Trạng thái</label>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                                    <label className="form-check-label" htmlFor="exampleRadios1">
                                                        Chờ duyệt
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                                    <label className="form-check-label" htmlFor="exampleRadios2">
                                                        Công khai
                                                    </label>
                                                </div>
                                            </div>



                                            <button type="submit" className="btn btn-primary">Thêm mới</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="card">
                                    <div className="card-header font-weight-bold">
                                        Danh mục
                                    </div>
                                    <div className="card-body">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">First</th>
                                                    <th scope="col">Last</th>
                                                    <th scope="col">Handle</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        </div>
    )
}

export default PostCat;