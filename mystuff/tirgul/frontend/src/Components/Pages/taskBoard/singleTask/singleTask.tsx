import "./singleTask.css";
import background from '../../../../img/notebg.png';
import { Button, IconButton } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { type } from "os";
import { useNavigate } from "react-router";

interface itemProps{
    id:number;
    content:string;
    type:string;
    onDeleteTask:(id: number) => void;
}
function SingleTask(props:itemProps): JSX.Element {
    const navigate=useNavigate();
    const handleDeleteTask=(id:number)=>{
        props.onDeleteTask(id)
    }
    let type;
    switch(props.type){
        case "urgent":
             type ="urgent"
        break;
        case "important":
             type ="important"
        break;
        case "negligible":
             type ="negligible"
        break;
         default:
        
         break;
    }
    const handleDoubleClick=(id:number)=>{
        console.log(id)
        navigate(`/updateTask/${id}`)
    }
    return (
        <div className="singleTask box" style={{backgroundImage:`url(${background})`}}>
            
            <IconButton aria-label="delete" 
            onClick={()=>handleDeleteTask(props.id)}
            style={{ position: 'absolute', top: 0, right: 0,paddingTop:20}}>
  <DeleteOutlineIcon
/>
</IconButton>
<br/>
<div className="taskInfo"
 onDoubleClick={()=>handleDoubleClick(+props.id)} >
			{props.content}
            <br/>
            <div className={type}>
            {props.type}
            </div>
            <br/>
            </div>
        </div>
    );
}

export default SingleTask;



function setInputValue(content: string) {
    throw new Error("Function not implemented.");
}

