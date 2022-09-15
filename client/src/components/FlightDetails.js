import React from 'react'

const FlightDetails = ({result}) => {
   const {departing_from, destination, layovers, price} = result

  return (
    <>
        <h2>Results</h2>
        <div>
            <p><strong>Departing From:</strong> {departing_from}</p>
            <p><strong>Destination: </strong> {destination}</p>
            <p><strong>Layovers: </strong> {layovers}</p>
            <p><strong>Price:</strong> ${price}</p>
        </div>
    </>
  )
}

export default FlightDetails