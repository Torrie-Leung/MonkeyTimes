import React from 'react'

const Nav = () => {
  return(
    <nav className="nav-wrapper green darken-3">
      <div className="container">
        <a className="brand-logo">MonkeyTimes</a>
        <ul className="right">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav