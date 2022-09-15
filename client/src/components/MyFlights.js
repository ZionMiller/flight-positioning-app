import React, {useState, useEffect} from 'react'
import MyFlightCard from './MyFlightCard';

const MyFlights = ({result}) => {
  const [favorites, setFavorites] = useState([]);

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
            {
              favorites.map((favorite)  => (
                <MyFlightCard favorite={favorite} />
              ))
            }
    </div>
  )
}

export default MyFlights