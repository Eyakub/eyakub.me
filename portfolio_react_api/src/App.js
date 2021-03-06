import React from 'react';
import About from './pages/About';
import Resume from './pages/Resume';
import NavBar from './components/Navbar/Navbar';
import { demo_data } from "./data/demo";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App p-3 lg:container mx-auto md:container md:mx-auto sm:container sm:mx-auto">
        {/* Narbar */}
        <NavBar />

        <Switch>
          {/* information body */}
          <Route exact path="/">
            <About info={demo_data} />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
        </Switch>
      </div>
    </Router >
  );
}

export default App;
