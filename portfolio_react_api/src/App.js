import React from 'react';
import About from './pages/About';

function App() {
  return (
    <div className="App p-3 container mx-auto md:container md:mx-auto sm:container sm:mx-auto">
      <div className="grid grid-cols-1 justify-items-end">
        <ul className="list-none inline">
          <li>About</li>
        </ul>
      </div>

      {/* information body */}
      <div className="mt-5 ">
        <About />
      </div>
    </div>);
}

export default App;
