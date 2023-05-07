import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
			main menu
            <hr/>
            <div className="MenuItems">
            Category management
            </div>
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
