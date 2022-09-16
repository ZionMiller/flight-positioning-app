import React from 'react'
import { Card, Button } from 'semantic-ui-react'


const MyFlightCard = ({favorite}) => {
    const {departing_from, destination, layovers, price, id} = favorite
    console.log(favorite)

  return (
    <>
    <br></br>
    <Card className="Card">
    <Card.Content>
        <p><strong>Departing From:</strong> {departing_from}</p>
        <p><strong>Layovers: </strong> {layovers}</p>
        <p><strong>Destination: </strong> {destination}</p>
        <p><strong>Price:</strong> ${price}</p>
        </Card.Content>
      </Card>
    </>
  )
}

export default MyFlightCard