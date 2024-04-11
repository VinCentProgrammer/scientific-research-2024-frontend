
import { NavLink } from "react-router-dom";

function SidebarMenu() {
    return (
        <div className="sidebar fl-left">
            <div className="section" id="category-product-wp">
                <div className="section-head">
                    <h3 className="section-title">Theory</h3>
                </div>
                <div className="secion-detail">
                    <ul className="list-item">
                        <li>
                            <a href="?page=category_product" title="">Điện thoại</a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="?page=category_product" title="">Iphone</a>
                                </li>
                                <li>
                                    <a href="?page=category_product" title="">Samsung</a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="?page=category_product" title="">Iphone X</a>
                                        </li>
                                        <li>
                                            <a href="?page=category_product" title="">Iphone 8</a>
                                        </li>
                                        <li>
                                            <a href="?page=category_product" title="">Iphone 8 Plus</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="?page=category_product" title="">Oppo</a>
                                </li>
                                <li>
                                    <a href="?page=category_product" title="">Bphone</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="?page=category_product" title="">Máy tính bảng</a>
                        </li>
                        <li>
                            <a href="?page=category_product" title="">laptop</a>
                        </li>
                        <li>
                            <a href="?page=category_product" title="">Tai nghe</a>
                        </li>
                        <li>
                            <a href="?page=category_product" title="">Thời trang</a>
                        </li>
                        <li>
                            <a href="?page=category_product" title="">Đồ gia dụng</a>
                        </li>
                        <li>
                            <a href="?page=category_product" title="">Thiết bị văn phòng</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SidebarMenu;