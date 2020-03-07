import React from 'react';
import "./assets/scss/global.scss"
import "./assets/scss/app.scss"

import {
    BrowserRouter as Router,
    Link,
    Route,
} from "react-router-dom";

import PublicPage from "./pages/public";
import LoginPage from "./pages/login";
import AccountsEntity from "./componments/accounts/entity";


function App() {
  return (
      <>
          <Router>

              <header className="header">
                  <Link to="/">Home</Link>
                  <Link to="/login">Login</Link>
              </header>

              <Route path="/" exact component={PublicPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/account/:id/statuses" component={AccountsEntity} />
          </Router>
      </>
  );
}

export default App;
