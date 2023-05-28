import express, { NextFunction, Response, Request, request } from "express";
import { addNewTask, deleteTask, getAllTasks, getTaskById, updateTask } from "../Logic/TaskLogic";
const taskRouter =express.Router();

taskRouter.get(
    "/getAllTasks", 
    async (request: Request, response: Response, next: NextFunction) => {
      console.log("all tasks");
      return response.status(200).json(await getAllTasks())
    }
  );
  taskRouter.post(
    "/addNewTask",
    async (request:Request,response:Response,next:NextFunction)=>{
        const newTask=request.body;
        console.log(newTask)
        const res =await addNewTask(newTask);
        return response.status(201).json(`id: ${res}`)
    }
  )
  taskRouter.delete(
    "/deleteTask/:id",
    async(request:Request,response:Response,next:NextFunction)=>{
        const taskID= +request.params.id;
        console.log(`task id${taskID} was deleted`);
        return response.status(204).json(await deleteTask(taskID))
    }
  )
  taskRouter.post(
    "/updateTask/:id",
    async(request:Request,response:Response,next:NextFunction)=>{
      const updatedTask=request.body;
      console.log(updatedTask);
      return response.status(200).json(
      await updateTask(updatedTask))
    }
  )
  taskRouter.get(
    "/getTaskById/:id",
    async(request:Request,response:Response,next:NextFunction)=>{
      const taskID= +request.params.id;
      console.log(`got task ${taskID} for you king`)
      return response.status(200).json(await getTaskById(taskID))
    }
  )
export default taskRouter;
