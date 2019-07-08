import React, { Component } from 'react'
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'


export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route exact path= '/' component={Home}/>
          <Route path= '/about' component={About}/>
          <Route path= '/contact' component={Contact}/>
        </div>
      </Router>
      
    )
  }
}

export default App
