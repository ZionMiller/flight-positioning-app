import React from 'react'
import { Card, Button, Icon } from 'semantic-ui-react'


const MyFlightCard = ({favorite}) => {
    const {departing_from, destination, layovers, price, id} = favorite
    console.log(favorite)

  return (
    <>
    <br></br>
    <Card className="Card">
    <Card.Content>
    <Card.Header>Price: ${price}</Card.Header>
        <Icon name="ellipsis horizontal"></Icon>
        <p><strong>Departure: </strong> {departing_from}</p>
        <Icon name="arrow down"></Icon>
        <p><strong>Layovers: </strong> {layovers}</p>
        <Icon name="arrow down"></Icon>
        <p><strong>Destination: </strong> {destination}</p>
        <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Update Dates
          </Button>
          <Button basic color='red'>
            Remove Flight
          </Button>
        </div>
      </Card.Content>
        </Card.Content>
      </Card>
    </>
  )
}

export default MyFlightCard