import { NavLink } from "react-router-dom";
import "./menu.css";

function Menu(): JSX.Element {
    return (
        <div className="menu">
			menu
            <br/>
            <NavLink to={"/"}> home</NavLink>
            <br/>
            <NavLink to={"/addMeeting"}>add meeting</NavLink>
        </div>
    );
}

export default Menu;
