import SideBar from "../sidebar/SideBar";

function PostForm() {
    return (
        <div id="layoutSidenav">
            <SideBar />
            <div id="layoutSidenav_content">
                <main>
                    <div id="content" className="container-fluid">
                        <div className="card">
                            <div className="card-header font-weight-bold">
                                Thêm bài viết
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="name">Tiêu đề bài viết</label>
                                        <input className="form-control" type="text" name="name" id="name"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="content">Nội dung bài viết</label>
                                        <textarea name="" className="form-control" id="content" ></textarea>
                                    </div>


                                    <div className="form-group">
                                        <label htmlFor="">Danh mục</label>
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
                                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                                                <label className="form-check-label" htmlFor="exampleRadios1">
                                                    Chờ duyệt
                                                </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
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
                </main>
            </div>
        </div>
    )
}

export default PostForm;