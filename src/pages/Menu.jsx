import React from 'react';
import {Data} from '../data/data';
import MenuItem from '../components/MenuItem';
import '../styles/Menu.css';
const Menu = () => {
  return (
    <div className='menu'>
        <div className="menuTitle">
            <h1 className='menuTitle-heading'>Our Menu</h1>
            <div className="menuList">
                {Data.map((menuItem,key)=>{
                    return (
                        <MenuItem 
                            key={key} 
                            image={menuItem.image} 
                            name={menuItem.name} 
                            price={menuItem.price}
                        />
                    )
                })}
            </div>
        </div>
      
    </div>
  );
}
export default Menu;
