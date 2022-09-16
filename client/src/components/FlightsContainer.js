import React from 'react'
import { Card } from "semantic-ui-react";

import FlightDetails from './FlightDetails'

const FlightsContainer = ({results, currentUser }) => {
  console.log("for_Garret:", results)
  return (
    <>
      <h2>Results</h2>
      <Card.Group itemsPerRow={3}>
    {
        results.map((result) => (
            <FlightDetails
            key={result.id}
            result = {result}
            currentUser ={currentUser}
            />
        ))
    }
    </Card.Group>
    </>
  )
}

export default FlightsContainer