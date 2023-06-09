import axios from "axios";
import { Tasks } from "../modal/taskModal";

export class TaskState{
    public tasks:Tasks[]=[];
}

export enum TasksActionType{
    addTask="addTask",
    removeTask="removeTask",
    downloadTasks="downloadTasks",
    updateTask="updateTask",
}
export interface TasksAction{
    type:TasksActionType;
    payload?:any;
}
export function addTask(newTask:Tasks):TasksAction{
    return{
        type:TasksActionType.addTask,
        payload:newTask,
    }
}
export function removeTask(id:number):TasksAction{
    return{
        type:TasksActionType.removeTask,
        payload:id,
    }
    
}
export function downloadTask(tasks:Tasks[]):TasksAction{
    return{
        type:TasksActionType.downloadTasks,
        payload:tasks,
    }
}
export function updateTask(updatedTask:Tasks):TasksAction{
    return{
        type:TasksActionType.updateTask,
        payload:updatedTask,
    }
}
export const TasksReducer=(
    currentState:TaskState=new TaskState(),
    action:TasksAction):TaskState=>{
        const newState={...currentState};
        switch(action.type){
        case TasksActionType.addTask:
            newState.tasks=[...newState.tasks, action.payload]
            break;
        case TasksActionType.removeTask:
            newState.tasks=[...newState.tasks].filter(
            (item)=>item.id != action.payload)            
            break;
        case TasksActionType.downloadTasks:
            newState.tasks=action.payload;
            break;
            case TasksActionType.updateTask:
                newState.tasks=[...newState.tasks]
            break;
    }
    return newState;
}
