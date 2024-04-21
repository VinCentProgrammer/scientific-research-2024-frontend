import { useEffect, useState } from "react";
import PostCatModel from "../../../models/PostCatModel";
import SideBar from "../../sidebar/SideBar";
import { getPostCats } from "../../../api/PostCatAPI";
import { NavLink } from "react-router-dom";
import AdminOrStaffRequire from "../../require/AdminOrStaffRequire";

function AdminPostCatForm() {
    const [postCats, setPostCats] = useState<PostCatModel[]>([]);
    const [postCatName, setPostCatName] = useState<string>('');
    const [desc, setDesc] = useState<string>('');
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

    const handleOnChangePostCatName = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setPostCatName(e.target.value);
            setErrorPostCatName('');
        } else {
            setPostCatName('');
            setErrorPostCatName('This field cannot be left blank');
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
            fetch("http://localhost:8080/post-cat",
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        postCatId: 0,
                        postCatName: postCatName,
                        desc: desc,
                        postCatParentId: postCatParentId
                    })
                }
            ).then((response) => {
                if (response.ok) {
                    setSuccessNoti("Added successfully!");
                    setPostCatName('');
                    setDesc('');
                    setPostCatParent(1);

                } else {
                    setErrorNoti("Error while adding!");
                }
            })
        }
    }

    return (
        <div id="layoutSidenav " className="container-fluid" style={{ minHeight: '700px', textAlign: 'left' }}>
            <div className="row">
                <div className="col-md-2">
                    <SideBar />
                </div>
                <div id="layoutSidenav_content" className="col-md-10">
                    <main>
                        <div id="content" className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-header" style={{fontWeight: 'bold'}}>
                                            Add New Post Category
                                        </div>
                                        <div className="card-body">
                                            <form onSubmit={handleSubmit}>
                                                <div className="form-group mt-2">
                                                    <label htmlFor="name">Post Category Name
                                                        <span className="text-danger">(*) {errorPostCatName}</span>
                                                    </label>
                                                    <input className="form-control" type="text" name="name" id="name"
                                                        value={postCatName}
                                                        onChange={handleOnChangePostCatName}
                                                    />
                                                </div>

                                                <div className="form-group mt-2">
                                                    <label htmlFor="desc">Description
                                                        <span className="text-danger">(*) {errorDesc}</span>
                                                    </label>
                                                    <input className="form-control" type="text" name="name" id="desc"
                                                        value={desc}
                                                        onChange={handleOnChangeDesc}
                                                    />
                                                </div>

                                                <div className="form-group mt-2">
                                                    <label htmlFor="">Belong to Category Post</label>
                                                    <select className="form-control" id=""
                                                        value={postCatParentId}
                                                        onChange={handlePostCatParent}
                                                    >
                                                        <option value={1}>Parent Category</option>
                                                        {
                                                            postCats.map((postCat) => (
                                                                <option
                                                                    key={postCat.postCatId}
                                                                    value={postCat.postCatId}
                                                                >{postCat.postCatName}</option>
                                                            ))
                                                        }
                                                    </select>
                                                </div>

                                                <div>
                                                    {
                                                        successNoti && <NavLink to='/admin/post/cat/list' className="btn btn-info btn-sm w-25 col-md-6 mx-4 mt-4">View list post cat</NavLink>
                                                    }
                                                    <button type="submit" className="btn btn-primary btn-sm w-25 col-md-6 mt-4">Add</button>
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
        </div>
    )
}

export default AdminOrStaffRequire(AdminPostCatForm);