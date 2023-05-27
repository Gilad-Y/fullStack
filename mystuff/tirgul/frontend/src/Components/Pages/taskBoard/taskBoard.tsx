import { useState, useEffect } from "react";
import { store } from "../../redux/store";
import { addTask, downloadTask } from "../../redux/tasksReducer";
import "./taskBoard.css";
import { Tasks } from "../../modal/taskModal";
import SingleTask from "./singleTask/singleTask";
import axios, { all } from "axios";
function TaskBoard(): JSX.Element {
    const [refresh,setRefresh]=useState(false);
    // useEffect(()=>{
    //     if (store.getState().task.tasks.length<1){
    //         // if(!localStorage.getItem("tasks")){
    //         //     localStorage.setItem("tasks","")
    //         // }
    //    store.dispatch(
    //             downloadTask(JSON.parse(localStorage.getItem("tasks")as any))
    //         )
    //         setRefresh(!refresh);
    //     }
    // },[])
    useEffect(()=>{
        axios.get 
        ("http://localhost:4000/api/v1/taskboard/getAllTasks") 
        .then((response)=>response.data)
        .then((result)=>{
            store.dispatch(downloadTask(result))
            setRefresh(!refresh)
        })
    },[])
    const getAllTasks= async()=>{
        const allTasks= store.dispatch(downloadTask(await axios.get ("http://localhost:4000/api/v1/taskboard/getAllTasks")))
        console.log(allTasks)
    }
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
