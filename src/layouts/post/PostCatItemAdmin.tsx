import PostCatModel from "../../models/PostCatModel";
import SideBar from "../sidebar/SideBar";

interface PostCatRowProps {
    postCat: PostCatModel;
    onDelete: (id: number) => void;
    onUpdate: (id: number) => void;
}


const PostCatItemAdmin: React.FC<PostCatRowProps> = (props) => {
    const handleOnDelete = () => {
        const confirm = window.confirm("Bạn có chắc chắn xóa bản ghi này không?");
        if (confirm) {
            props.onDelete(props.postCat.postCatId);
        }
    }

    const handleOnUpdate = () => {
        props.onUpdate(props.postCat.postCatId);
    }

    return (
        <tr>
            <th scope="row">{props.postCat.postCatId}</th>
            <td>{props.postCat.postCatName}</td>
            <td>{props.postCat.desc}</td>
            <td>{props.postCat.postCatParentId}</td>
            <td>{props.postCat.createdAt}</td>
            <td>{props.postCat.updatedAt === null ? props.postCat.createdAt : props.postCat.updatedAt}</td>
            <td><div>
                <div>
                    <button className="btn btn-success btn-sm rounded-0 text-white mx-2" type="button" data-toggle="tooltip" data-placement="top" title="Edit" onClick={handleOnUpdate}><i className="fa fa-edit"></i></button>
                    <button className="btn btn-danger btn-sm rounded-0 text-white mx-2" type="button" data-toggle="tooltip" data-placement="top" title="Delete" onClick={handleOnDelete}><i className="fa fa-trash"></i></button>
                </div>
            </div></td>
        </tr>
    )
}

export default PostCatItemAdmin;