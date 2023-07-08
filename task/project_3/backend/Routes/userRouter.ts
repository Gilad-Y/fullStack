//import
import express, { NextFunction, Request, Response, request } from "express";
import { Test } from "../Models/Test";
import { addUser, checkEmail, getUsers, logIn } from "../Logic/usersLogic";


const router = express.Router();
router.post(
  "/addUser",
  async(request:Request,response:Response,next:NextFunction)=>{
    const userInfo=request.body;
    response.status(201).json(await addUser(userInfo))
  }
)
router.post(
  "/logIn",
  async(request:Request,response:Response,next:NextFunction)=>{
    const userInfo=request.body;
    const data =await logIn(userInfo)
    if(data){
      response.status(201).json(data)  
    }else{
      response.status(401).json(false)
    }
    
  }
)
router.get(
  "/getAll",
  async(request:Request,response:Response,next:NextFunction)=>{
    
    response.status(200).json(await getUsers())
  }
)
router.get(
  "/checkEmail",
  async(request:Request,response:Response,next:NextFunction)=>{
    const email=request.query.emailToCheck;
    // const email=request.body
    // console.log(email)
    response.status(200).json(await checkEmail(email as string))
  }
)


export default router;
