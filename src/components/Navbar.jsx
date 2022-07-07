import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";
import icon from "../images/signature.png";
import linkedin from "../images/linkedin.png";

export default function Navbar() {
    return (
        <div className={style.container}>
            <div className={style.iconcontainer}>
                <img className={style.iconsignature} src={icon} alt="not found"></img>
            </div>
            <div className={style.buttonercontainer} >
                <NavLink className={style.buttons} to='/home'>About</NavLink>
                <NavLink className={style.buttons} to='/home'>Works</NavLink>
                <NavLink className={style.buttons} to='/home'>Skills</NavLink>
                <NavLink className={style.buttons} to='/home'>Contact</NavLink>
            </div>
        </div>
    )
}