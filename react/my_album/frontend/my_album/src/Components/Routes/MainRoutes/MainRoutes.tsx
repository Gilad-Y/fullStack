import { Route, Router, Routes } from "react-router-dom";
import "./MainRoutes.css";
import Photos from "../../pages/Photos/Photos";
import Page404 from "../../pages/Page404/Page404";
import AddCategory from "../../pages/AddCategory/AddCategory";

function MainRoutes(): JSX.Element {
    return (
        <div className="MainRoutes">
			<Routes>
            <Route path="/" element={<Photos/>} />
            <Route path="/addCategory" element={<AddCategory/>} />
            <Route path="*" element={<Page404/>} />
            </Routes>
        </div>
    );
}

export default MainRoutes;
