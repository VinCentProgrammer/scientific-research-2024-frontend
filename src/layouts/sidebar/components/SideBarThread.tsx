import { NavLink } from "react-router-dom";

function SideBarThread() {
    return (
        <div>
            <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#thread"
                aria-expanded="false" aria-controls="thread">
                <div className="sb-nav-link-icon"><i className="bi bi-chat-left-dots"></i></div>
                Diễn đàn - Trao đổi
                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
            </a>
            <div className="collapse" id="thread" aria-labelledby="headingTwo"
                data-bs-parent="#sidenavAccordion">
                <nav className="sb-sidenav-menu-nested nav accordion">
                    <NavLink to="/admin/thread/list" className='nav-link'>Hiển thị danh sách</NavLink>
                    <NavLink to="/admin/thread/comment/list" className='nav-link'>Danh sách bình luận</NavLink>
                </nav>
            </div>
        </div>
    )
}

export default SideBarThread;