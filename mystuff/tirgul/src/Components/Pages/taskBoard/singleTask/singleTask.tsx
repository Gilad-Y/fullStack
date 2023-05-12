import "./singleTask.css";
import background from '../../../../img/notebg.png';
import { Button, IconButton } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

interface itemProps{
    key:number;
    content:string;
    type:string;
}
function SingleTask(props:itemProps): JSX.Element {
    return (
        <div className="singleTask box" style={{backgroundImage:`url(${background})`}}>
            
            <IconButton aria-label="delete" style={{ position: 'absolute', top: 0, right: 0,paddingTop:20}}>
  <DeleteOutlineIcon
/>
</IconButton>
<div className="taskInfo">
			{props.content}
            <br/>
            {props.type}
            <br/>
            {props.key}
            <br/>
            </div>
        </div>
    );
}

export default SingleTask;
