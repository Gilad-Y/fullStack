//import
import express, { NextFunction, Request, Response, query } from "express";
import { getTeams, getMeetings, addMeeting } from "../Logic/devLogic";


const router = express.Router();

// http://localhost:4000/api/v1/checkOK
// http://localhost:4000/api/v1/checkBAD

//POST, GET, PUT, DELETE
//CRUD - Create,Read,Update,Delete

//GET
router.get(
  "/getAllTeams",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json(await getTeams());
  }
);
router.get(
  "/getAllMeetings",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json(await getMeetings());
  }
);
router.post(
  "/addMeeting",
  async (request: Request, response: Response, next: NextFunction) => {
    const newMeeting=request.body
    console.log(newMeeting,"i got this?")
    response.status(200).json(await addMeeting(newMeeting));
  }
);

export default router;
