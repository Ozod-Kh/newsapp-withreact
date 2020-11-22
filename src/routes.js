import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'
import Details from './Details'
const Routing = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/details" component={Details} />
    </Switch>
  </Router>
)

export default Routing