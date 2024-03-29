import { NavLink } from "react-router-dom";

function SideBarPage() {
    return (
        <div>
            <NavLink className="nav-link collapsed" to="/admin/page/list" data-bs-toggle="collapse" data-bs-target="#page"
                aria-expanded="false" aria-controls="page">
                <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                Trang
                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
            </NavLink>
            <div className="collapse" id="page" aria-labelledby="headingTwo"
                data-bs-parent="#sidenavAccordion">
                <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                    <NavLink className="nav-link" to="admin/page/add">
                        Thêm trang mới
                    </NavLink>
                    <NavLink className="nav-link" to="admin/page/list">
                        Danh sách trang
                    </NavLink>
                    <NavLink className="nav-link" to="/page/401">
                        401 Page
                    </NavLink>
                    <NavLink className="nav-link" to="/page/403">
                        403 Page
                    </NavLink>
                    <NavLink className="nav-link" to="/page/404">
                        404 Page
                    </NavLink>
                    <NavLink className="nav-link" to="/page/500">
                        500 Page
                    </NavLink>
                </nav>
            </div>
        </div>
    )
}

export default SideBarPage;