import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import './App.css';
import LandingPage from "./LandingPage";
import MyFlights from "./MyFlights"
import SearchFLights from "./SearchFlights"


function App() {
  return (
    <div className="app">
        <NavBar />
          <Switch>
          <Route path="/search-flights">
            <SearchFLights />
          </Route>
          <Route path="/my-flights">
            <MyFlights/>
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
          </Switch>
    </div>
  );
}

export default App;