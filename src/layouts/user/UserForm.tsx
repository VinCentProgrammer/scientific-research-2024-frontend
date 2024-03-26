import { useEffect, useState } from 'react';
import getBase64 from '../../utils/Base64';
import { NavLink } from 'react-router-dom';
import RequireAdmin from '../admin/RequireAdmin';
import SideBar from '../sidebar/SideBar';

function UserForm() {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        firstname: '',
        lastname: '',
        phoneNumber: '',
        gender: true,
        active: 0,
        activeCode: "",
        avatar: null,
        address: '',
        createdAt: ''
    })

    const [rePassword, setRePassword] = useState('');

    // Các biến báo lỗi
    const [errorUsername, setErrorUsername] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorRePassword, setErrorRePassword] = useState("");
    const [notification, setNotification] = useState("");


    // Handle submit form
    const handleSubmit = async (e: React.FormEvent) => {
        // Clear any previous error messages
        setErrorUsername('');
        setErrorEmail('');
        setErrorPassword('');
        setErrorRePassword('');

        // Tránh click liên tục
        e.preventDefault();

        // Kiểm tra các điều kiện và gán kết quả vào biến
        const isUsernameValid = !await checkExistedUsername(user.username);
        const isEmailValid = !await checkExistedEmail(user.email);
        const isPasswordValid = !checkPassword(user.password);

        // Kiểm tra tất cả các điều kiện
        if (isUsernameValid && isEmailValid && isPasswordValid) {
            const base64Avatar = user.avatar ? await getBase64(user.avatar) : null;

            const token = localStorage.getItem('token');

            fetch("http://localhost:8080/user/add", {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(user)
            }
            ).then((response) => {
                if (response.ok) {
                    alert("Đã thêm user thành công!");
                    setUser({
                        username: '',
                        email: '',
                        password: '',
                        firstname: '',
                        lastname: '',
                        phoneNumber: '',
                        gender: true,
                        active: 0,
                        activeCode: "",
                        avatar: null,
                        address: '',
                        createdAt: ''
                    })
                } else {
                    alert("Gặp lỗi trong quá trình thêm user!");
                }
            })
        }

    }

    //////////////======CHECK USERNAME========///////////////////
    const checkExistedUsername = async (username: string) => {
        // Endpoint
        const url = `http://localhost:8080/user/search/existsByUsername?username=${username}`;
        // Call API
        try {
            const response = await fetch(url);
            const data = await response.text();
            if (data === 'true') {
                setErrorUsername('Tên đăng nhập đã tồn tại!');
                return true;
            }
        } catch (error) {
            console.error("Lỗi khi kiểm tra tên đăng nhập: " + error);
            return false;
        }
    }

    const handleUsernameOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, username: e.target.value });
        setErrorUsername('');
        return checkExistedUsername(e.target.value);
    }

    //////////////======CHECK EMAIL ========///////////////////
    const checkExistedEmail = async (email: string) => {
        // Endpoint
        const url = `http://localhost:8080/user/search/existsByEmail?email=${email}`;
        // Call API
        try {
            const response = await fetch(url);
            const data = await response.text();
            if (data === 'true') {
                setErrorEmail('Địa chỉ email đã tồn tại!');
                return true;
            }
        } catch (error) {
            console.error("Lỗi khi kiểm tra email: " + error);
            return false;
        }
    }

    const handleEmailOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, email: e.target.value });
        setErrorEmail('');
        return checkExistedEmail(e.target.value);
    }

    //////////////======CHECK PASSWORD ========///////////////////
    const checkPassword = (password: string) => {
        const passwordRegex = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        if (!passwordRegex.test(password)) {
            setErrorPassword("Mật khẩu phải có ít nhất 8 ký tự và bao gồm ít nhất 1 ký tự đặc biệt (!@#$%^&*)");
            return true;
        } else {
            setErrorPassword("");
            return false;
        }
    }

    const handlePassOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, password: e.target.value });
        setErrorPassword('');
        return checkPassword(e.target.value);
    }

    //////////////======CHECK RE PASSWORD ========///////////////////
    const checkRePassword = (rePassword: string) => {
        if (rePassword !== user.password) {
            setErrorRePassword("Mật khẩu không trùng khớp.");
            return true;
        } else {
            setErrorRePassword(""); // Mật khẩu trùng khớp
            return false;
        }
    }

    const handleRePassOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRePassword(e.target.value);
        setErrorRePassword('');
        return checkRePassword(e.target.value);
    }

    //////////////====== HANDLE AVATAR ========///////////////////
    const handleAvatarOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0];
            setUser({ ...user, avatar: null });
        }
    };


    return (
        <div id="layoutSidenav">
            <SideBar />
            <div id="layoutSidenav_content">
                <main>
                    <div id="content" className="container">
                        <div className="card">
                            <div className="card-header font-weight-bold">
                                Thêm người dùng
                            </div>
                            <div className="card-body w-75 mx-auto">
                                <form onSubmit={handleSubmit}>
                                    {/* Username */}
                                    <div className="d-flex flex-row align-items-center mb-4  text-start">
                                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">
                                            <label className="form-label" htmlFor="username">Username <span className="text-danger">(*)</span>
                                                <span style={{ color: "red", marginLeft: '10px' }}>{errorUsername}</span>
                                            </label>
                                            <input type="text" id="username"
                                                value={user.username}
                                                onChange={handleUsernameOnChange}
                                                className="form-control" />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="d-flex flex-row align-items-center mb-4  text-start">
                                        <i className="fa-solid fa-envelope fa-lg me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">
                                            <label className="form-label" htmlFor="email">Email <span className="text-danger">(*)</span>
                                                <span style={{ color: "red", marginLeft: '10px' }}>{errorEmail}</span>
                                            </label>
                                            <input type="email" id="email"
                                                value={user.email}
                                                onChange={handleEmailOnChange}
                                                className="form-control" />
                                        </div>
                                    </div>

                                    {/* Firstname */}
                                    <div className="d-flex flex-row align-items-center mb-4  text-start">
                                        <i className="fa-solid fa-signature me-3"></i>
                                        <div className="form-outline flex-fill mb-0">
                                            <label className="form-label" htmlFor="firstname">Firstname</label>
                                            <input type="text" id="firstname" className="form-control"
                                                value={user.firstname}
                                                onChange={(e) => setUser({ ...user, firstname: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    {/* Lastname */}
                                    <div className="d-flex flex-row align-items-center mb-4  text-start">
                                        <i className="fa-solid fa-signature me-3"></i>
                                        <div className="form-outline flex-fill mb-0">
                                            <label className="form-label" htmlFor="lastname">Lastname </label>
                                            <input type="text" id="lastname" className="form-control"
                                                value={user.lastname}
                                                onChange={(e) => setUser({ ...user, lastname: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    {/* Phone number */}
                                    <div className="d-flex flex-row align-items-center mb-4  text-start">
                                        <i className="fa-solid fa-phone-volume me-3"></i>
                                        <div className="form-outline flex-fill mb-0">
                                            <label className="form-label" htmlFor="phoneNumber">Phone Number </label>
                                            <input type="text" id="phoneNumber" className="form-control"
                                                value={user.phoneNumber}
                                                onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    {/* Address */}
                                    <div className="d-flex flex-row align-items-center mb-4  text-start">
                                        <i className="fa-solid fa-phone-volume me-3"></i>
                                        <div className="form-outline flex-fill mb-0">
                                            <label className="form-label" htmlFor="address">Address</label>
                                            <input type="text" id="address" className="form-control"
                                                value={user.address}
                                                onChange={(e) => setUser({ ...user, address: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    {/* Gender */}
                                    <div className="d-flex flex-row align-items-center mb-4  text-start">
                                        <i className="fa-solid fa-venus-mars me-3"></i>
                                        <div className="form-outline flex-fill mb-0">
                                            <label className="form-label" htmlFor="gender">Gender</label>
                                            <div className="container row">
                                                <div className="form-check col-md-3">
                                                    <input className="form-check-input" type="radio" name="exampleRadios" id="male" value={1}
                                                        onChange={(e) => setUser({ ...user, gender: true })}
                                                        checked />
                                                    <label className="form-check-label" htmlFor="male">
                                                        Male
                                                    </label>
                                                </div>
                                                <div className="form-check col-md-3">
                                                    <input className="form-check-input" type="radio" name="exampleRadios" id="female" value={0}
                                                        onChange={(e) => setUser({ ...user, gender: false })} />
                                                    <label className="form-check-label" htmlFor="female">
                                                        Female
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Password */}
                                    <div className="d-flex flex-row align-items-center mb-4  text-start">
                                        <i className="fa-solid fa-key fa-lg me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">
                                            <label className="form-label" htmlFor="password">Password <span className="text-danger">(*)</span><span style={{ color: "red", marginLeft: '10px' }}>{errorPassword}</span></label>
                                            <input type="password" id="password"
                                                value={user.password}
                                                onChange={handlePassOnChange}
                                                className="form-control" />
                                        </div>
                                    </div>

                                    {/* Repeat Password */}
                                    <div className="d-flex flex-row align-items-center mb-4  text-start">
                                        <i className="fa-solid fa-key fa-lg me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">
                                            <label className="form-label" htmlFor="passwordRepeat">Repeat password <span className="text-danger">(*)</span><span style={{ color: "red", marginLeft: '10px' }}>{errorRePassword}</span></label>
                                            <input type="password" id="passwordRepeat"
                                                value={rePassword}
                                                onChange={handleRePassOnChange}
                                                className="form-control" />
                                        </div>
                                    </div>

                                    {/* Avatar */}
                                    <div className="d-flex flex-row align-items-center mb-4  text-start">
                                        <i className="fa-regular fa-image me-3"></i>
                                        <div className="form-outline flex-fill mb-0">
                                            <label className="form-label" htmlFor="avatar">Avatar</label>
                                            <input type="file" id="avatar" className="form-control"
                                                accept='images/*'
                                                onChange={handleAvatarOnChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                        <div className="container">
                                            <div className="row">
                                                {
                                                    notification && <NavLink to='/admin/user/list' className="btn btn-info btn-lg w-25 col-md-6">View list user</NavLink>
                                                }
                                                <button type="submit" className="btn btn-primary btn-lg w-25 col-md-6">Add new user</button>
                                            </div>
                                        </div>

                                    </div>
                                    <div style={{ color: "green" }}>{notification}</div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}


export default RequireAdmin(UserForm);