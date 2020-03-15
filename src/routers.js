import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

import PublicPage from "./pages/public";
import AccountsEntity from "./componments/accounts/entity";
import AccountsPage from "./pages/accounts";
import HomeFavourites from "./pages/home/favourites";
import HomePage from "./pages/home";
import HomeConversations from "./pages/home/conversations";
import HomeNotifications from "./pages/home/notifications";
import HomeBookmarks from "./pages/home/bookmarks";
import Verification from "./componments/verification";
import LoginPage from "./pages/login/login";



const routes = [
    {
        path: "/",
        exact: true,
        component: Verification
    },
    {
        path: "/public",
        component: PublicPage
    },
    {
        path: "/login",
        component: LoginPage
    },
    {
        path: "/accounts",
        component: AccountsPage
    },
    {
        path: "/home",
        component: HomePage,
    },
    {
        path: "/favourites",
        component: HomeFavourites
    },
    {
        path: "/bookmarks",
        component: HomeBookmarks
    },
    {
        path: "/conversations",
        component: HomeConversations
    },
    {
        path: "/notifications",
        component: HomeNotifications
    },
    {
        path: "/account/:id/statuses",
        component: AccountsEntity
    }
]


function Routers() {
    return (
        <Router>

            {routes.map((route, idx) => {
                const { path, exact, routes } = route;
                return (
                    <Route key={idx} path={path}
                        exact={exact}
                        render={(routeProps) => (
                            <route.component routes={routes} {...routeProps} />
                        )}
                    />
                );
            })}

        </Router>
    );
}

export default Routers
