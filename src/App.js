import React from 'react';
import "./assets/scss/global.scss"
import "./assets/scss/app.scss"

import {
    BrowserRouter as Router,
    Link,
    Route,
} from "react-router-dom";

/***
 * Config Router
 */
import PublicPage from "./pages/public";
import LoginPage from "./pages/login";
import AccountsEntity from "./componments/accounts/entity";
import AuthPage from "./pages/auth";
import AccountsPage from "./pages/accounts";


function App() {
  return (
      <>
          <Router>

              <header className="header">
                  <Link to="/">Home</Link>
                  <Link to="/login">Login</Link>
                  <Link to="/accounts">Accounts</Link>
              </header>

              <Route path="/" exact component={PublicPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/auth" component={AuthPage} />
              <Route path="/accounts" component={AccountsPage}/>
              {/*设置动态 id 并传递给 AccountsEntity 组件*/}
              <Route path="/account/:id/statuses" component={AccountsEntity} />
          </Router>
      </>
  );
}

export default App;
