import React from "react";
import style from './City.module.css';
import map from '../images/map.png';
import swal from 'sweetalert';
import axios from 'axios';


export default function City() {
    let [input, setInput] = React.useState({
        name: "",
        email: "",
        message: "",
    });

    let [error , setError] = React.useState("");

    let handleChange = (e) => {
        setInput({...input, [e.target.name]: e.target.value})
    }

    let sendmail = async (name, mail, message) => {
        let res = await axios.post('http://localhost:3001/mail', {name: name, mail: mail, message: message})
        return res;
    }

   
    let handleSubmit = (e) => {
        e.preventDefault();
        if (input.email && input.message) {
            swal("Thank you!", "You send the messsage!", "success");
            sendmail(input.name, input.email, input.message);
        } else {
            setError("Email and message are required");
        }
    }

    return (
        <div className={style.container} id="contact" >
            <div className={style.containerh4}>
            <div className={style.h2} data-aos="fade-up"
            data-aos-offset="300"
             data-aos-easing="ease-in-sine">
            <h2>Contact</h2>    
            </div>
            <div className={style.containerform} data-aos="fade-up"
            data-aos-offset="300"
             data-aos-easing="ease-in-sine">
                <form onSubmit={(e) => handleSubmit(e)} >
                    <div className={style.form__group}>
                    <input type="input" className={style.form__field} placeholder="Name" name="name" id='name' required 
                    onChange={(e) => handleChange(e)}/>
                    <label for="name" className={style.form__label}>Name</label>
                    </div>
                    <div className={style.form__group}>
                    <input type="input" className={style.form__field} placeholder="Email" name="email" id='email' required
                    onChange={(e) => handleChange(e)}/>
                    <label for="email" className={style.form__label}>Email</label>
                    </div>
                    <div className={style.form__group}>
                    <textarea cols="5" rows="5" type="input" className={(error) ? style.form_error : style.form__field} placeholder="Message" name="message" id='message' required onChange={(e) => handleChange(e)} />
                    <label for="message" className={style.form__label}>Message</label>
                    </div>
                    <div className={style.containerbtn} >
                    <input className={style.buttons} type="submit" value="Send" ></input>
                    </div>

                </form>
            </div>

            </div>
            <div className={style.containerimg}>
                <div className={style.containerh4}>
                <div className={style.h2} data-aos="fade-up"
            data-aos-offset="300"
             data-aos-easing="ease-in-sine">
                    <h2>Location</h2>    
                </div >
                <img  className={style.imgmap} src={map} alt="Not found" data-aos="fade-up"
            data-aos-offset="300"
             data-aos-easing="ease-in-sine"></img>
                </div>
            </div>

        </div>
    );
}