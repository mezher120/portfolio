import React from "react";
import style from './Works.module.css';
import Cards from './Cards';
import bluebirdpage from '../images/bluebirdpage.png';
import foodpage from '../images/foodpage.png';
import cellphoneapp from '../images/cellphoneapp.png';

export default function Works() {
    return (
        <div className={style.container} >
            {/* <div className={style.line} data-aos="fade-right"
             data-aos-offset="300"
            data-aos-easing="ease-in-sine" ></div> */}
            <h2 data-aos="zoom-in-up" >Works</h2>
            <div className={style.cardscontainer} > 
              <Cards image={bluebirdpage} name="E-COMMERCE"></Cards>
              <Cards image={foodpage} name="RECIPE FOOD WEB" ></Cards>
              <Cards image={cellphoneapp} name="ANDROID APP" ></Cards>
            </div>
            <br></br>
        </div>
    )
}