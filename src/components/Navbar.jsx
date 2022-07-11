import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";
import icon from "../images/signature.png";
import linkedin from "../images/linkedin.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFont } from "@fortawesome/free-solid-svg-icons";
import { faFontAwesomeLogoFull } from "@fortawesome/free-solid-svg-icons";


export default function Navbar({data}) {

    // const onSubmit = (e) => {c
    //     resultRef.current.scrollIntoView({ behavior: "smooth" });
    //   };

    return (
        <div className={style.container}>
            <div className={style.iconcontainer}>
                <img className={style.iconsignature} src={icon} alt="not found"></img>
            </div>
            <div className={style.buttonercontainer} >
                <a className={style.buttons} href='#home'>About</a>
                <a className={style.buttons} href='#works'>Works</a>
                <a className={style.buttons} href='#skills'>Skills</a>
                <a className={style.buttons} href='#contact'>Contact</a>
                <label className={style.toggle}>
                <input className={style.toggle_checkbox} type="checkbox"/>
                <div className={style.toggle_switch} onClick={data}></div>
                <span className={style.toggle_label}></span>
                </label>
            </div>
        </div>
    )
}