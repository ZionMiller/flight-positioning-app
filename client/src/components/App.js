import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import './App.css';
import LandingPage from "./LandingPage";
import MyFlights from "./MyFlights"
import SearchFLights from "./SearchFlights"
import Login from "./Login";
import {useEffect, useState} from 'react';
import Signup from "./Signup";


function App() {

  const [currentUser, setCurrentUser] = useState("")
  const updateUser = (user) => setCurrentUser(user)
  const [results, setResults] = useState([])
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch(`/available_flights`)
    .then(res => res.json())
    .then(data => {
      setResults(data)
    })
    }, []);
  
    useEffect(() => {
      fetch(`/me`)
      .then(res => res.json())
      .then(person => {
        setCurrentUser(person)
      })
      }, []);  

  return (
    <div className="app">
        <NavBar currentUser ={currentUser} updateUser={updateUser}/>
          <Switch>
          <Route path="/search-flights">
            <SearchFLights results={results} currentUser ={currentUser}/>
          </Route>
          <Route path="/my-flights">
            <MyFlights favorites={favorites} setFavorites={setFavorites} />
          </Route>
          <Route path="/login">
            <Login updateUser={updateUser}/>
          </Route>
          <Route path="/signup">
            <Signup updateUser={updateUser}/>
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
          </Switch>
    </div>
  );
}

export default App;