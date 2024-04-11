import { useEffect, useState } from "react";
import PostCatModel from "../../models/PostCatModel";
import SideBar from "../sidebar/SideBar";
import { getPostCatById, getPostCats } from "../../api/PostCatAPI";
import { NavLink, useParams } from "react-router-dom";

function PostCatFormUpdateAdmin() {
    const { postCatIdParam } = useParams();

    let postCatId = 0;
    try {
        postCatId = parseInt(postCatIdParam + '');
    } catch (error) {
        postCatId = 0;
        console.log('Error', error);
    }
    if (Number.isNaN(postCatId))
        postCatId = 0;

    const [postCats, setPostCats] = useState<PostCatModel[]>([]);
    const [postCat, setPostCat] = useState<PostCatModel | null>(null);
    const [postCatName, setPostCatName] = useState<string>('');
    const [desc, setDesc] = useState<string>('');
    const [createdAt, setCreatedAt] = useState<string>('');
    const [postCatParentId, setPostCatParent] = useState<number>(1);

    const [errorPostCatName, setErrorPostCatName] = useState<string>('');
    const [errorDesc, setErrorDesc] = useState<string>('');
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
        getPostCatById(postCatId)
            .then((res) => {
                setPostCat(res);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, [postCatId]);

    useEffect(() => {
        if (postCat !== null) {
            setPostCatName(postCat.postCatName === undefined ? '' : postCat.postCatName)
            setDesc(postCat.desc === undefined ? '' : postCat.desc)
            setPostCatParent(postCat.postCatParentId);
            setCreatedAt(postCat.createdAt)
        }
    }, [postCat]);

    const handleOnChangePostCatName = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setPostCatName(e.target.value);
            setErrorPostCatName('');
        } else {
            setPostCatName('');
            setErrorPostCatName('Trường này không được bỏ trống');
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

    const handlePostCatParent = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setPostCatParent(parseInt(event.target.value));
    }


    const handleSubmit = (e: React.FormEvent) => {
        // Clear 
        setErrorPostCatName('');
        setErrorDesc('');

        // Prevent default
        e.preventDefault();

        // 
        if (postCatName && desc && postCatParentId) {
            const token = localStorage.getItem('token');
            fetch(`http://localhost:8080/post-cat/${postCatId}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        postCatId: 0,
                        postCatName: postCatName,
                        desc: desc,
                        postCatParentId: postCatParentId,
                        createdAt: createdAt
                    })
                }
            ).then((response) => {
                if (response.ok) {
                    setSuccessNoti("Đã update thành công!");
                    setErrorPostCatName('');
                    setDesc('');
                    setPostCatParent(1);

                } else {
                    setErrorNoti("Gặp lỗi trong quá trình update!");
                }
            })
        }
    }

    return (
        <div id="layoutSidenav">
            <SideBar />
            <div id="layoutSidenav_content" className="text-start">
                <main>
                    <div id="content" className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header font-weight-bold">
                                        Cập nhật danh mục
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-group mt-2">
                                                <label htmlFor="name">Tên danh mục
                                                    <span className="text-danger">(*) {errorPostCatName}</span>
                                                </label>
                                                <input className="form-control" type="text" name="name" id="name"
                                                    value={postCatName}
                                                    onChange={handleOnChangePostCatName}
                                                />
                                            </div>

                                            <div className="form-group mt-2">
                                                <label htmlFor="desc">Mô tả
                                                    <span className="text-danger">(*) {errorDesc}</span>
                                                </label>
                                                <input className="form-control" type="text" name="name" id="desc"
                                                    value={desc}
                                                    onChange={handleOnChangeDesc}
                                                />
                                            </div>

                                            <div className="form-group mt-2">
                                                <label htmlFor="">Thuộc danh mục</label>
                                                <select className="form-control" id=""
                                                    value={postCatParentId}
                                                    onChange={handlePostCatParent}
                                                >
                                                    <option value={1}>Danh mục cha</option>
                                                    {
                                                        postCats.map((postCat) => (
                                                            postCat.postCatId !== postCatId && <option
                                                                key={postCat.postCatId}
                                                                value={postCat.postCatId} selected={postCat.postCatId === postCatId}
                                                            >{postCat.postCatName}</option>
                                                        ))
                                                    }
                                                </select>
                                            </div>

                                            <div>
                                                {
                                                    successNoti && <NavLink to='/admin/post/cat/list' className="btn btn-info btn-sm w-25 col-md-6 mx-4 mt-4">View list post cat</NavLink>
                                                }
                                                <button type="submit" className="btn btn-primary btn-sm w-25 col-md-6 mt-4">Cập nhật</button>
                                            </div>
                                            {successNoti && <div className="text-success">{successNoti}</div>}
                                            {errorNoti && <div className="text-danger">{errorNoti}</div>}
                                        </form>
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

export default PostCatFormUpdateAdmin;