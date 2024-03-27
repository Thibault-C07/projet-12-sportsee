import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import '../styles/Header.css'

const Header = () => {
  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="logo SportSee" />
      </Link>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/">Profil</Link>
        </li>
        <li>
          <Link to="/">Réglages</Link>
        </li>
        <li>
          <Link to="/">Communauté</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
