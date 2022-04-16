import { authConfig } from "./consts/authConfig"
import { BaseController } from "./controllers/BaseController"

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

export type input = {
    type: string,
    name: string,
    placeholder: string,
    title: string,
}

export type requestParams = {
    url: string,
    method: string,
    credentials: string | null,
    body: string | null,
}

export type loginData = {
    email: string,
    password: string,
}

export type registerData = {
    email: string,
    password: string,
    repeatpassword: string,
    username: string,
}

export type review = {
    movieid: string,
    reviewText: string,
    reviewType: string,
    userId: string,
}

export type personalData = {
    name: string,
}

export type requestParamsData = {
    url: string,
    method: string,
    credentials: string | null,
    body: FormData | null,
}

export type pathData = {
    URL: string,
}

export type routerData = {
    URL: string,
    controller: BaseController,
}

export type routeParameters = {
    URL: string,
    URLParameters: null;
    data: null
}

export type URLData = {
    controller: BaseController | null,
    data: null,
    URL: {
        URL: string,
        resourceID: number,
    }
}

export type controllerItem = {
    event: string,
    handler: Function,
}

export type actorData = {
    ID: string,
}

export type error = [{
    message: string,
    regexp: string,
}]
