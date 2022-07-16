import React from "react";
import style from './Cards.module.css';

export default function Cards({image, name, link}) {
    return (
        // <div>
        <div className={style.container}    
         data-aos="fade-up"
         data-aos-offset="300"
         data-aos-easing="ease-in-sine">
            <div className={style.hovereffect} >
                <img classname={style.imagefluid} width="250px" height="400px" src={image} alt="not found" ></img>
                <div className={style.overlay} >
                    <h2>{name}</h2>
                    <br></br>
                    <a className={style.info} href={link}>LINK HERE</a>
                </div>
            
            </div>
        </div>


        // <div className={style.container} >
        //     <div className={style.containerbox} >
        //     <img width="250px" height="400px" src={image} alt="not found" ></img>
        //     </div>
        //     <div className={style.containerboxnew} >
        //     <h4>E-COMMERCE</h4>
        //     <br></br>
        //     <a href="">CLICK HERE</a>
        //     </div>
        // </div>


    )
}