import React, {useState} from 'react'

const MyFlights = ({result}) => {
  const [favoritesList, setFavoritesList] = useState([]);


 //add items to favorites list
 function addToFavoritesList(result) {
  if(!favoritesList.includes(result)) {
    setFavoritesList([...favoritesList, result])
  }
}

 // remove items from favoritesList
 function removeFromFavoritesList(id) {
  setFavoritesList(favoritesList => favoritesList.filter((favoriteItem) => favoriteItem.id != id))
}

  return (
    <div>
        SOME TEST TEXT
    </div>
  )
}

export default MyFlights