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
    singleCollectionPage:"^/collections/\\d+$",    
    moviePage:"^/movies/\\d+$",
    loginPage:  "^/login",
    registrationPage: "^/register",
    actorPage: "^/actors/\\d+$",
    collectionsPage: "^/collections$",    
    homePage: "^/$",
}
