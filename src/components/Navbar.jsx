import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";
import icon from "../images/signature.png";
import linkedin from "../images/linkedin.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFont } from "@fortawesome/free-solid-svg-icons";
import { faFontAwesomeLogoFull } from "@fortawesome/free-solid-svg-icons";


export default function Navbar({data}) {
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
                <label className={style.toggle}>
                <input className={style.toggle_checkbox} type="checkbox"/>
                <div className={style.toggle_switch} onClick={data}></div>
                <span className={style.toggle_label}></span>
                </label>
            </div>
        </div>
    )
}