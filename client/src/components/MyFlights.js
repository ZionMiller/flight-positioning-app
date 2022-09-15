import React, {useState, useEffect} from 'react'

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
        SOME TEST TEXT
    </div>
  )
}

export default MyFlights