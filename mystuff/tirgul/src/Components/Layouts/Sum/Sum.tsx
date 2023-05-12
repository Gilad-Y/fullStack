import { useState } from "react";
import { store } from "../../redux/store";
import "./Sum.css";

function Sum(): JSX.Element {
    const [taskNumber,setTasks]=useState(0);

    store.subscribe(()=>{
        setTasks(store.getState().task.tasks.length)
    })
    return (
        <div className="Sum">
			total number of tasks | {taskNumber}
        </div>
    );
}

export default Sum;
