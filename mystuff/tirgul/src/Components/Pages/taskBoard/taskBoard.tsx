import { useState, useEffect } from "react";
import { store } from "../../redux/store";
import { downloadTask } from "../../redux/tasksReducer";
import "./taskBoard.css";
import { Tasks } from "../../modal/taskModal";

function TaskBoard(): JSX.Element {
    const[all_Tasks,setAllTasks]=useState<Tasks[]>([]);
    useEffect(()=>{
        if (store.getState().task.tasks.length<1){
            store.dispatch(
                downloadTask(JSON.parse(localStorage.getItem("tasks")as any))
            )
        }
    },[])
    store.subscribe(()=>{
        setAllTasks(store.getState().task.tasks)
        console.log(all_Tasks);
    })
    
    return (
        <div className="taskBoard">
			{/* {all_Tasks.length} */}
        </div>
    );
}

export default TaskBoard;
