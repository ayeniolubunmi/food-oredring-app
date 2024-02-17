import React from 'react';
import aboutImage from '../assets/masala.jpg';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about">
      <div className="aboutTop" style={{backgroundImage: `url(${aboutImage})`}}></div>
      <div className="aboutBottom">
        <h1>About us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Voluptates sed, voluptatibus reiciendis deleniti fugiat ut nesciunt repellat nobis 
          laboriosam doloremque provident vitae maiores quos? Ab sapiente magnam, ipsam, quisquam corporis assumenda nam repudiandae exercitationem enim reiciendis autem? Deserunt cumque magni ullam odio provident quis tempora unde quaerat ut molestiae. 
          Explicabo.
        </p>
      </div>
      
    </div>
  );
}

export default About;
