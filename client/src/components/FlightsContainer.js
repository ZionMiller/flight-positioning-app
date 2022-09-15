import React from 'react'
import FlightDetails from './FlightDetails'

const FlightsContainer = ({results}) => {
  return (
    <div>
      <h2>Results</h2>
    {
        results.map((result) => (
            <FlightDetails
            key={result.id}
            result = {result}
            />
        ))
    }
    </div>
  )
}

export default FlightsContainer