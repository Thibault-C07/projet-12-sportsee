import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
import '../styles/Layout.css'

const Layout = () => {
  return (
    <React.StrictMode>
      <Header />
      <div className="container">
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </div>
    </React.StrictMode>
  )
}

export default Layout
