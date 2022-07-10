import React from "react";
import style from './City.module.css';
import map from '../images/map.png';

export default function City() {
    return (
        <div className={style.container} >
            <div className={style.containerh4}>
            <h4>Contact</h4>    
            <div className={style.containerform}>
                <form>
                    <div className={style.form__group}>
                    <input type="input" className={style.form__field} placeholder="Name" name="name" id='name' required />
                    <label for="name" className={style.form__label}>Name</label>
                    </div>
                    <div className={style.form__group}>
                    <input type="input" className={style.form__field} placeholder="Email" name="name" id='name' required />
                    <label for="name" className={style.form__label}>Email</label>
                    </div>
                    <div className={style.form__group}>
                    <textarea cols="5" rows="5" type="input" className={style.form__field} placeholder="Message" name="name" id='name' required />
                    <label for="name" className={style.form__label}>Message</label>
                    </div>
                    <div className={style.containerbtn} >
                    <input className={style.buttons} type="submit" value="Send" ></input>
                    </div>

                </form>
            </div>

            </div>
            <div className={style.hovereffect}>
                <img className={style.containerimg} src={map} width="100%" height="max-content" alt="Not found"></img>
                <div className={style.overlay}></div>
            </div>

        </div>
    );
}