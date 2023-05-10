import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Menu from "../Menu/Menu";
import Sum from "../Sum/Sum";
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
                <div className="sum">
                <Sum/>
                </div>

        </div>
    );
}

export default MainLayout;
