import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Predict from "./views/Predict";
import Login from "./views/Login";
import Create from "./views/Create";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/create' component={Create} />
          <Route path='/predict' component={Predict} />
          <Route path='/login' component={Login} />
          {/* <Route path='*' exact={true} component={Site404} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
