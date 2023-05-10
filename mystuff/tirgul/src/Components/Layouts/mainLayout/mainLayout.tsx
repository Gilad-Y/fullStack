import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Menu from "../Menu/Menu";
import "./mainLayout.css";

function MainLayout(): JSX.Element {
    return (
        <div className="mainLayout">
            <header>
                <Header/>
            </header>
            <main>
                <Menu/>
            </main>
            <aside>
                <Home/>
            </aside>
            <footer>
                <Footer/>
            </footer>

        </div>
    );
}

export default MainLayout;
