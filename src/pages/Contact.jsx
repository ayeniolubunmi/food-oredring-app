import React from 'react';
import '../styles/Contact.css';
import contactImage from '../assets/gujrati.jpeg';

const Contact = () => {
  return (
    <div className='contact'>
        <div className="leftSide" style={{backgroundImage: `url(${contactImage})`}}></div>
        <div className="rightSide">
            <h1>Contact us</h1>
            <form action="POST" className="contact-form">
                <label htmlFor="name">Name: </label>
                <input type="text" name='name' placeholder='Please enter your name'/>
                <label htmlFor="email">Email: </label>
                <input type="text" name='email' placeholder='Please enter your email address'/>
                <label htmlFor="text">Message: </label>
                <textarea name="message" id="" cols="30" rows="6" placeholder='Enter your message'></textarea>
                <button type='submit'>Submit</button>
            </form>
        </div>
    </div>
  );
}

export default Contact;
