import React, { Component } from "react";
import Dashboard from "./Dashboard";
import Navi from "../navi/Navi";
import { Route, Switch } from "react-router-dom";
import About from "../products/About";
import Home from "./Home";
import "./index.css";
import HowTo from "./HowTo"
import Footer from "../navi/Footer";

export default class App extends Component {
  render() {
    return (
      <div className="bg">
        <Navi />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/phones" component={Dashboard} />
          <Route exact path="/about" component={About} />
          <Route exact path="/howto" component={HowTo} />
        </Switch>
        
        <Footer />
      </div>
    );
  }
}
