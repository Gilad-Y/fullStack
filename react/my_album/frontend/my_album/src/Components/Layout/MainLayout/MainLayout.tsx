import { downloadCategoryAction } from "../../Redux/CategoriesReducer";
import { store } from "../../Redux/store";
import MainRoutes from "../../Routes/MainRoutes/MainRoutes";
import Categories from "../Categories/Categories";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import "./MainLayout.css";
import { useEffect } from "react";

function MainLayout(): JSX.Element {
  useEffect(()=>{
    if(store.getState().category.categories.length<1){
      if(localStorage.getItem("Categories")){
        store.dispatch(
          downloadCategoryAction(
            JSON.parse(localStorage.getItem("Categories")as any)
          )
        )
      }
    }
  })
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
        <MainRoutes/>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
    );
}

export default MainLayout;
