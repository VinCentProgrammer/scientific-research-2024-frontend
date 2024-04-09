import { NavLink } from "react-router-dom";
import PostModel from "../../../models/PostModel";

interface PostItemInterface {
    post: PostModel;
}

const PostItem: React.FC<PostItemInterface> = (props) => {
    // Chuỗi timestamps
    const timestamp_str: string = props.post.createdAt;

    // Tạo đối tượng Date từ chuỗi timestamps
    const dateObj: Date = new Date(timestamp_str);

    // Trích xuất ngày, tháng, năm từ đối tượng Date
    const day: number = dateObj.getDate();
    const month: number = dateObj.getMonth() + 1;
    const year: number = dateObj.getFullYear();

    // Lấy thứ của ngày từ đối tượng Date
    const thu: number = dateObj.getDay();

    // Chuyển đổi số thứ thành tên của ngày
    const thuArr: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const tenThu: string = thuArr[thu];

    return (
        <div className="col-lg-4 mb-5">
            <div className="card h-100 shadow border-0">
                <img className="card-img-top" src={props.post.thumbnail} alt="..."/>
                <div className="card-body p-4">
                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">News</div>
                    <NavLink className="text-decoration-none link-dark stretched-link" to="/post-detail"><h5 className="card-title mb-3">{props.post.title}</h5></NavLink>
                    <p className="card-text mb-0">{props.post.desc}</p>
                </div>
                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                    <div className="d-flex align-items-end justify-content-between">
                        <div className="d-flex align-items-center">
                            <img className="rounded-circle me-3" src="https://dummyimage.com/40x40/ced4da/6c757d" alt="..." />
                            <div className="small">
                                <div className="fw-bold">Admin</div>
                                <div className="text-muted">{tenThu + ' | ' + day + '/' + month + '/' + year }</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostItem;