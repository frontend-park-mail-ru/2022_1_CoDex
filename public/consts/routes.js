export const routes = {
    homePage: "/",
    collectionsPage: "/collections",
    singleCollectionsPage: "/collections/\\d+",
    profilePage: "/profile",
    loginPage: "/login",
    registrationPage: "/reg",
}

export const regularRoutes = {
    homePage: "^/$",
    collectionsPage: "^/collections",    
    loginPage:  "^/login",
    registrationPage: "^/reg",
    singleCollectionPage:"^/collections/\\d+$",    
}