import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Page404 from "./pages/Page404/Page404";
import "./utils/utility-classes.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="*" component={Page404} />
        </Switch>
      </div>
    );
  }
}

export default App;
