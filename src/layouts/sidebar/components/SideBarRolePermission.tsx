import { NavLink } from "react-router-dom";

function SideBarRolePermission() {
    return (
        <div>
            <div>
                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#rolePermission"
                    aria-expanded="false" aria-controls="rolePermission">
                    <div className="sb-nav-link-icon"><i className="bi bi-person-check"></i></div>
                    Quyền - Vai trò
                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                </a>
                <div className="collapse" id="rolePermission" aria-labelledby="headingTwo"
                    data-bs-parent="#sidenavAccordion">
                    <nav className="sb-sidenav-menu-nested nav accordion">
                        <NavLink to="/admin/role/permission/add" className='nav-link'>Thêm quyền</NavLink>
                        <NavLink to="/admin/role/permission/list" className='nav-link'>Danh sách quyền</NavLink>
                        <NavLink to="/admin/role/add" className='nav-link'>Thêm vai trò</NavLink>
                        <NavLink to="/admin/role/list" className='nav-link'>Danh sách vai trò</NavLink>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default SideBarRolePermission;