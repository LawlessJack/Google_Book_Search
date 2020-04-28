import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SaveBooks from "./Pages/SaveBooks";
import SearchBooks from "./Pages/SearchBooks";
import NoMatch from "./Pages/NoMatch";
import Nav from "./components/Nav";
import "./App.css"


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={SearchBooks} />
          <Route exact path="/saved" component={SaveBooks} />
          <Route exact path="/saved/:id" component={SaveBooks} />
          <Route component={NoMatch} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
