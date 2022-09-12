import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route path="/">
            <h1>Testing</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;