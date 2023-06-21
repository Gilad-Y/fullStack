import { Route, Routes } from "react-router-dom";
import "./MainRoute.css";
import Main from "../../Pages/main/main";
import AddMeeting from "../../Pages/addMeeting/addMeeting";
import Page404 from "../../Pages/page404/page404";

function MainRoute(): JSX.Element {
    return (
        <div className="MainRoute">
			<Routes>
            <Route path="/" element={< Main/>} />
            <Route path="/addMeeting" element={< AddMeeting/>} />
            <Route path="*" element={< Page404/>} />

            </Routes>
        </div>
    );
}

export default MainRoute;
