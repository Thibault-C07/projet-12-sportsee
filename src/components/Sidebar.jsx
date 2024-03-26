import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Sidebar.css'
import iconMeditation from '../assets/meditation.svg'
import iconSwimming from '../assets/swimming.svg'
import iconBike from '../assets/bike.svg'
import iconDumbbell from '../assets/dumbbell.svg'

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <nav className="sidebar">
        <div className="sidebar-nav">
          <Link to="/">
            <img src={iconMeditation} alt="Icone méditation" />
          </Link>
          <Link to="/">
            <img src={iconSwimming} alt="Icone natation" />
          </Link>
          <Link to="/">
            <img src={iconBike} alt="Icone vélo" />
          </Link>
          <Link to="/">
            <img src={iconDumbbell} alt="Icone haltère" />
          </Link>
        </div>
      </nav>
      <p className="text">Copyright, SportSee 2020</p>
    </div>
  )
}

export default Sidebar
