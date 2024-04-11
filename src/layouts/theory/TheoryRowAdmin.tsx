import { useEffect, useState } from "react";
import TheoryModel from "../../models/TheoryModel";

interface TheoryRowInterface {
    theory: TheoryModel;
    onDelete: (id: number) => void;
    onUpdate: (id: number) => void;
}
const TheoryRowAdmin: React.FC<TheoryRowInterface> = (props) => {
    const handleOnDelete = () => {
        const confirm = window.confirm("Are you sure to delete this record?");
        if (confirm) {
            props.onDelete(props.theory.theoryDetailId);
        }
    }

    const handleOnUpdate = () => {
        props.onUpdate(props.theory.theoryDetailId);
    }

    return (
        <tr>
            <td scope="row">{props.theory.theoryDetailId}</td>
            <td>{props.theory.title}</td>
            <td>{props.theory.createdAt}</td>
            <td><div>
                <button className="btn btn-success btn-sm rounded-0 text-white mx-2" type="button" data-toggle="tooltip" data-placement="top" title="Edit" onClick={handleOnUpdate}><i className="fa fa-edit"></i></button>
                <button className="btn btn-danger btn-sm rounded-0 text-white mx-2" type="button" data-toggle="tooltip" data-placement="top" title="Delete" onClick={handleOnDelete}><i className="fa fa-trash"></i></button>
            </div>
            </td>
        </tr>
    )
}

export default TheoryRowAdmin;