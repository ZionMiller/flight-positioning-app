import React from 'react'
import FlightDetails from './FlightDetails'

const FlightsContainer = ({results}) => {
  return (
    <div>
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