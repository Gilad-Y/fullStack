import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
			main menu
            <hr/>
            <NavLink to={"/"}><div className="MenuItems">
            Home page
            </div></NavLink>
            <NavLink to={"/AddCategory"}><div className="MenuItems">
            Category management
            </div></NavLink>
            <div className="MenuItems">
            add photo
            </div>
            <div className="MenuItems">
            login/logout
            </div>
        </div>
    );
}

export default Menu;
