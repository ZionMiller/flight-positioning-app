import React, {useState, useEffect} from 'react'
import MyFlights from './MyFlights';

const FlightDetails = ({result}) => {
   const {departing_from, destination, layovers, price, id} = result

   const [isFavorite, setIsFavorite] = useState(false);


   const onFavoriteClick = () => {
        setIsFavorite((isFavorite) => (!isFavorite));
        makeRequest()

    }

    const makeRequest = () =>{

        console.log(isFavorite)
        console.log(result.id)

        //POST/ DELETE REQUEST based on if the item has been favorited
        {isFavorite ?
            (
                fetch(`/favorites`,{
                    method: 'POST',
                    headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                    },
                    body: JSON.stringify(result.id)
                })
            ) :  (
                fetch(`/favorites/${id}`, {
                method: "DELETE"
                })
            )
         }

        {
            <MyFlights result={result}/>
        }
    }



  return (
    <>
        <h2>Results</h2>
        <div>
            <p><strong>Departing From:</strong> {departing_from}</p>
            <p><strong>Destination: </strong> {destination}</p>
            <p><strong>Layovers: </strong> {layovers}</p>
            <p><strong>Price:</strong> ${price}</p>
            {isFavorite ? (
                <button
                    onClick = {onFavoriteClick}
                    className="emoji-button favorite active">★
                </button>
                    ) : (
                <button
                    onClick = {onFavoriteClick}
                    className="emoji-button favorite">☆
                </button>
            )}
        </div>

    </>
  )
}

export default FlightDetails