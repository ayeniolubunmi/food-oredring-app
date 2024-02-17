import React from 'react';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="socialMedia">
            <XIcon />
            <InstagramIcon />
            <FacebookIcon />
            <LinkedInIcon />
        </div>
        <p>&copy; 2024 Africandish.com</p>
    </div>
  );
}

export default Footer;
