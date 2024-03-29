import React, { Component } from 'react'
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'



export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path= '/' component={Home}/>
            <Route path= '/about' component={About}/>
            <Route path= '/contact' component={Contact}/>
            <Route path='/:post_id' component={Post} />
          </Switch>
          
        </div>
      </Router>
      
    )
  }
}

export default App
