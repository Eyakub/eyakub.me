import React from 'react';
import {NavLink} from 'react-router-dom';

const NavItem = ({itemName, toLink}) => {
    return (
      <NavLink className="
        no-underline 
        text-teal-dark 
        border-b-2
        border-transparent
        uppercase
        tracking-wide 
        font-bold text-xs 
        py-3 mr-8" to={toLink}
        activeClassName="border-teal-dark"
      >
          {itemName}
      </NavLink>
    )
}

export default NavItem;