import PublicPage from "./pages/public";
import AccountsEntity from "./componments/accounts";
import HomeFavourites from "./pages/favourites";
import HomeConversations from "./pages/conversations";
import HomeNotifications from "./pages/notifications";
import HomeBookmarks from "./pages/bookmarks";
import LoginPage from "./pages/login";
import Verification from "./componments/verification";
import Home from "./pages/home";
import SearchPage from "./pages/search";
import NotFound from "./pages/404";

export const routes = [
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
        path: "/home",
        component: Home,
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
    },
    {
        path: "/search",
        component: SearchPage
    },
    {
        component: NotFound
    }
]