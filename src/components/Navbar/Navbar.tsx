import React from "react"
import './Navbar.css'
import { NavLink } from 'react-router-dom'

export const Navbar: React.FC = () => (
    <nav className="navbar">
    <div className="nav-wrapper green lighten-1">
      <a href="/" className="brand-logo">React + TS</a>
      <ul className="right hide-on-med-and-down">
        {/* <li><NavLink to="/" href="/">Список дел</NavLink></li>
        <li><NavLink to="/about" href="/">Информация</NavLink></li> */}

      </ul>
    </div>
  </nav>
)