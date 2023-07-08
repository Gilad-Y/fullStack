import { useState, useEffect } from "react";
import { store } from "../../redux/store";
import { addTask, downloadTask } from "../../redux/tasksReducer";
import "./taskBoard.css";
import { Tasks } from "../../modal/taskModal";
import SingleTask from "./singleTask/singleTask";
function TaskBoard(): JSX.Element {
    const [refresh,setRefresh]=useState(false);



    useEffect(()=>{
        if (store.getState().task.tasks.length<1){
            // if(!localStorage.getItem("tasks")){
            //     localStorage.setItem("tasks","")
            // }
       store.dispatch(
                downloadTask(JSON.parse(localStorage.getItem("tasks")as any))
            )
            setRefresh(!refresh);
        }
    },[])
    return (
        <div className="taskBoard">
			{store.getState().task.tasks.map((item)=>(
                <SingleTask
            key={item.id}
            content={item.content}
            type={item.type}
                />
            ))}
        </div>
    );
}

export default TaskBoard;
