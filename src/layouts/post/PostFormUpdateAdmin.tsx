import { useEffect, useState } from "react";
import SideBar from "../sidebar/SideBar";
import PostCatModel from "../../models/PostCatModel";
import { getPostCatByPostId, getPostCats } from "../../api/PostCatAPI";
import getBase64 from "../../utils/Base64";
import { jwtDecode } from "jwt-decode";
import JwtPayload from "../../models/JwtPayLoad";
import { NavLink, useParams } from "react-router-dom";
import { getPostById } from "../../api/PostAPI";
import PostModel from "../../models/PostModel";

function PostFormUpdateAdmin() {
    const { postIdParam } = useParams();

    let postId = 0;
    try {
        postId = parseInt(postIdParam + '');
    } catch (error) {
        postId = 0;
        console.log('Error', error);
    }
    if (Number.isNaN(postId))
        postId = 0;

    const [post, setPost] = useState<PostModel | null>(null);
    const [postCats, setPostCats] = useState<PostCatModel[]>([]);
    const [title, setTitle] = useState<string>('');
    const [desc, setDesc] = useState<string>('');
    const [detail, setDetail] = useState<string>('');
    const [postCatId, setPostCatId] = useState<number>(0);
    const [thumbnailBase64, setThumbnailBase64] = useState<string | null | undefined>(null);
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

    useEffect(() => {
        getPostCatByPostId(postId)
            .then(
                result => {
                    if (result !== null)
                        setPostCatId(result.postCatId);
                }
            )
    }, [postId])

    useEffect(() => {
        getPostById(postId)
            .then(
                result => {
                    setPost(result);
                }
            ).catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, [postId]);


    useEffect(() => {
        if (post !== null) {
            setTitle(post.title === undefined ? '' : post.title)
            setDesc(post.desc === undefined ? '' : post.desc)
            setDetail(post.detail === undefined ? '' : post.detail)
            setTitle(post.title === undefined ? '' : post.title)
            setThumbnailBase64(post.thumbnail === null ? null : post.thumbnail);
        }
    }, [post]);

    const handleOnChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setTitle(e.target.value);
            setErrorTitle('');
        } else {
            setTitle('');
            setErrorTitle('Trường này không được bỏ trống');
        }
    }

    const handleOnChangeDesc = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setDesc(e.target.value);
            setErrorDesc('');
        } else {
            setDesc('');
            setErrorDesc('Trường này không được bỏ trống');
        }
    }


    const handleOnChangeDetail = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setDetail(e.target.value);
            setErrorDetail('');
        } else {
            setDetail('');
            setErrorDetail('Trường này không được bỏ trống');
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
        // Clear 
        setErrorTitle('');
        setErrorDesc('');
        setErrorDetail('');
        setErrorPostCatId('');
        setErrorThumbnail('');

        // Prevent default
        e.preventDefault();

        // 

        const token = localStorage.getItem('token');
        if (title && desc && detail && postCatId && token) {
            const base64Thumbnail = thumbnail ? await getBase64(thumbnail) : thumbnailBase64;
            const decodedToken = jwtDecode(token) as JwtPayload;
            const userId = decodedToken.userId;
            fetch("http://localhost:8080/api/post/update",
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        postId: postId,
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
                    setSuccessNoti("Đã cập nhật thành công!");
                    setTitle('');
                    setDesc('');
                    setDetail('');
                    setPostCatId(0);
                    setThumbnail(null);
                } else {
                    setErrorNoti("Gặp lỗi trong quá trình cập nhật!");
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
                                <div className="card-header font-weight-bold">
                                    Thêm bài viết
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="title">Tiêu đề bài viết
                                                <span className="text-danger">(*) {errorTitle}</span>
                                            </label>
                                            <input className="form-control" type="text" name="name" id="title"
                                                value={title}
                                                onChange={handleOnChangeTitle}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="desc">Mô tả
                                                <span className="text-danger">(*) {errorDesc}</span>
                                            </label>
                                            <input className="form-control" type="text" name="name" id="desc"
                                                value={desc}
                                                onChange={handleOnChangeDesc}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="detail">Nội dung bài viết
                                                <span className="text-danger">(*) {errorDetail}</span>
                                            </label>
                                            <input className="form-control" type="text" name="name" id="detail"
                                                value={detail}
                                                onChange={handleOnChangeDetail}

                                            />
                                        </div>

                                        <div className="form-group mt-2">
                                            <label htmlFor="">Thuộc danh mục
                                                <span className="text-danger">(*) {errorPostCatId}</span>
                                            </label>
                                            <select className="form-control" id=""
                                                value={postCatId}
                                                onChange={handleOnChangePostCatId}
                                            >
                                                <option value={0}>Chọn</option>
                                                {
                                                    postCats.map((postCat) => (
                                                        <option
                                                            key={postCat.postCatId}
                                                            value={postCat.postCatId}
                                                            selected={postCat.postCatId === postCatId}
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
                                            <img className='img-thumbnail w-50' src={thumbnailBase64 + ''} alt="" />
                                        </div>
                                        <div>
                                            {
                                                successNoti && <NavLink to='/admin/post/list' className="btn btn-info btn-sm w-25 col-md-6 mx-4 mt-4">View list post </NavLink>
                                            }
                                            <button type="submit" className="btn btn-primary btn-sm w-25 col-md-6 mt-4">Cập nhật</button>
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

export default PostFormUpdateAdmin;