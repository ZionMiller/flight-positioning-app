import React from 'react'
import { Menu, Icon } from 'semantic-ui-react';
import { Link, useHistory } from 'react-router-dom'

const NavBar = ({currentUser, updateUser}) => {

  const history = useHistory()
   //make delete request
   const handleLogOut = () => {
    fetch('/logout',{
      method: "DELETE"
    })
    updateUser("")
    history.push('/login') // redirect user to home page after logging out
  };

  return (
    <>
      {currentUser ?
      <div>
        <Link to="/"><button>Landing Page</button></Link>
          <Link to="/search-flights"><button>Search Flights</button></Link>
          <Link to="/my-flights"><button>MyFlights </button></Link>
          <Link ><button onClick={handleLogOut}>Log Out </button></Link>
      </div>
      :
      <div>
        <Link to="/"><button>Landing Page</button></Link>
        <Link to="/login"><button>Log In</button></Link>
        <Link to="/signup"><button>Sign up</button></Link>
      </div>
      }
    </>
  )
}

export default NavBar