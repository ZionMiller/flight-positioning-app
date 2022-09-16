import React, {useState, useEffect} from 'react'
import { Card } from "semantic-ui-react";
import MyFlightCard from './MyFlightCard';

const MyFlights = ({favorites, setFavorites}) => {
  // const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch(`/favorites`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setFavorites(data)
    })
    }, []);

  return (
    <div>
      <Card.Group itemsPerRow={3}>
            {
              favorites.map((favorite)  => (
                <MyFlightCard favorite={favorite} 
                />
              ))
            }
      </Card.Group>
    </div>
  )
}

export default MyFlights