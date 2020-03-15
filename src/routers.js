import React from 'react';
import {
    HashRouter as Router,
    Route
} from "react-router-dom";

import PublicPage from "./pages";
import AccountsEntity from "./componments/accounts/entity";
import AccountsPage from "./pages/accounts";
import HomeFavourites from "./pages/favourites";
import HomePage from "./pages";
import HomeConversations from "./pages/conversations";
import HomeNotifications from "./pages/notifications";
import HomeBookmarks from "./pages/bookmarks";
import LoginPage from "./pages/login";
import Verification from "./componments/verification";



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
