import SideBar from "../sidebar/SideBar";
import { useRef, useState } from "react";
import ReactQuill from "react-quill";

function PageForm(): JSX.Element {
    const [value, setValue] = useState('');

    return (
        <div id="layoutSidenav">
            <SideBar />
            <div id="layoutSidenav_content" className="text-start">
                <main>
                    <div id="content" className="container-fluid">
                        <div className="card">
                            <div className="card-header font-weight-bold">
                                Thêm trang
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group mt-3">
                                        <label htmlFor="name">Tên trang</label>
                                        <input className="form-control" type="text" name="name" id="name" />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label htmlFor="desc">Mô tả ngắn</label>
                                        <input className="form-control" type="text" name="name" id="desc" />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label htmlFor="detail">Chi tiết</label>
                                        <input className="form-control" type="text" name="name" id="detail" />
                                    </div>
                                    <button type="submit" className="btn btn-primary  mt-3">Thêm</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default PageForm;
