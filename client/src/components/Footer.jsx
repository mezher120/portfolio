import React from "react";
import { NavLink } from "react-router-dom";
import style from './Footer.module.css';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import whatsapp from '../images/whatsapp.png';

export default function Footer() {
    return (
        <div className={style.container}>
        <div className={style.buttonercontainer} >
            <a href="https://www.linkedin.com/in/javier-ferrari-mezher/?locale=en_US">  
                <img className={style.iconlinkedin} src={linkedin}></img>
            </a>
            <a href="https://github.com/mezher120/">  
                <img className={style.iconlinkedin} src={github}></img>
            </a>
            <a href="https://wa.me/+541141486065">  
                <img className={style.iconlinkedin} src={whatsapp}></img>
            </a>
        </div>
        </div>
    )
}