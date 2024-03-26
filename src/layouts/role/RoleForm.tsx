import SideBar from "../sidebar/SideBar";


function RoleForm() {
    return (
        <div id="layoutSidenav">
            <SideBar />
            <div id="layoutSidenav_content">
                <main>
                    <div id="content" className="container-fluid">
                        <div className="card">
                            <div className="card-header font-weight-bold d-flex justify-content-between align-items-center">
                                <h5 className="m-0 ">Thêm mới vai trò</h5>
                                <div className="form-search form-inline">
                                    <form action="#">
                                        <input type="" className="form-control form-search" placeholder="Tìm kiếm" />
                                        <input type="submit" name="btn-search" value="Tìm kiếm" className="btn btn-primary" />
                                    </form>
                                </div>
                            </div>
                            <div className="card-body">
                                <form method="POST" action="">

                                    <div className="form-group">
                                        <label className="text-strong" htmlFor="name">Tên vai trò</label>
                                        <input className="form-control" type="text" name="name" id="name" />
                                    </div>
                                    <div className="form-group">
                                        <label className="text-strong" htmlFor="description">Mô tả</label>
                                        <textarea className="form-control" name="description" id="description"></textarea>
                                    </div>
                                    <strong>Vai trò này có quyền gì?</strong>
                                    <small className="form-text text-muted pb-2">Check vào module hoặc các hành động bên dưới để chọn quyền.</small>

                                    <div className="card my-4 border">
                                        <div className="card-header">
                                            <input type="checkbox" className="check-all" name="" id="post" />
                                            <label htmlFor="post" className="m-0">Module Post</label>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <input type="checkbox" className="permission" value="2" name="permission_id[]" id="post.add" />
                                                    <label htmlFor="post.add">Add Post</label>
                                                </div>
                                                <div className="col-md-3">
                                                    <input type="checkbox" className="permission" value="3" name="permission_id[]" id="post.edit" />
                                                    <label htmlFor="post.edit">Edit Post</label>
                                                </div>
                                                <div className="col-md-3">
                                                    <input type="checkbox" className="permission" value="4" name="permission_id[]" id="post.delete" />
                                                    <label htmlFor="post.delete">Delete Post</label>
                                                </div>
                                                <div className="col-md-3">
                                                    <input type="checkbox" className="permission" value="5" name="permission_id[]" id="post.list" />
                                                    <label htmlFor="post.edit">List Post</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card my-4 border">
                                        <div className="card-header">
                                            <input type="checkbox" className="check-all" name="" id="product" />
                                            <label htmlFor="product" className="m-0">Module Product</label>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <input type="checkbox" className="permission" value="2" name="permission_id[]" id="product.add" />
                                                    <label htmlFor="product.add">Add Product</label>
                                                </div>
                                                <div className="col-md-3">
                                                    <input type="checkbox" className="permission" value="3" name="permission_id[]" id="product.edit" />
                                                    <label htmlFor="product.edit">Edit Product</label>
                                                </div>
                                                <div className="col-md-3">
                                                    <input type="checkbox" className="permission" value="4" name="permission_id[]" id="product.delete" />
                                                    <label htmlFor="product.delete">Delete Product</label>
                                                </div>
                                                <div className="col-md-3">
                                                    <input type="checkbox" className="permission" value="5" name="permission_id[]" id="product.list" />
                                                    <label htmlFor="product.add">List Product</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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