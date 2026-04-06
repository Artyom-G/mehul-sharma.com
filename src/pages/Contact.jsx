import React from "react";
import './Contact.scss';
import box1 from './WLU-Hero.png';

export const Contact = () => {
    return (  
        <div className="contact">
           <div className="contact-2">
                <h1 className="contact-title">Contact me!</h1>
                <form>
                    <p className="prompt">Name:</p>
                    <input type="text" name="name" placeholder="Enter your name" required/>
                    <p className="prompt">Email Address:</p>
                    <input type="email" name="email" placeholder="Enter your email" required />
                    <p className="prompt">Message:</p>
                    <textarea className="big-box" name="message" rows="4" placeholder="Write your message here..." required></textarea>
                    <button className="send" type="submit">Send</button>
                </form>  
                <div className="pic">
                    <img src={box1} alt="LinkedIn" onClick={() => window.location.href="https://www.linkedin.com/in/mehul-sharma-2ba737299/" }/>
                    <img src={box1} alt="GitHub" onClick={() => window.location.href="https://www.linkedin.com/in/mehul-sharma-2ba737299/"}/>
                </div>
            </div>
        </div> 
    );
}