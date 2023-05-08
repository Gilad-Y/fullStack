import { useEffect, useState } from "react";
import "./Summary.css";
import { store } from "../../../Redux/store";

function Summary(): JSX.Element {
    const[setCategoryTotal,setCatTotal]=useState(0);
    store.subscribe(()=>{
        setCatTotal(store.getState().category.categories.length);
    })
    return (
        <div className="Summary">
			total categories {setCategoryTotal}| total photos 0
        </div>
    );
}

export default Summary;
