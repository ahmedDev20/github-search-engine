import React from "react";
import "./App.css";
import Users from "./components/Users";
import NavBar from "./components/NavBar";
import UserItem from "./components/UserItem";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="container mt-2">
          <Switch>
            <Route exact path="/users" component={Users} />
            <Route exact path="/users/:login" component={UserItem} />
            <Route exact component={Users} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
