import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FormHook from "./pages/formHook";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/formHook" component={FormHook} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
