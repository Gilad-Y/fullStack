import { useState } from "react";
import "./Footer.css";

function Footer(): JSX.Element {
    const [thisTime,setTime]=useState("");
    const dateInterval=setInterval(()=>{
        setTime( thisTime => thisTime= new Date().toLocaleDateString('he-IL'));
    },1000)
    
    return (
        <div className="Footer">
			this site made by Gilad | {thisTime}
        </div>
    );
}

export default Footer;
