import { useEffect, useState } from "react";
import TheoryExampleModel from "../../models/TheoryExampleModel";

interface TheoryExampleRowInterface {
    theoryExample: TheoryExampleModel;
    onDelete: (id: number) => void;
    onUpdate: (id: number) => void;
}
const TheoryExampleRowAdmin: React.FC<TheoryExampleRowInterface> = (props) => {
    const handleOnDelete = () => {
        const confirm = window.confirm("Are you sure to delete this record?");
        if (confirm) {
            props.onDelete(props.theoryExample.exampleId);
        }
    }

    const handleOnUpdate = () => {
        props.onUpdate(props.theoryExample.exampleId);
    }

    return (
        <tr>
            <td scope="row">{props.theoryExample.exampleId}</td>
            <td>{props.theoryExample.name}</td>
            <td>{props.theoryExample.answer}</td>
            <td>{props.theoryExample.createdAt}</td>
            <td><div>
                <button className="btn btn-success btn-sm rounded-0 text-white mx-2" type="button" data-toggle="tooltip" data-placement="top" title="Edit" onClick={handleOnUpdate}><i className="fa fa-edit"></i></button>
                <button className="btn btn-danger btn-sm rounded-0 text-white mx-2" type="button" data-toggle="tooltip" data-placement="top" title="Delete" onClick={handleOnDelete}><i className="fa fa-trash"></i></button>
            </div>
            </td>
        </tr>
    )
}

export default TheoryExampleRowAdmin;