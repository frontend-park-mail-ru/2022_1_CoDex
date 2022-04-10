export const routes = {
    homePage: "/",
    collectionsPage: "/collections",
    singleCollectionsPage: "/collections/\\d+",
    profilePage: "/profile",
    loginPage: "/login",
    registrationPage: "/register",
    moviePage: "/movies/\\d+",
    actorPage: "/actor/\\d+",
}

export const regularRoutes = {
    homePage: "^/$",
    collectionsPage: "^/collections$",    
    loginPage:  "^/login",
    registrationPage: "^/register",
    singleCollectionPage:"^/collections/\\d+$",    
    moviePage:"^/movies/\\d+$",
    actorPage: "^/actors/\\d+$",
}
