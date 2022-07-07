import React from "react";
import style from './Home.module.css';

export default function Home() {
    return (
        <div className={style.container} >
            <div>
            <h1>
                <span>Hello, </span>
                <span>I'm </span>
                <span>Javier.</span>
            </h1>
            <h1>
                <span>FullStack </span> 
                <span>Developer</span>
            </h1>
            </div>
            <div className={style.pcontainer} >
            <p className={style.lineUp} >I am a passionate Frontend/Backend developer for the World. I have 3 years experience developing apps.</p>
            </div>
    
        </div>
    )
}