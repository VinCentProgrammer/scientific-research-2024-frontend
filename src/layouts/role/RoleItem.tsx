import { useEffect, useState } from "react";
import RoleModel from "../../models/RoleModel";
import { NavLink } from "react-router-dom";
import RequireAdmin from "../admin/RequireAdmin";

interface RoleItemInterface {
    role: RoleModel;
    onDelete: (id: number) => void;
    onUpdate: (id: number) => void;
}

const RoleItem: React.FC<RoleItemInterface> = (props) => {

    const handleOnDelete = () => {
        const confirm = window.confirm("Bạn có chắc chắn xóa bản ghi này không?");
        if (confirm) {
            props.onDelete(props.role.roleId);
        }
    }

    const handleOnUpdate = () => {
        props.onUpdate(props.role.roleId);
    }

    return (
        <tr>
            <td scope="row">{props.role.roleId}</td>
            <td><NavLink to={`${props.role.roleId}`}>{props.role.roleName}</NavLink></td>
            <td>{props.role.desc}</td>
            <td>{props.role.createdAt}</td>
            <td>{props.role.updatedAt ===  null ? props.role.createdAt : props.role.updatedAt }</td>
            <td><div>
                <button className="btn btn-success btn-sm rounded-0 text-white mx-2" type="button" data-toggle="tooltip" data-placement="top" title="Edit" onClick={handleOnUpdate}><i className="fa fa-edit"></i></button>
                <button className="btn btn-danger btn-sm rounded-0 text-white mx-2" type="button" data-toggle="tooltip" data-placement="top" title="Delete" onClick={handleOnDelete}><i className="fa fa-trash"></i></button>
            </div>
            </td>

        </tr>
    )
}

export default RequireAdmin(RoleItem);