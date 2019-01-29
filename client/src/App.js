import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Banner from "./pages/Banner";
import Games from "./pages/Games";
import Signup from "./pages/Signup";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    /* jshint ignore:start */
    <div>
    <Banner>A banner</Banner>
    <Router>
      <div>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/" component={Signup} />
          <Route exact path="/games" component={Games} />
          <Route exact path="/signup" component={Signup} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
    </div>
    /* jshint ignore:end */
  );
}

export default App;
