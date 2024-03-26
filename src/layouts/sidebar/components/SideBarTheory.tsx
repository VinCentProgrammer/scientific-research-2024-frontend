import { NavLink } from "react-router-dom";

function SideBarTheory() {
    return (
        <div>
            <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#theory"
                aria-expanded="false" aria-controls="theory">
                <div className="sb-nav-link-icon"><i className="bi bi-folder-fill"></i></div>
                Lý thuyết
                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
            </a>
            <div className="collapse" id="theory" aria-labelledby="headingTwo"
                data-bs-parent="#sidenavAccordion">
                <nav className="sb-sidenav-menu-nested nav accordion">
                    <NavLink to="/admin/theory/chapter/list" className='nav-link'>Hiển thị chuyên đề</NavLink>
                    <NavLink to="/admin/theory/chapters/add" className='nav-link'>Thêm chuyên đề</NavLink>
                    <NavLink to="/admin/theory/lesson/list" className='nav-link'>Hiển thị các bài học</NavLink>
                    <NavLink to="/admin/theory/lesson/add" className='nav-link'>Thêm bài học mới</NavLink>
                </nav>
            </div>
        </div>
    )
}

export default SideBarTheory;