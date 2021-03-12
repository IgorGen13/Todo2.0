import React from "react"
import './Navbar.css'
import { NavLink } from 'react-router-dom'

export const Navbar: React.FC = () => (
    <nav className="navbar">
    <div className="nav-wrapper deep-purple darken-4">
      <a href="/" className="brand-logo">Todo</a>
      <ul className="right hide-on-med-and-down">
        <li><NavLink to="/" href="/">Список дел</NavLink></li>
        <li><NavLink to="/about" href="/">Информация</NavLink></li>

      </ul>
    </div>
  </nav>
)