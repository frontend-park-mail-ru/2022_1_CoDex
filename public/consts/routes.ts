import { routeList } from "@/types"

export const routes: routeList = {
    homePage: "/",
    collectionsPage: "/collections",
    singleCollectionPage: "/collections/\\d+",
    profilePage: "/profile",
    loginPage: "/login",
    registrationPage: "/register",
    moviePage: "/movies/\\d+",
    actorPage: "/actor/\\d+",
    genresPage: "/genres",
    singleGenrePage: "/genres/\\d+",
    premiersPage: "/permiers",
}

export const regularRoutes: routeList = {
    homePage: "^/$",
    collectionsPage: "^/collections$",    
    singleCollectionPage:"^/collections/\\d+$",    
    profilePage:"^/profile/\\d+$",
    loginPage:  "^/login",
    registrationPage: "^/register",
    moviePage:"^/movies/\\d+$",
    actorPage: "^/actors/\\d+$",
    genresPage: "^/genres$",
    singleGenrePage: "^/genres/\\d+$",
    premiersPage: "^/premiers$",
}
