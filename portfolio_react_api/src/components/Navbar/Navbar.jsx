import React from 'react';
import NavItem from './Navitem';
const NavBar = () => {
  return (
    <div className="grid grid-cols-1 justify-items-end mb-5">
      <div className="grid grid-cols-1 justify-items-end">
        <nav className="bg-white">
          <div className="-mb-px flex justify-center ">
            <NavItem itemName="Home" toLink="/" />
            <NavItem itemName="Resume" toLink="/resume" />
          </div>
        </nav>
      </div>
    </div>
  )
}

export default NavBar;