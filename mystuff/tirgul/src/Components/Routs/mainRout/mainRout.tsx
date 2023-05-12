import { Route, Routes } from "react-router";
import "./mainRout.css";
import CreateTask from "../../Pages/createTask/createTask";
import PageNotFound from "../../Pages/pageNotFound/pageNotFound";
import TaskBoard from "../../Pages/taskBoard/taskBoard";

function MainRout(): JSX.Element {
    return (
        <div className="mainRout">
			<Routes>
            <Route path="/" element={<TaskBoard/>} />
            <Route path="/tasks" element={<TaskBoard/>}/>
            <Route path="/addTasks" element={<CreateTask/>}/>
            <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </div>
    );
}

export default MainRout;
