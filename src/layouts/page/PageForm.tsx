import SideBar from "../sidebar/SideBar";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";

function PageForm(): JSX.Element {
    const [detail, setDetail] = useState<string>('');

    const handleReady = (editor: any) => {
        editor.editing.view.change((writer: any) => {
            writer.setStyle(
                "height",
                "200px",
                editor.editing.view.document.getRoot()
            );
        });
    };

    const handleChange = (event: any, editor: any) => {
        const data = editor.getData();
        setDetail(data);
    };

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
                                        <label htmlFor="content">Mô tả ngắn</label>
                                        <textarea name="" className="form-control" id="content" ></textarea>
                                    </div>
                                    <div className="form-group mt-3">
                                        <label htmlFor="detail">Chi tiết</label>
                                        <CKEditor
                                            editor={ClassicEditor}
                                            data={detail}
                                            onReady={handleReady}
                                            onChange={handleChange}
                                            config={{
                                                toolbar: [
                                                    'heading', '|',
                                                    'bold', 'italic', 'underline', 'strikethrough', '|',
                                                    'bulletedList', 'numberedList', '|',
                                                    'link', 'imageUpload', '|',
                                                    'alignment', '|',
                                                    'blockQuote', '|',
                                                    'undo', 'redo'
                                                ],
                                                image: {
                                                    toolbar: ['imageTextAlternative', '|', 'imageStyle:alignLeft', 'imageStyle:full', 'imageStyle:alignRight']
                                                }
                                            }}
                                        />
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
