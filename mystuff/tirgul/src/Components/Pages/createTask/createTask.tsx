import { useForm } from "react-hook-form";
import "./createTask.css";
import Tasks from "../Tasks/Tasks";

function CreateTask(): JSX.Element {
    // const{register,handelSubmit,formState:{errors},}
    // =useForm<Tasks>();

    let temp:string="";
    return (
        <div className="createTask">
			create task
            <form onSubmit={handelSubmit}>
                <h1> add new task!</h1>
                <textarea placeholder="enter the task right here!!!"
                // onBlur={e=>temp=(e.target).value}
                {...register("content")}
                ></textarea>
                <br/>
                {/* <input type="reset" style={{background:"lightyellow"}}/>
                <input type="submit" 
                onClick={handelSubmit}
                style={{background:"lightgreen"}}/> */}
            </form>
        </div>
    );
}

export default CreateTask;
