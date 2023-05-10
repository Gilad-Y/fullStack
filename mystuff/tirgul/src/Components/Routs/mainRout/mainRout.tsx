import { Route, Routes } from "react-router";
import "./mainRout.css";
import Tasks from "../../Pages/Tasks/Tasks";
import CreateTask from "../../Pages/createTask/createTask";
import PageNotFound from "../../Pages/pageNotFound/pageNotFound";

function MainRout(): JSX.Element {
    return (
        <div className="mainRout">
			<Routes>
            <Route path="/" element={<Tasks/>} />
            <Route path="/tasks" element={<Tasks/>}/>
            <Route path="/addTasks" element={<CreateTask/>}/>
            <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </div>
    );
}

export default MainRout;
