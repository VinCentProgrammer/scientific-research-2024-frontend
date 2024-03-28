import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import SideBar from '../sidebar/SideBar';
import UserModel from '../../models/UserModel';
import { getUserById } from '../../api/UserAPI';
import Page404 from '../page/Page404';
import getBase64 from '../../utils/Base64';
import RequireAdmin from '../admin/RequireAdmin';
import PermissionModel from '../../models/PermissionModel';
import { getPermissionById } from '../../api/PermissionAPI';

function PermissionFormUpdate() {
    const { permissionIdParam } = useParams();
    
    let permissionId = 0;
    try {
        permissionId = parseInt(permissionIdParam + '');
    } catch (error) {
        permissionId = 0;
        console.log('Error', error);
    }
    if (Number.isNaN(permissionId))
        permissionId = 0;

    const [permission, setPermission] = useState<PermissionModel | null>(null);
    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [desc, setDesc] = useState('');
    const [createdAt, setCreatedAt] = useState('');
    

    // Các biến báo lỗi
    const [errorName, setErrorName] = useState("");
    const [errorSlug, setErrorSlug] = useState("");
    const [successNoti, setSuccessNoti] = useState("");
    const [errorNoti, setErrorNoti] = useState("");

    useEffect(() => {
        getPermissionById(permissionId)
            .then((res) => {
                setPermission(res);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, [permissionId]);

    useEffect(() => {
        if (permission !== null) {
            setName(permission.name === undefined ? '' : permission.name)
            setSlug(permission.slug === undefined ? '' : permission.slug);
            setDesc(permission.desc === undefined ? '' : permission.desc)
            setCreatedAt(permission.createdAt === undefined ? '' : permission.createdAt)
        }
    }, [permission]);

    // Handle submit form
    const handleSubmit = async (e: React.FormEvent) => {
        // Clear any previous error messages
        setName('');
        setSlug('');

        // Tránh click liên tục
        e.preventDefault();
        // Kiểm tra tất cả các điều kiện
        if (name && slug) {
            const token = localStorage.getItem('token');
            fetch(`http://localhost:8080/permission/${permission?.permissionId}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        permissionId: permissionId,
                        name: name,
                        slug: slug,
                        desc: desc,
                        createdAt: createdAt
                    })
                }
            ).then((response) => {
                if (response.ok) {
                    setSuccessNoti("Đã cập nhật permission thành công!");
                    setName('');
                    setSlug('');
                    setDesc('');
                } else {
                    setErrorNoti("Gặp lỗi trong quá trình cập nhật permission!");
                }
            })
        }
    }

    const handleOnChangeName = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setName(e.target.value);
            setErrorName('');
        } else {
            setName('');
            setErrorName('Trường này không được bỏ trống');
        }
    }

    const handleOnChangeSlug = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setSlug(e.target.value);
            setErrorSlug('');
        } else {
            setSlug('');
            setErrorSlug('Trường này không được bỏ trống');
        }
    }

    if (permissionId === 0) {
        return (
            <Page404 />
        )
    }


    return (
        <div id="layoutSidenav">
            <SideBar />
            <div id="layoutSidenav_content" className='text-start'>
                <main>
                    <div className="card">
                        <div className="card-header font-weight-bold">
                            Cập nhật quyền
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="card-body col-md-4">
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group mt-2">
                                            <label htmlFor="name">Tên quyền <span className="text-danger">(*) {errorName}</span></label>
                                            <input className="form-control" type="text" name="name" id="name"
                                                value={name}
                                                onChange={handleOnChangeName}
                                            />
                                        </div>
                                        <div className="form-group mt-2">
                                            <label htmlFor="slug">Slug</label>
                                            <small className="form-text text-muted pb-2 p-2">Ví dụ: user.add <span className="text-danger">(*) {errorSlug}</span></small>
                                            <input className="form-control" type="text" name="slug" id="slug"
                                                value={slug}
                                                onChange={handleOnChangeSlug}
                                            />
                                        </div>
                                        <div className="form-group mt-2">
                                            <label htmlFor="description">Mô tả</label>
                                            <input className="form-control" name="description" id="description" type="text"
                                                value={desc}
                                                onChange={(e) => setDesc(e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            {
                                                successNoti && <NavLink to='/admin/role/permission/list' className="btn btn-info btn-sm w-25 col-md-6 mx-4 mt-4">View list permission</NavLink>
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
                </main>
            </div>
        </div>
    )
}

export default PermissionFormUpdate;