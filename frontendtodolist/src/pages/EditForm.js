import { useLocation , useNavigate} from "react-router-dom";
import "./EditForm.css"

export default function EditForm (){

    const location = useLocation();
    console.log(location)

    let id =location.state._id;
    let description = location.state.description;
    let title = location.state.title;


    let navigate = useNavigate();

    let onClickBackHandler = (e) => {
        e.preventDefault()
        navigate("../")
    }

    let onSubmitHandler = async e => {
        e.preventDefault();
        let title = e.target[0].value;
        let description = e.target[1].value;
        let res = {title, description}
        await fetch("/tasks/"+id, {
            method: "PUT",
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(res)
        })
        navigate("../")
    }

    return (
        <div className="EditFormContainer">
            <form className="EditForm" onSubmit={onSubmitHandler}>
                <input className ="title" type="text" value={title}></input>
                <textarea className ="description" type="text" value={description}></textarea>
                <div className="ButtonSection">
                    <button onClick = {onClickBackHandler}>Volver</button>
                    <button>Aceptar</button>
                </div>
            </form>
        </div>
    )
}