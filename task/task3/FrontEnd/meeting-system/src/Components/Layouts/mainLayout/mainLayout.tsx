import MainRoute from "../../Routes/MainRoute/MainRoute";
import Footer from "../footer/footer";
import Header from "../header/header";
import Main from "../main/main";
import Menu from "../menu/menu";
import "./mainLayout.css";

function MainLayout(): JSX.Element {
    return (
        <div className="MainLayout">
			<header>
                <Header/>
            </header>
            <aside>
                <Menu/>
            </aside>
            <main>
                <MainRoute/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default MainLayout;
