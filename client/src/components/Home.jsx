import React from "react";
import style from './Home.module.css';

export default function Home() {
    return (
        <div className={style.firstcontainer} >
        <div className={style.container} id="home" >
            <div>
            <h1>
                <span>Hello, </span>
                <span>I'm </span>
                <span>Javier.</span>
            </h1>
            <h1>
                <span>A full-stack </span> 
                <span>Developer</span>
            </h1>
            </div>
            <div className={style.pcontainer} >
            <p className={style.lineUp} >I am a passionate Frontend/Backend developer for the World. I have 3 years of experience developing apps. I am a well-organised person, a problem solver, and an independent employee. 
            I am also a big fan of Sports, video-games and spending time with my family.</p>
            </div>
    
        </div>

        </div>
    )
}