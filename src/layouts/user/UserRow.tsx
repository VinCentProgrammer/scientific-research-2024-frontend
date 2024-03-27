import UserModel from "../../models/UserModel";

interface UserPropsInterface {
    user: UserModel;
}

const UserRow: React.FC<UserPropsInterface> = (props) => {
    return (
        <tr>
            <th scope="row">{props.user.userId}</th>
            <td>{props.user.username}</td>
            <td>{props.user.email}</td>
            <td>{props.user.firstname === '' ? "null" : props.user.firstname}</td>
            <td>{props.user.lastname === '' ? "null" : props.user.lastname}</td>
            <td>{props.user.active ? '1' : '0'}</td>
            <td>{props.user.createdAt}</td>
            <td>
                <a href="#" className="btn btn-success btn-sm rounded-0 text-white" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i className="fa fa-edit"></i></a>
                <a href="#" className="btn btn-danger btn-sm rounded-0 text-white" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i className="fa fa-trash"></i></a>
            </td>
        </tr>

    )
}

export default UserRow;