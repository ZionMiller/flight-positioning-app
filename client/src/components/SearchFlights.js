import React, {useState, useEffect} from 'react'
import Calendar from 'react-calendar'
import { Form, Button } from 'semantic-ui-react'
import 'react-calendar/dist/Calendar.css';
import FlightsContainer from './FlightsContainer';

const SearchFLights = ({results, currentUser, isFavorite, setIsFavorite }) => {

  //display results

  const [formData, setFormData] = useState({
    departing_from: "",
    destination: ""
  })
  const [value, onChange] = useState(new Date());


  const handleSubmit = (e) => {
    e.preventDefault()
    setFormData(formData);
    console.log(formData)

    //make post request for flights

    //reset form
    setFormData({
      departing_from: "",
      destination: ""
    })
    }

  const handleChange = (e) => {
    e.preventDefault()

    setFormData({...formData,
        [e.target.name]: e.target.value
        })
}
//change displayed results
const handleSearch  = () => {

}
  return (
    <div>
       <br></br>
        <Form>
        <Form.Group widths='equal' onClick={handleSubmit}>
        
        <Form.Input type="text" id="departing_from" name="departing_from" placeholder='Departing city' value ={formData.departing_from} onChange={handleChange}/>
        <Form.Input type="text" id="destination" name="destination" placeholder='Where to?' value ={formData.destination} onChange={handleChange}/>
        <Calendar align-items='center' onChange={onChange} value={value}/>
        <Button type="submit" value="Search"> Search Flights </Button>
        </Form.Group>
        </Form>
        
    
    <FlightsContainer results={results} currentUser ={currentUser}/>
    </div>
  )
}

export default SearchFLights