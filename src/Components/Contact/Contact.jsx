import React from "react";
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
const Contact = () => {
   const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "3c0513ae-9083-4169-890a-819ead54adbf");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };


    return (
        <div id="contact" className="contact">
            <div className="contact-title">
                <h1>
                    Get in touch
                </h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>
                        let's talk
                    </h1>
                    <p>
                        I'm currently avalible to take on new projects ,so feel free to send me a message about anything that you want.
                    </p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" />
                            <p>
                                shubh386a@gmail.com
                            </p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" />
                            <p>
                                +91 8468000825
                            </p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" />
                            <p>
                                Lucknow , Uttar Pradesh , India
                            </p>
                        </div>
                    </div>
                    
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                        <label htmlFor="">Your Name</label>
                        <input type="text" placeholder="Enter Your name" name="name"/>
                        <label htmlFor="">Your Email</label>
                        <input type="email"placeholder="Enter your email"name="email" />
                        <label htmlFor="">Write your message here</label>
                        <textarea name="message" rows="8"placeholder="Enter your massage">
                        </textarea>
                        <button type="submit" className="contact-sumit">Submit now</button>
                    </form>
            </div>


        </div>
    )
}
export default Contact;