import express, { NextFunction, Request, Response,} from "express";
import { addLike, addVacation, deleteLike, deleteVacation, getAllLikes, getFilter, getFutureVacations, getVacationById, getVacations, makeFile } from "../Logic/vacationLogic";

const router = express.Router();
router.post(
  "/addVacation",
  async(request:Request,response:Response,next:NextFunction)=>{
    const vacationInfo=request.body;
    console.log(vacationInfo)
    response.status(201).json(await addVacation(vacationInfo))
  }
)
router.get(
  "/getAll",
  async(request:Request,response:Response,next:NextFunction)=>{
    
    response.status(200).json(await getVacations())
  }
)
router.get(
  "/getById/:id",
  async(request:Request,response:Response,next:NextFunction)=>{
    const id =+ request.params.id;
    response.status(200).json(await getVacationById(id))
  }
)
router.get(
  "/getAllActive",
  async (request: Request, response: Response, next: NextFunction) => {
    // const filter = request.query.variant;
    response.status(200).json(await getFilter());
  }
);
router.get(
  "/getFutureVacations",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json(await getFutureVacations());
  }
);
router.delete(
  "/deleteVacation/:id",
  async(request:Request,response:Response,next:NextFunction)=>{
    const id=+request.params.id

    response.status(200).json(await deleteVacation(id))
  }
)
router.put(
  "/updateVacation/:id",
  async(request:Request,response:Response,next:NextFunction)=>{
    const id=+request.params.id;
    const updatedVacation=request.body;
    response.status(200).json(updatedVacation)
  }
)
router.post(
  "/addLike",
  async(request:Request,response:Response,next:NextFunction)=>{
    const likeInfo=request.body;
    // console.log('like info is....',likeInfo)
    response.status(201).json(await addLike(likeInfo))
  }
)
router.delete(
  "/removeLike",
  async(request:Request,response:Response,next:NextFunction)=>{
  // const likeInfo={vacationCode:request.params.vacationCode,userCode:request.params.userCode};
  // console.log('like to delete is....',likeInfo)
  const likeInfo=request.body;
    response.status(200).json(await deleteLike(likeInfo))
  }
)
router.get(
  "/getAllLikes",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json(await getAllLikes());
  }
);

router.get(
  "/makeCSV",
  async(request:Request,response:Response,next:NextFunction)=>{
    const data=request.query;
    // console.log("data is...",data)
    response.status(201).json(await makeFile(data))
  }
)
export default router;
