import React, {useState, useEffect} from 'react'
import { Card, Button, Icon } from 'semantic-ui-react'
import MyFlights from './MyFlights';

const FlightDetails = ({result, currentUser }) => {
   const {departing_from, destination, layovers, price, id, favorite} = result

const [isFavorite, setIsFavorite] = useState(favorite);

   const onFavoriteClick = (e) => {
        e.preventDefault()
        setIsFavorite((isFavorite) => (!isFavorite));

        
        fetch(`/available_flights/${id}`,{
            method: 'PATCH',
            headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
            },
            body: JSON.stringify({
                favorite: !isFavorite
            })
        });

        console.log(isFavorite)
    }
    
    return (
        <Card className="Card">
        <Card.Content>
        <Card.Header>Price: ${price}</Card.Header>
            <Icon name="ellipsis horizontal"></Icon>
            <p><strong>Departure: </strong> {departing_from}</p>
            <Icon name="arrow down"></Icon>
            <p><strong>Layovers: </strong> {layovers}</p>
            <Icon name="arrow down"></Icon>
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
