import React, { Component, Fragment } from "react";
import "./style/App.css";
import MyLayout from "./components/MyLayout";
import Home from "./pages/Home";
import Cart from "./pages/cart";
import Mine from "./pages/Mine";
import { HashRouter as Router, Link, Route } from "react-router-dom";

class App extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Router>
          <Route path="/" exact render={props => ( <MyLayout {...props}><Home /></MyLayout>)}/>
          <Route path="/cart"render={props => ( <MyLayout {...props}><Cart /></MyLayout>)}/>
          <Route path="/mine"render={props => ( <MyLayout {...props}><Mine /></MyLayout>)}/>
        </Router>
      </Fragment>
    );
  }
}

export default App;
