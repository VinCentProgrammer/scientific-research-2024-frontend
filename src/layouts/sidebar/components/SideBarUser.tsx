import { NavLink } from "react-router-dom";


function SideBarUser() {
    return (
        <div>
            <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#user"
                aria-expanded="false" aria-controls="user">
                <div className="sb-nav-link-icon"><i className="bi bi-people"></i></div>
                User
                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
            </a>
            <div className="collapse" id="user" aria-labelledby="headingTwo"
                data-bs-parent="#sidenavAccordion">
                <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                    <NavLink to="/admin/user/add" className='nav-link'>Thêm mới</NavLink>
                    <NavLink to="/admin/user/list" className='nav-link'>Danh sách user</NavLink>
                </nav>
            </div>
        </div>
    )
}

export default SideBarUser;