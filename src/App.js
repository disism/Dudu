import React from 'react';
import "./assets/scss/global.scss"
import "./assets/scss/app.scss"

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from "react-router-dom";

/***
 * Config Router
 */
import PublicPage from "./pages/public";
import LoginPage from "./pages/login";
import AccountsEntity from "./componments/accounts/entity";
import AuthPage from "./pages/auth";
import AccountsPage from "./pages/accounts";
import HomeFavourites from "./pages/home/favourites";
import HomePage from "./pages/home";
import Index from "./pages";
import HomeBookmarksComponent from "./componments/home/bookmarks";


function App() {
  return (
      <>
          <Router>

              <header className="header">
                  <Link to="/public">Public</Link>
                  <Link to="/login">Login</Link>
                  <Link to="/home/">Home</Link>
                  <Link to="/favourites">Favourites</Link>
                  <Link to="/bookmarks">Bookmarks</Link>
              </header>


              <Switch>
                  <Route path="/" exact component={Index} />
                  <Route path="/public" component={PublicPage} />
                  <Route path="/login" component={LoginPage} />
                  <Route path="/auth" component={AuthPage} />
                  <Route path="/accounts" component={AccountsPage}/>
                  <Route path="/home/" component={HomePage} />
                  <Route path="/favourites" component={HomeFavourites} />
                  <Route path="/bookmarks" component={HomeBookmarksComponent} />
                  {/* 设置动态 id 并传递给 AccountsEntity 组件 */}
                  <Route path="/account/:id/statuses" component={AccountsEntity} />
              </Switch>
              {/* 路由重定向 */}
              {/*<Redirect from="/" to="/public" />*/}
          </Router>
      </>
  );
}

export default App;
