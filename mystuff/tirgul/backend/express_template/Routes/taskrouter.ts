import express, { NextFunction, Response, Request, request } from "express";
import { addNewTask, deleteTask, getAllTasks } from "../Logic/TaskLogic";
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
        const songID= +request.params.id;
        console.log(`song id${songID} was deleted`);
        return response.status(204).json(await deleteTask(songID))
    }
  )
export default taskRouter;
