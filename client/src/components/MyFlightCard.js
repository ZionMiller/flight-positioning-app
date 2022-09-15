import React from 'react'

const MyFlightCard = ({favorite}) => {
    const {departing_from, destination, layovers, price, id} = favorite

  return (
    <div>
        <p><strong>Departing From:</strong> {departing_from}</p>
        <p><strong>Layovers: </strong> {layovers}</p>
        <p><strong>Destination: </strong> {destination}</p>
        <p><strong>Price:</strong> ${price}</p>
    </div>
  )
}

export default MyFlightCard