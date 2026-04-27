import "./Accordion.css";
import { useState } from "react";
import Chevron from "../../assets/icons/Chevronup.svg"

export default function Accordion({title, children}){

    const [isOpen, setisOpen] = useState(true);

    function toggleOpen(){
        setisOpen(!isOpen)
    }

    return(
        <>
        <div className="accordion-row" onClick={toggleOpen}>
            <div className="line short"/>
            <p>{title}</p>
            <div className="line"/>
            <img className={!isOpen ? "closed" : ""} src={Chevron}/>
            <div className="line short"/>
        </div>
        {isOpen ? children : null}
        </>
    )
}