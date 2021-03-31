import React from 'react';
import NavItem from './Navitem';
const NavBar = () => {
    return (
      <div className="grid grid-cols-1 justify-items-end mb-5">
        {/* <div className="App p-3 lg:container mx-auto md:container md:mx-auto sm:container sm:mx-auto"> */}
          <div className="grid grid-cols-1 justify-items-end">
            <nav class="bg-white">
              <div class="-mb-px flex justify-center">
                <NavItem itemName="Home" toLink="/" />
                <NavItem itemName="Resume" toLink="/resume" />
              </div>
            </nav>
          </div>
        {/* </div> */}
      </div>
    )
}

export default NavBar;