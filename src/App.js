import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav.js'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/Contact' component={Contact} />
          <Route component={Home} />
        </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
