import { useNavigate, useParams } from "react-router";
import "./updateTaskPage.css";
import { Tasks } from "../../modal/taskModal";
import { useForm } from "react-hook-form";
import { wait } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import { useEffect, useState } from "react";
import { store } from "../../redux/store";
import { updateTask } from "../../redux/tasksReducer";

function UpdateTaskPage(): JSX.Element {
    const params=useParams();
    const [refresh,setRefresh]=useState(false);
    const [oldTask,setTask]=useState<Tasks>();
    const navigate=useNavigate();
    console.log(params.id)
    const {register,control,handleSubmit}=useForm<Tasks>();
    useEffect(() => {
        axios.get(`http://localhost:4000/api/v1/taskboard/getTaskById/${params.id}`)
          .then((response) => {
            setTask(response.data[0]);
          });
      }, [params.id]);
      
      useEffect(() => {
        console.log(oldTask);
        console.log(oldTask?.id);
      }, [oldTask]);

    const onsubmit=(data:Tasks)=>{
        axios.post(`http://localhost:4000/api/v1/taskboard/updateTask/${params.id}`,data)
        store.dispatch(updateTask(data))
        navigate("/");
    }
    if(!oldTask){
        return (
            <div> loading</div>
        )
    }
    return (
        <div className="updateTaskPage">
            
			{`hello here we gonna update task id ${oldTask.id}`} 
            <form onSubmit={handleSubmit(onsubmit)}>
            <textarea defaultValue={oldTask.content}
                {...register("content")}
                ></textarea>
                <br/>
                {/* <select
                style={{height:"40px",width:"260px",marginTop:"10px",marginBottom:"10px"}} 
                {...register("type")}>
                    <option>urgent</option>
                    <option>important</option>
                    <option>negligible</option>
                </select> */}
                <select value={oldTask.type}style={{height:"40px",width:"260px",marginTop:"10px",marginBottom:"10px"}} 
                {...register("type")}>
                <option value="urgent">Urgent</option>
                <option value="important">Important</option>
                <option value="negligible">Negligible</option>
                </select>
                <br/>
                <input type="reset" style={{background:"lightyellow"}}/>
                <input type="submit" 
                style={{background:"lightgreen"}}/>
            </form>
           
        </div>
    );
}

export default UpdateTaskPage;

