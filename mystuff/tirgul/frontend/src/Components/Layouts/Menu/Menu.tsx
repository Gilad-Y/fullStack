import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
			main menu
            <hr/>
            <NavLink className={"Nav"} to={"/"}>task board</NavLink>
            <br/>
            <NavLink className={"Nav"} to={"/addTasks"} >add task</NavLink>
        </div>
    );
}

export default Menu;
