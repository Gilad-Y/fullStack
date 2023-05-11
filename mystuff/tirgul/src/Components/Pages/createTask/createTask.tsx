import { useForm } from "react-hook-form";
import "./createTask.css";
import { Tasks } from "../../modal/taskModal";

function CreateTask(): JSX.Element {
    const {register,control,handleSubmit}=useForm<Tasks>();
    const onSubmit=(data:Tasks)=>{
        console.log(data);
    }
    return (
        <div className="createTask">
			create task
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1> add new task!</h1>
                <textarea placeholder="enter the task right here!!!"
                {...register("content")}
                ></textarea>
                <br/>
                <select
                style={{height:"40px",width:"260px",marginTop:"10px",marginBottom:"10px"}} 
                {...register("type")}>
                    <option disabled selected>chose task importance</option>
                    <option>urgent</option>
                    <option>important</option>
                    <option>negligible</option>
                </select>
                <br/>
                <input type="reset" style={{background:"lightyellow"}}/>
                <input type="submit" 
                style={{background:"lightgreen"}}/>
            </form>
        </div>
    );
}

export default CreateTask;
