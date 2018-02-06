import React, { Component } from 'react';
import Home from './Home/Home'
import People from './People/People'
import About from './About/About'
import {Route,Switch,Link} from 'react-router-dom'

const NotFound = () =>  <div>Not Found</div> ;

class App extends Component {
  render() {
    return (
      <div>
        This is App.js
        <nav>
          <Link to="/">Home</Link> 
          <Link to="/people">people</Link> 
          <Link to="/about">about</Link> 
          </nav>
        <Switch>
          <Route path="/people" component={People} />
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
      </Switch>    
      </div>
    );
  }
}

export default App;
