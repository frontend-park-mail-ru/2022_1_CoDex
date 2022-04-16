export type urlsList = {
    api: api
}

export type statusList = {
    OK: number,
    AUTHORIZED: number,
    CREATED: number,
    NOT_FOUND: number,
    NO_BLOCKS: number,
    NOT_AUTHORIZED: number,
    NOT_ENTERED: number,
    ALREADY_EXIST: number,
    CONFLICT: number,
    FAILED_DEPENDENCY: number,
    SERVER_ERROR: number,
}

type api = {
    csrf: string,
    checkAuth: string,
    getUser: string,
    changeProfile: string,
    changeAvatar: string,
    bookmarks: string,
    reviews: string,
    logout: string,
    login: string,
    register: string,
    singleCollection: string,
    collections: string,
    movie: string,
    actor: string,
    sendRating: string,
    sendReviews: string,
}

export type routeList = {
    homePage: string,
    collectionsPage: string,
    singleCollectionPage: string,
    profilePage: string,
    loginPage: string,
    registrationPage: string,
    moviePage: string,
    actorPage: string,
}

export type headerLink = {
    href: string,
    title: string,
}

export type authInputs = {
    emailInput: input,
    surnameInput: input,
    nameInput: input,
    passwordInput: input,
    repeatePasswordInput: input
}

type input = {
    type: string,
    name: string,
    placeholder: string,
    title: string,
}