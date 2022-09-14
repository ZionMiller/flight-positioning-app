import React, {useState} from 'react'
// import Calender from './Calender'
import Calendar from 'react-calendar'

const SearchFLights = () => {

  //display results
  const [results, setResults] = useState(false)

  const [formData, setFormData] = useState({
    departing_from: "",
    destination: ""
  })
  const [value, onChange] = useState(new Date());

console.log(value)

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
    setFormData({...formData,
        [e.target.name]: e.target.value
        })
}

  return (
    <div>
      <h1>Flights</h1>
      <form onClick={handleSubmit}>
        <input type="text" id="departing_from" name="departing_from" placeholder='Departing' value ={formData.departing_from} onChange={handleChange}/>
        <input type="text" id="destination" name="destination" placeholder='Where to?' value ={formData.destination} onChange={handleChange}/>
       <Calendar onChange={onChange} value={value}/>
        <input type="submit" value="Search" />
      </form>

    </div>
  )
}

export default SearchFLights