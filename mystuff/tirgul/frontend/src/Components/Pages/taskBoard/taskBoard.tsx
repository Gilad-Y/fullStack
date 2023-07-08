import { useState, useEffect } from "react";
import { store } from "../../redux/store";
import { addTask, downloadTask, removeTask } from "../../redux/tasksReducer";
import "./taskBoard.css";
import { Tasks } from "../../modal/taskModal";
import SingleTask from "./singleTask/singleTask";
import axios, { all } from "axios";
function TaskBoard(): JSX.Element {
    const [refresh,setRefresh]=useState(false);
    useEffect(()=>{
        axios.get 
        ("http://localhost:4000/api/v1/taskboard/getAllTasks") 
        .then((response)=>response.data)
        .then((result)=>{
            store.dispatch(downloadTask(result))
            setRefresh(!refresh)
        })
    },[])
  
    const deleteTask=(id:number)=>{
        console.log(id);
      axios
      .delete(`http://localhost:4000/api/v1/taskboard/deleteTask/${id}`)
      .then(()=>{
        store.dispatch(removeTask(id))
        setRefresh(!refresh)
    }
        )}
    return (
        <div className="taskBoard">
			{store.getState().task.tasks.map((item)=>(
                <SingleTask
            key={item.id}
            id={item.id}
            content={item.content}
            type={item.type}
            onDeleteTask={deleteTask}
                />
            ))}
        </div>
    );
}

export default TaskBoard;
