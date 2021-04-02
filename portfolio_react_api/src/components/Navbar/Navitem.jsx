import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ itemName, toLink, activec }) => {
  
  return (
    <NavLink id={itemName} exact={true} className="
      no-underline  
      text-blue-600
      uppercase
      tracking-wide 
      font-bold text-xs 
      py-3 mr-8" 
      to={toLink}
      activeClassName="active_navbar"
    >
      {itemName}
    </NavLink>
  )
}

export default NavItem;