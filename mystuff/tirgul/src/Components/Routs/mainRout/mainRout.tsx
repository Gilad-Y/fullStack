import { Route, Routes } from "react-router";
import "./mainRout.css";
import Tasks from "../../Pages/Tasks/Tasks";
import CreateTask from "../../Pages/createTask/createTask";

function MainRout(): JSX.Element {
    return (
        <div className="mainRout">
			<Routes>
            <Route path="/" element={<Tasks/>} />
            <Route path="/tasks" element={<Tasks/>}/>
            <Route path="/addTasks" element={<CreateTask/>}/>
            </Routes>
        </div>
    );
}

export default MainRout;
