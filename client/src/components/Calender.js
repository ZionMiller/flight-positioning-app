import React, {useState} from 'react'



const Calender = () => {

    //set year, month, time
    // const [year, setYear] = useState("")
    // const [month, setMonth] = useState("")
    // const [time, setTime] = useState("")
//     const [myMonth, setMyMonth] = useState(currentDate);
//   const [myYear, setMyYear] = useState(currentDate);
//   const [myDay, setMyDay] = useState(currentDate);

    const [formData, setFormData] = useState({
        date: new Date()
      })

      const date = ""
    const handleSubmit = () =>{

        // date = input.month.value
        console.log(date)
    }

    //   const date = new Date(year, month, date)
    //   console.log(date)
    const handleChange = (e) => {
        setFormData({...formData,
            [e.target.name]: e.target.value
            })
    }
  return (
    <div>
     <form onClick={handleSubmit}>

        <input
            id="month"
            type="date"
            name="month"
            // value=
            // min= {new Date()}
            // max={new Date() + 365}
            // required pattern="\d{2}-\d{2}-\d{4}"
        >
        </input>
        <input type="submit" value="Date" />
     </form>

    </div>
  )
}

export default Calender