import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../assets/food.jpeg';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className='home' style={{backgroundImage: `url(${banner})`}}>
        <div className="headerContainer">
            <h1>Food coner</h1>
            <p>Order your delicious by a click</p>
            <Link to='/menu'>
                <button>
                    Order now
                </button>
            </Link>
        </div>      
    </div>
  );
}

export default Home;
