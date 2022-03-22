export const routes = {
    homePage: "/",
    collectionsPage: "/collections",
    singleCollectionsPage: "/collections/\\d+",
    profilePage: "/profile",
}

export const regularRoutes = {
    homePage: "^/$",
    collectionsPage: "^/collections",    
    authPage:  "^/login$",
    singleCollectionPage:"^/collections/\\d+$",    
}