import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
    isAdmin: boolean;
    isStaff: boolean;
    isUser: boolean;
}

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [notification, setNotification] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [isStaff, setIsStaff] = useState(false);
    const navigate = useNavigate();

    const handleLogin = () => {
        const loginRequest = {
            username: username,
            password: password
        }

        fetch('http://localhost:8080/account/login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginRequest)
            }).then(
                (response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        setError('System login error!');
                    }
                }
            ).then(
                (data) => {
                    const { jwt } = data;
                    localStorage.setItem('token', jwt);
                    const decodedToken = jwtDecode(jwt) as JwtPayload;
                    if (decodedToken.isAdmin) {
                        setIsAdmin(true);
                    }
                    if (decodedToken.isStaff) {
                        setIsStaff(true);
                    }

                    setNotification('LOGIN SUCCESSFULL!');
                    setShowModal(true);

                    handleClose();
                }
            ).catch((error) => {
                console.error('Đăng nhập thất bại: ', error);
                setError('Login failed. Please check your username and password again.')
            }
            );
    }


    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Ngăn chặn hành động mặc định của phím Enter trên form
            handleLogin();
        }
    };

    const handleClose = () => {
        setTimeout(() => {
            setShowModal(false);
            if (isAdmin || isStaff)
                navigate('/admin')
            else
                navigate('/')
        }, 2000);
    }

    return (
        <section className='m-4'>
            <div className="container-fluid h-custom" style={{ minHeight: '700px', marginTop: '80px' }}>
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="img-fluid" alt="Sample image" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                            <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                            <button type="button" className="btn btn-primary btn-floating mx-1">
                                <i className="fab fa-facebook-f"></i>
                            </button>
                            <button type="button" className="btn btn-primary btn-floating mx-1">
                                <i className="fab fa-twitter"></i>
                            </button>
                            <button type="button" className="btn btn-primary btn-floating mx-1">
                                <i className="fab fa-linkedin-in"></i>
                            </button>
                        </div>
                        <div className="divider d-flex align-items-center my-4">
                            <p className="text-center fw-bold mx-3 mb-0">Or</p>
                        </div>
                        <form action="">
                            <div className="form-outline mb-4 text-start">
                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                <label className="form-label" htmlFor="username">Username <span className="text-danger">(*)</span></label>
                                <input type="email" id="username" className="form-control form-control-lg"
                                    placeholder="Enter a valid username"
                                    value={username} onChange={(e) => setUsername(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                />
                            </div>
                            <div className="form-outline mb-3 text-start">
                                <i className="fa-solid fa-key fa-lg me-3 fa-fw"></i>
                                <label className="form-label" htmlFor="password">Password <span className="text-danger">(*)</span></label>
                                <input type="password" id="password" className="form-control form-control-lg"
                                    placeholder="Enter password" required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                />
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label className="form-check-label" htmlFor="form2Example3">
                                        Remember me
                                    </label>
                                </div>
                                <NavLink to="/password-recovery" className="text-body">Forgot password?</NavLink>
                            </div>

                            <div className='mt-2'>
                                {
                                    error && <div className='text-danger'>{error}</div>
                                }
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="button" className="btn btn-primary btn-lg"
                                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                                    onClick={handleLogin}

                                >Login</button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <NavLink to="/register"
                                    className="link-danger">Register</NavLink></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <section>
                <Modal show={showModal} onHide={handleClose}>
                    <Modal.Body>
                        <div>
                            <p className="text-center fs-2 font-weight-bold text-success">{notification} <i className="bi bi-check-circle text-success mx-2"></i> </p>
                        </div>
                    </Modal.Body>
                </Modal>
            </section>
        </section>
    )
}

export default LoginForm;