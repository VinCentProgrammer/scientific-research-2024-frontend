import { useEffect, useState } from "react";
import SideBar from "../../sidebar/SideBar";
import PostCatModel from "../../../models/PostCatModel";
import { getPostCatById, getPostCats } from "../../../api/PostCatAPI";
import getBase64 from "../../../utils/base64/Base64";
import { jwtDecode } from "jwt-decode";
import JwtPayload from "../../../models/JwtPayLoad";
import { NavLink } from "react-router-dom";
import AdminOrStaffRequire from "../../require/AdminOrStaffRequire";

function AdminPostForm() {
    const [postCats, setPostCats] = useState<PostCatModel[]>([]);
    const [title, setTitle] = useState<string>('');
    const [desc, setDesc] = useState<string>('');
    const [detail, setDetail] = useState<string>('');
    const [postCatId, setPostCatId] = useState<number>(0);
    const [thumbnail, setThumbnail] = useState<File | null>(null);

    const [errorTitle, setErrorTitle] = useState<string>('');
    const [errorDesc, setErrorDesc] = useState<string>('');
    const [errorDetail, setErrorDetail] = useState<string>('');
    const [errorPostCatId, setErrorPostCatId] = useState<string>('');
    const [errorThumbnail, setErrorThumbnail] = useState<string>('');
    const [successNoti, setSuccessNoti] = useState("");
    const [errorNoti, setErrorNoti] = useState("");

    useEffect(() => {
        getPostCats()
            .then(
                result => {
                    setPostCats(result);
                }
            )
    }, [])

    const handleOnChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setTitle(e.target.value);
            setErrorTitle('');
        } else {
            setTitle('');
            setErrorTitle('This field cannot be left blank');
        }
    }

    const handleOnChangeDesc = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setDesc(e.target.value);
            setErrorDesc('');
        } else {
            setDesc('');
            setErrorDesc('This field cannot be left blank');
        }
    }


    const handleOnChangeDetail = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (e.target.value) {
            setDetail(e.target.value);
            setErrorDetail('');
        } else {
            setDetail('');
            setErrorDetail('This field cannot be left blank');
        }
    }


    const handleOnChangePostCatId = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setPostCatId(parseInt(event.target.value));
    }

    const handleThumbnailOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0];
            setThumbnail(file);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        setErrorTitle('');
        setErrorDesc('');
        setErrorDetail('');
        setErrorPostCatId('');
        setErrorThumbnail('');
        // Prevent default
        e.preventDefault();

        const token = localStorage.getItem('token');
        if (title && desc && detail && postCatId && thumbnail && token) {
            const base64Thumbnail = thumbnail ? await getBase64(thumbnail) : null;
            const decodedToken = jwtDecode(token) as JwtPayload;
            const userId = decodedToken.userId;

            fetch("http://localhost:8080/api/post/add",
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        postId: 0,
                        title: title,
                        desc: desc,
                        detail: detail,
                        postCatId: postCatId,
                        thumbnail: base64Thumbnail,
                        userId: userId,
                        createdAt: '',
                    })
                }
            ).then((response) => {
                if (response.ok) {
                    setSuccessNoti("Added successfully!");
                    setTitle('');
                    setDesc('');
                    setDetail('');
                    setPostCatId(0);
                    setThumbnail(null);
                } else {
                    setErrorNoti("An error occurred while adding!");
                }
            })
        }
    }


    return (
        <div id="layoutSidenav" className="container-fluid" style={{ minHeight: '700px', textAlign: 'left' }}>
            <div className="row">
                <div className="col-md-2">
                    <SideBar />
                </div>
                <div id="layoutSidenav_content" className="col-md-10">
                    <main>
                        <div id="content" className="container-fluid">
                            <div className="card">
                                <div className="card-header font-weight-bold" style={{ fontWeight: 'bold' }}>
                                    Add New Post
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="title">Title Post
                                                <span className="text-danger">(*) {errorTitle}</span>
                                            </label>
                                            <input className="form-control" type="text" name="name" id="title"
                                                value={title}
                                                onChange={handleOnChangeTitle}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="desc">Description
                                                <span className="text-danger">(*) {errorDesc}</span>
                                            </label>
                                            <input className="form-control" type="text" name="name" id="desc"
                                                value={desc}
                                                onChange={handleOnChangeDesc}
                                            />
                                        </div>

                                        <div className="form-group mt-2">
                                            <label htmlFor="detail">Content Post
                                                <span className="text-danger">(*) {errorDetail}</span>
                                            </label>
                                            <textarea
                                                className="form-control"
                                                value={detail}
                                                onChange={handleOnChangeDetail}
                                                rows={4}
                                                cols={50}
                                            />
                                        </div>


                                        <div className="form-group mt-2">
                                            <label htmlFor="">Belong To Category Post
                                                <span className="text-danger">(*) {errorPostCatId}</span>
                                            </label>
                                            <select className="form-control" id=""
                                                value={postCatId}
                                                onChange={handleOnChangePostCatId}
                                            >
                                                <option value={0}>Choice</option>
                                                {
                                                    postCats.map((postCat) => (
                                                        <option
                                                            key={postCat.postCatId}
                                                            value={postCat.postCatId}
                                                        >{postCat.postCatName}
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                        </div>


                                        {/* Avatar */}
                                        <div className="d-flex flex-row align-items-center mb-4  text-start">
                                            <div className="form-outline flex-fill mb-0">
                                                <label className="form-label" htmlFor="avatar">Thumbnail
                                                    <span className="text-danger">(*) {errorThumbnail}</span>
                                                </label>
                                                <input type="file" id="avatar" className="form-control"
                                                    accept='images/*'
                                                    onChange={handleThumbnailOnChange}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            {
                                                successNoti && <NavLink to='/admin/post/list' className="btn btn-info btn-sm w-25 col-md-6 mx-4 mt-4">View list post </NavLink>
                                            }
                                            <button type="submit" className="btn btn-primary btn-sm w-25 col-md-6 mt-4">Add</button>
                                        </div>
                                        {successNoti && <div className="text-success">{successNoti}</div>}
                                        {errorNoti && <div className="text-danger">{errorNoti}</div>}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default AdminOrStaffRequire(AdminPostForm);