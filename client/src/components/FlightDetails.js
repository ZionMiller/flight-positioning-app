import React, {useState, useEffect} from 'react'
import MyFlights from './MyFlights';

const FlightDetails = ({result}) => {
   const {departing_from, destination, layovers, price, id} = result

   const [isFavorite, setIsFavorite] = useState(false);



   const onFavoriteClick = (e) => {

        setIsFavorite((isFavorite) => (!isFavorite));
        // makeRequest()

    }

    useEffect(()=> {

        if (isFavorite === true) {
            (
                fetch(`/available_flights`,{
                    method: 'POST',
                    headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                    },
                    body: JSON.stringify({
                        id: result.id
                    })
                })
            )
        } else if(isFavorite === false) {
            fetch(`/available_flights/${result.id}`, {
                method: "DELETE"
            })
        }
    }, [isFavorite])

  return (
    <>
        <div>
            <p><strong>Departing From:</strong> {departing_from}</p>
            <p><strong>Layovers: </strong> {layovers}</p>
            <p><strong>Destination: </strong> {destination}</p>
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