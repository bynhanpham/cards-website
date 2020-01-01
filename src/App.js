import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as Pages from "./pages/Index";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Pages.Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
