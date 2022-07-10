import React from "react";
import style from './Skills.module.css';

export default function Skills() {
    return (
        <div className={style.container}>
            <div data-aos="fade-up"
            data-aos-offset="300"
             data-aos-easing="ease-in-sine">
                <h2>Skills</h2>
                <h2>LANGUAGES</h2>
            </div>
            <div className={style.button_container} 
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" >
            <span className={style.mas}>JAVASCRIPT</span>
            <button id='work' type="button" name="Hover">JAVASCRIPT</button>
            </div>
            <div className={style.containerfrontback} >
                <div className={style.frontback} 
                            data-aos="zoom-out-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">
                <h2>Front-End</h2>
                </div>
                <div className={style.frontback}
                            data-aos="zoom-out-left"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">
                <h2>Back-End and DB</h2>
                </div>
            </div>
            <div className={style.containerfrontback} 
                        data-aos="zoom-in-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" >
                <div className={style.frontback}>
                    <div className={style.button_container}>
                    <span className={style.mas}>REACT</span>
                    <button id='work' type="button" name="Hover">REACT</button>
                    </div>
                    <div className={style.button_container}>
                    <span className={style.mas}>REDUX</span>
                    <button id='work' type="button" name="Hover">REDUX</button>
                    </div>
                    <div className={style.button_container}>
                    <span className={style.mas}>CSS</span>
                    <button id='work' type="button" name="Hover">CSS</button>
                    </div>
                    <div className={style.button_container}>
                    <span className={style.mas}>BOOTSTRAP</span>
                    <button id='work' type="button" name="Hover">BOOTSTRAP</button>
                    </div>
                    <div className={style.button_container}>
                    <span className={style.mas}>AOS</span>
                    <button id='work' type="button" name="Hover">AOS</button>
                    </div>
                    <div className={style.button_container}>
                    <span className={style.mas}>REACT MOTION</span>
                    <button id='work' type="button" name="Hover">REACT MOTION</button>
                    </div>
                </div>
                <div className={style.frontback} 
                            data-aos="zoom-in-left"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">

                    <div className={style.button_container}>
                    <span className={style.mas}>NODEJS</span>
                    <button id='work' type="button" name="Hover">NODEJS</button>
                    </div>
                    <div className={style.button_container}>
                    <span className={style.mas}>EXPRESS</span>
                    <button id='work' type="button" name="Hover">EXPRESS</button>
                    </div>
                    <div className={style.button_container}>
                    <span className={style.mas}>SEQUELIZE</span>
                    <button id='work' type="button" name="Hover">SEQUELIZE</button>
                    </div>
                    <div className={style.button_container}>
                    <span className={style.mas}>PostgreSQL</span>
                    <button id='work' type="button" name="Hover">PostgreSQL</button>
                    </div>
                    <div className={style.button_container}>
                    <span className={style.mas}>NODEMAILER</span>
                    <button id='work' type="button" name="Hover">NODEMAILER</button>
                    </div>
                    <div className={style.button_container}>
                    <span className={style.mas}>AUTH0</span>
                    <button id='work' type="button" name="Hover">AUTH0</button>
                    </div>
                </div>
            </div>
        

        </div>
    );

}