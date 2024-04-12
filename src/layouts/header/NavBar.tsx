import { jwtDecode } from 'jwt-decode';
import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import capitalize from '../../utils/CapitalizeString';

function NavBar() {
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [usernameLogin, setUsernameLogin] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLogin(true);
            setUsernameLogin(jwtDecode(token).sub + '');
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLogin(false);
        navigate('/')
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container px-5">
                <div className=''>
                    <NavLink className="navbar-brand font-weight-bold" to="/">UTC2 - Discrete Math</NavLink>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse text-start" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/theory">Theory</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/post">Posts</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/forum">Discussion Forum</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/page/about">About Us</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/page/contact">Get in Touch</NavLink></li>
                        {
                            isLogin ?
                                <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">

                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle mx-2  text-white fs-6" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <i className="fas fa-user fa-fw"></i>
                                            <span className="mx-2">
                                                Hi {usernameLogin && capitalize(usernameLogin)}
                                            </span>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                            <li>
                                                <a className="dropdown-item" href="#!">
                                                    <i className="bi bi-person mx-2"></i>
                                                    Account
                                                </a>
                                            </li>
                                            <div className="dropdown-divider"></div>
                                            <li>
                                                <button className="dropdown-item" onClick={handleLogout}>
                                                    <i className="bi bi-arrow-up-circle mx-2"></i>
                                                    Logout
                                                </button>
                                            </li>
                                        </ul>
                                    </li>
                                </ul> : <li className='btn btn-outline-success mx-4'>
                                    <NavLink className="dropdown-item" to="/login">Sign in</NavLink>
                                </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;