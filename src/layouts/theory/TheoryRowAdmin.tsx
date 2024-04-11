import TheoryModel from "../../models/TheoryModel";

interface TheoryRowInterface {
    theory: TheoryModel;
    onUpdate: (id: number) => void;
}
const TheoryRowAdmin: React.FC<TheoryRowInterface> = (props) => {
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
            </div>
            </td>
        </tr>
    )
}

export default TheoryRowAdmin;