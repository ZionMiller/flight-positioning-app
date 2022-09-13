import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

const Login = ({updateUser}) => {

    //storing data from the form
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    //to display the errors
    const [errors, setErrors] = useState([])

    //gives you access to the history instance that you may use to navigate.
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormData(formData);
        console.log(formData)

        //make post request on submit
       fetch(`/login`,{
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      })
      .then(res => {
        if(res.ok){
            res.json().then(user => {
                updateUser(user)
                history.push(`/users/${user.id}`)
            })
        }else {
            res.json().then(json => setErrors(json.errors))
        }
    })

      //reset form
      setFormData({
        username: "",
        password: ""
      })
    }

    const handleChange = (e) => {
        setFormData({...formData,
            [e.target.name]: e.target.value
            })
    }


  return (
     <div>
        <h3>Sign in</h3>
        {errors? <div>{errors}</div>:null}
        <form onSubmit={handleSubmit}>
        <label >Username:</label><br></br>
        <input type="text" id="username" name="username" value ={formData.username}  onChange={handleChange}/><br></br>
        <label>Password:</label><br></br>
        <input type="password" id="password" name="password" value ={formData.password}  onChange={handleChange}/><br></br>
        <input type="submit" value="Log In"/>
        </form>
    </div>

  )
}

export default Login