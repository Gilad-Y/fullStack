import express, { NextFunction, Request, Response, query, request } from "express";
import { addAction, getAccountData } from "../Logic/accountLogic";

const router = express.Router();

router.get(
    "/getActions/:id",
    async (request: Request, response: Response, next: NextFunction) => {
        const accountNumber:string=request.params.id;
        console.log(accountNumber)
      response.status(200).json(await getAccountData(accountNumber));
    }
  );
  router.post(
    "/addAction",
    async(request:Request,response:Response,next:NextFunction)=>{
        const actionData=request.body;
        console.log(actionData)
        response.status(201).json(await(addAction(actionData)))
    }
  )
export default router;