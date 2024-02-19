import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/new">
                New Post
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/liked">
                Liked Post
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}


Navbar.protoTypes = {
  title : PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title : "blog post app"
}