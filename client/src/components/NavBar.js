import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <Link to="/"><button>Landing Page</button></Link>
        <Link to="/search-flights"><button>Search Flights</button></Link>
        <Link to="/my-flights"><button>MyFlights </button></Link>
    </div>
  )
}

export default NavBar