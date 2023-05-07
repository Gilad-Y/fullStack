import Categories from "../Categories/Categories";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Photos from "../Photos/Photos";
import Summary from "../Summary/Summary";
import "./MainLayout.css";

function MainLayout(): JSX.Element {
    return (
        <div className="MainLayout">
      <header>
        <Header />
      </header>
      <div className="categories">
        <Categories />
      </div>
      <aside>
        <Menu />
      </aside>
      <main>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
    );
}

export default MainLayout;