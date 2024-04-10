
import { NavLink } from "react-router-dom";

function SidebarMenu() {
    return (
        <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-light" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav p-2">
                        <NavLink className="nav-link" to="/page/401">401 Page </NavLink>
                        <NavLink className="nav-link" to="/page/403">403 Page</NavLink>
                        <NavLink className="nav-link" to="/page/404">404 Page</NavLink>
                        <NavLink className="nav-link" to="/page/500">500 Page</NavLink>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default SidebarMenu;