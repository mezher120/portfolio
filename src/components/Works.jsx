import React from "react";
import style from './Works.module.css';
import Cards from './Cards';
import bluebirdpage from '../images/bluebirdpage.png';
import foodpage from '../images/foodpage.png';
import cellphoneapp from '../images/cellphoneapp.png';
// import { forwardRef } from "react";

const Works = () => {
    return (
        <div className={style.firstcontainer} >
        <div className={style.container} id="works" >
            {/* <div className={style.line} data-aos="fade-right"
             data-aos-offset="300"
            data-aos-easing="ease-in-sine" ></div> */}
            <h2 data-aos="zoom-in-up" >Works</h2>
            <div className={style.cardscontainer} > 
              <Cards image={bluebirdpage} name="E-COMMERCE" link="https://bluebirdstore.vercel.app/"></Cards>
              <Cards image={foodpage} name="RECIPE FOOD WEB" link="https://food-recipes-searcher.vercel.app/" ></Cards>
              <Cards image={cellphoneapp} name="ANDROID APP" link="https://github.com/mezher120/AppAsado2" ></Cards>
            </div>
            <br></br>
        </div>

        </div>
    )
}

export default Works; 