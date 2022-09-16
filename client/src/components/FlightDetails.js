import React, {useState, useEffect} from 'react'
import { Card, Button } from 'semantic-ui-react'
import MyFlights from './MyFlights';

const FlightDetails = ({result, currentUser }) => {
   const {departing_from, destination, layovers, price, id, favorite} = result
//    console.log(id)
//    console.log('currentUser:',currentUser.id)

const [isFavorite, setIsFavorite] = useState(favorite);

    // window.location.reload(false);

   const onFavoriteClick = (e) => {
        e.preventDefault()
        setIsFavorite((isFavorite) => (!isFavorite));
        // console.log(result.id)
        // console.log(id)

        // setIsFavorite(!isFavorite)

        
        fetch(`/available_flights/${id}`,{
            method: 'PATCH',
            headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
            },
            body: JSON.stringify({
                favorite: isFavorite
                // favorite: true
            })
        })

        // .then((res) => console.log(res))
        // .then(favorite = isFavorite)
        // .then(window.location.reload(false));

        console.log(isFavorite)
    }

    
    return (
        <Card className="Card">
        <Card.Content>
            <p><strong>Price:</strong> ${price}</p>
            <p><strong>Departing From:</strong> {departing_from}</p>
            <p><strong>Layovers: </strong> {layovers}</p>
            <p><strong>Destination: </strong> {destination}</p>
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
        </Card.Content>
      </Card>
  )
}

export default FlightDetails


// useEffect(()=> {

//     if (isFavorite === true) {
//         (
//             fetch(`/available_flights`,{
//                 method: 'POST',
//                 headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json"
//                 },
//                 body: JSON.stringify({
//                     id: result.id
//                 })
//             })
//         )
//     // } else if(isFavorite === false) {
//     //     fetch(`/available_flights/${result.id}`, {
//     //         method: "DELETE"
//     //     })
//     }
// }, [])