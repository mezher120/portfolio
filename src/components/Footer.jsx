import React from "react";
import { NavLink } from "react-router-dom";
import style from './Footer.module.css';
import linkedin from '../images/linkedin.png';

export default function Footer() {
    return (
        <div className={style.container}>
        <div>
            <NavLink to="/home">
                <img className={style.iconlinkedin} src={linkedin}></img>
            </NavLink>
        </div>
        </div>
    )
}