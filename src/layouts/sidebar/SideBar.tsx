import SideBarPage from "./components/SideBarPage";
import SideBarPost from "./components/SideBarPost";
import SideBarUser from "./components/SideBarUser";
import SideBarRolePermission from "./components/SideBarRolePermission";
import SideBarThread from "./components/SideBarThread";
import SideBarTheory from "./components/SideBarTheory";
import { NavLink } from "react-router-dom";

function SideBar() {
    return (
        <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-light" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav p-2">
                        <div className="sb-sidenav-menu-heading text-start text-dark fs-6">Core</div>
                        <NavLink to="/admin/dashboard" className='nav-link'>
                            <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                            Dashboard
                        </NavLink>
                        {/* Page */}
                        <SideBarPage />
                        {/* Post */}
                        <SideBarPost />
                        {/* Thread */}
                        <SideBarThread />
                        {/* Theory */}
                        <SideBarTheory />
                        <div className="sb-sidenav-menu-heading text-start text-dark fs-6">Account - User</div>
                        {/* User */}
                        <SideBarUser />
                        {/* RolePermission */}
                        <SideBarRolePermission />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default SideBar;