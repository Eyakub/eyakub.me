import React from 'react';
import {Link} from 'react-router-dom';

const NavItem = ({itemName, toLink}) => {
    return (
      <Link class="
        no-underline 
        text-teal-dark 
        border-b-2 
        border-teal-dark uppercase 
        tracking-wide 
        font-bold text-xs 
        py-3 mr-8" to={toLink}>
          {itemName}
      </Link>
    )
}

export default NavItem;