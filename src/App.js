import React from 'react'
import './App.css';
import Nav from './nav.js'
import About from './about.js'
import Shop from './shop.js'

import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
function App() {
  return (
    <Router>
       <div className="App">
        <Nav/>
        <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/shop" component={Shop}/>
      </div>
    </Router>
     
  );
}

const Home =()=>(
    <div>
    <h1> Home </h1>
  </div>
  
)
export default App;
