import { useEffect, useState } from "react";
import "./Footer.css";

function Footer(): JSX.Element {
    const [thisTime,setTime]=useState("");
    useEffect(()=>{
        const dateInterval=setInterval(()=>{
            setTime(new Date().toLocaleDateString('he-IL'));
        },1000)
    },[])
   
    
    return (
        <div className="Footer">
			this site made by Gilad | {thisTime}
        </div>
    );
}

export default Footer;
