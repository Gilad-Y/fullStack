import "./createTask.css";
import { Tasks } from "../../modal/taskModal";
import { store } from "../../redux/store";
import { addTask } from "../../redux/tasksReducer";
import { useForm } from "react-hook-form";
import axios from "axios";

function CreateTask(): JSX.Element {
    const {register,control,handleSubmit}=useForm<Tasks>();
    const onSubmit=(data:Tasks)=>{
        if( data.type=="chose task importance"){
            alert("choose another type")
        }else{
        axios.
        post("http://localhost:4000/api/v1/taskboard/addNewTask",data) 
        console.log(data);
        store.dispatch(addTask(data));
    }}
    // if(!localStorage.getItem("tasks")){
    // localStorage.setItem("tasks",JSON.stringify(store.getState().task.tasks))
    // }
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
