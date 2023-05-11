import { Tasks } from "../modal/taskModal";

export class TaskState{
    public tasks:Tasks[]=[];
}

export enum TasksActionType{
    addTask="addTask",
    removeTask="removeTask",
    downloadTasks="downloadTasks",
}
export interface TasksAction{
    type:TasksActionType;
    payload?:any;
}
export const addTask=(newTask:Tasks):TasksAction=>{
    return{
        type:TasksActionType.addTask,
        payload:newTask,
    }
}
export const removeTask=(id:number):TasksAction=>{
    return{
        type:TasksActionType.removeTask,
        payload:id,
    }
    
}
export const downloadTask=(tasks:Tasks[]):TasksAction=>{
    return{
        type:TasksActionType.downloadTasks,
        payload:tasks,
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
            newState.tasks=[...newState.tasks, action.payload]
            break;
        case TasksActionType.downloadTasks:
            newState.tasks=action.payload;
            break;
    }
    return newState;
}
