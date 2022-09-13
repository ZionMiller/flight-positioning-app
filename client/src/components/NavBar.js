import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <NavLink>
        <Link to="/">
            Landing Page
        </Link>
        <br></br>
        <Link to="search-flights">
            Search Flights
        </Link>
        <br></br>
        <Link to="my-flights">
            MyFlights 
        </Link>
    </NavLink>
  )
}

export default NavBar