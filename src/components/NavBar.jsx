import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);

  function Click(){
    setShowLinks(!showLinks);
  }
  
  return (
    <div className='navbar'>
        <div className="leftbar" id={showLinks?'Open':'Close'}>
            <img src={logo} alt=""/>
            <div className="hiddenLinks">
              <Link to="/">Home</Link>
              <Link to="/menu">Menu</Link>
              <Link to="/about">About us</Link>
              <Link to="/contact-us">Contact</Link>
            </div>
        </div>
        <div className="rightSide">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About us</Link>
            <Link to="/contact-us">Contact</Link>
        </div>
        <button onClick={Click}>
          <ReorderIcon />
        </button>
    </div>
  );
}

export default NavBar;
