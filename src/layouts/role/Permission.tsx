import SideBar from "../sidebar/SideBar";


function Permission() {
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
                                        Thêm quyền
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="name">Tên quyền</label>
                                                <input className="form-control" type="text" name="name" id="name" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="slug">Slug</label>
                                                <small className="form-text text-muted pb-2">Ví dụ: posts.add</small>
                                                <input className="form-control" type="text" name="slug" id="slug" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="description">Mô tả</label>
                                                <textarea className="form-control" name="description" id="description"> </textarea>
                                            </div>
                                            <button type="submit" className="btn btn-primary">Thêm mới</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-8">
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
                                                    <th scope="col">Mô tả</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td scope="row"></td>
                                                    <td><strong>Post</strong></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td scope="row">1</td>
                                                    <td>|---Add Post</td>
                                                    <td>post.add</td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td scope="row">2</td>
                                                    <td>|---Edit Post</td>
                                                    <td>post.edit</td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td scope="row">3</td>
                                                    <td>|---Delete Post</td>
                                                    <td>post.delete</td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td scope="row"></td>
                                                    <td><strong>Product</strong></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td scope="row">4</td>
                                                    <td>|---Add Product</td>
                                                    <td>product.add</td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td scope="row">5</td>
                                                    <td>|---Edit Product</td>
                                                    <td>product.edit</td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td scope="row">6</td>
                                                    <td>|---Delete Product</td>
                                                    <td>product.delete</td>
                                                    <td></td>
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

export default Permission;