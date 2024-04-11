import { NavLink } from "react-router-dom";

function SideBarPost() {
    return (
        <div>
            <a className="nav-link collapsed" href="/admin/post/list" data-bs-toggle="collapse" data-bs-target="#post"
                aria-expanded="false" aria-controls="post">
                <div className="sb-nav-link-icon"><i className="bi bi-file-earmark-post"></i></div>
                Posts
                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
            </a>
            <div className="collapse" id="post" aria-labelledby="headingTwo"
                data-bs-parent="#sidenavAccordion">
                <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                    <NavLink to="/admin/post/cat/add" className='nav-link'>Add New Category</NavLink>
                    <NavLink to="/admin/post/cat/list" className='nav-link'>Post Category List</NavLink>
                    <NavLink to="/admin/post/add" className='nav-link'>Add New</NavLink>
                    <NavLink to="/admin/post/list" className='nav-link'>Post List</NavLink>
                </nav>
            </div>
        </div>
    )
}

export default SideBarPost;