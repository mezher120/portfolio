import React from "react";
import style from './Works.module.css';
import Cards from './Cards';
import bluebirdpage from '../images/bluebirdpage.png';
import foodpage from '../images/foodpage.png';
import cellphoneapp from '../images/cellphoneapp.png';

export default function Works() {
    return (
        <div className={style.container} >
            <div className={style.line} ></div>
            <h2>Works</h2>
            <div className={style.cardscontainer} > 
              <Cards image={bluebirdpage} name="E-COMMERCE"></Cards>
              <Cards image={foodpage} name="RECIPE FOOD WEB"></Cards>
              <Cards image={cellphoneapp} name="ANDROID APP"></Cards>
            </div>
            <div className={style.line} ></div>  
        </div>
    )
}