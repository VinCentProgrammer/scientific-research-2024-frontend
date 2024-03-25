import { NavLink } from 'react-router-dom';

function MainMenu() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid px-5">
                <div className=''>
                    <NavLink className="navbar-brand font-weight-bold" to="/">UTC2 - TOÁN RỜI RẠC</NavLink>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><NavLink className="nav-link" to="/">Trang chủ</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/theory">Lý thuyết</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/problem">Giải bài tập</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/post">Bài viết</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/forum">Diễn đàn - Trao đổi</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/page/about">Về chúng tôi</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/page/contact">Liên hệ</NavLink></li>

                        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle mx-2" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a className="dropdown-item" href="#!">
                                            <i className="bi bi-person mx-2"></i>
                                            Tài khoản</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#!">
                                            <i className="bi bi-arrow-up-circle mx-2"></i>Đăng xuất</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        {/* <li className='btn btn-outline-info mx-4'>
                            <NavLink className="dropdown-item" to="/login">Đăng nhập</NavLink>
                        </li> */}

                        {/* <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle btn bg-primary text-white mx-5" id="navbarDropdownBlog" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Tài khoản</NavLink>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                                <li><NavLink className="dropdown-item" to="/login">Đăng nhập</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/register">Đăng ký</NavLink></li>
                            </ul>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default MainMenu;