import React from 'react';
import "./assets/scss/global.scss"
import { renderRoutes } from "react-router-config"
import {
    HashRouter as Router,
    Switch,
} from "react-router-dom";
import {routes} from "./routers";

function App() {
  return (
      <Router>
          <Switch>
              {renderRoutes(routes)}
          </Switch>
      </Router>
  );
}

export default App;
