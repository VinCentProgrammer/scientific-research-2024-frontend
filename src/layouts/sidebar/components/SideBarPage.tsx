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
                    <NavLink className="nav-link collapsed" to="#" data-bs-toggle="collapse"
                        data-bs-target="#pagesCollapseAuth" aria-expanded="false"
                        aria-controls="pagesCollapseAuth">
                        Authentication
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                    </NavLink>
                    <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne"
                        data-bs-parent="#sidenavAccordionPages">
                        <nav className="sb-sidenav-menu-nested nav">
                            <NavLink className="nav-link" to="/admin/page/login">Login</NavLink>
                            <NavLink className="nav-link" to="/admin/page/register">Register</NavLink>
                            <NavLink className="nav-link" to="/admin/page/resetPass">Forgot Password</NavLink>
                        </nav>
                    </div>
                    <NavLink className="nav-link collapsed" to="#" data-bs-toggle="collapse"
                        data-bs-target="#pagesCollapseError" aria-expanded="false"
                        aria-controls="pagesCollapseError">
                        Error
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                    </NavLink>
                    <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne"
                        data-bs-parent="#sidenavAccordionPages">
                        <nav className="sb-sidenav-menu-nested nav">
                            <NavLink className="nav-link" to="/admin/page/401">401 Page</NavLink>
                            <NavLink className="nav-link" to="/admin/page/404">404 Page</NavLink>
                            <NavLink className="nav-link" to="/admin/page/500">500 Page</NavLink>
                        </nav>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default SideBarPage;