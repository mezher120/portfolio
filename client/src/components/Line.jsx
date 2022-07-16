import React from "react";
import style from './Line.module.css';

export default function Line() {
    return (
        <div className={style.container} >

            <div className={style.line} data-aos="fade-right"
             data-aos-offset="300"
             data-aos-easing="ease-in-sine" ></div>
        </div>
    );
}