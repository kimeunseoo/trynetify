import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <nav>
        <Link to="/" className="logo-nav">
          Git Explorer
        </Link>
        <div className="link-cont">
          <Link to="/">Repos</Link>
          <Link to="/users">Users</Link>
          <Link to="/search">Search</Link>
        </div>
      </nav>
      <Outlet /> 
    </div>
  )
}

export default Navbar