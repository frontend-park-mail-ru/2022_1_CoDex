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
    changePrivateSettings: string,
    changeTitleSettings: string,
    bookmarks: string,
    reviews: string,
    logout: string,
    login: string,
    register: string,
    singleBookmark: string,
    singleCollection: string,
    collections: string,
    movie: string,
    actor: string,
    sendRating: string,
    sendReviews: string,
    addMovieToBookmark: string,
    removeMovieFromBookmark: string,
    createBookmark: string,
    deleteBookmark: string,
    genres: string,
    singleGenre: string,
    premiers: string,
    announced: string,
    search: string,
}

export type routeList = {
    homePage: string,
    collectionsPage: string,
    singleBookmarkPage: string,
    singleCollectionPage: string,
    profilePage: string,
    loginPage: string,
    registrationPage: string,
    moviePage: string,
    actorPage: string,
    genresPage: string,
    singleGenrePage: string,
    premiersPage: string,
    announcedPage: string,
    search: string,
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

export type personalData = {
    username: string,
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
    controller: BaseController,
    data: null,
    URL: {
        URL: string,
        resourceID: number,
    }
}

export type controllerItem = {
    event: string,
    handler: callback,
}

export type actorData = {
    ID: string,
}

export type error = [{
    message: string,
    regexp: string,
}]

export type movie = {
    ID: string,
}

export type ratingRequest = {
    rating: string,
    movieId: string,
    userId: string,
}

export type userData = {
    ID: string,
    username: string,
    email: string,
    imgsrc: string,
}

export type profileUserData = {
    ID: string,
    username: string,
    email: string,
    imgsrc: string,
    isThisUser: boolean,
}

export type reviewRequest = {
    movieId: string,
    reviewText: string,
    reviewType: string,
    userId: string,
}

export type singleCollection = {
    ID: string,
}

export type singleBookmark = {
    ID: string,
}

export type singleGenre = {
    ID: string,
}

export type singleCollectionMovie = {
    ID: string,
    poster: string,
    title: string,
    rating: string,
    info: string,
    description: string,
}

export type actor = {
    ID: string,
    avatar: string,
    birthdate: string,
    birthplace: string,
    career: string,
    genres: string,
    height: string,
    name: string,
    originalName: string,
    total: string,
}

export type movieActor = {
    name: string,
    href: string,
}

export type movieInfo = {
    ID: string,
    budget: string,
    cast: movieActor[],
    country: string,
    description: string,
    director: string,
    duration: string,
    genre: string,
    gross: string,
    info: string,
    mainCast: string,
    motto: string,
    originalTitle: string,
    poster: string,
    rating: string,
    title: string,
    trailerHref: string,
    year: string,
}

export type relatedItem = {
    href: string,
    poster: string,
    title: string,
}

export type actorPageData = {
    actor: actor,
    movies: movieInfo[],
    related: relatedItem[],
}

export type authPageData = {
    authFormName: string,
    inputs: input[],
    login: boolean,
    submitButtonName: string,
}

export type review = {
    avatarSrc: string,
    content: string,
    date: string,
    rating: string,
    type: string,
    userID: string,
    username: string,
}

export type moviePageData = {
    movie: movieInfo,
    related: relatedItem[] | null,
    reviewex: string,
    reviews: review[],
    userrating: string,
    collectionsInfo: personalCollectionItem[],
}

export type personalCollectionItem = {
    collection: string,
    hasMovie: boolean,
    bookmarkId: number,
}

export type singleCollectionPageData = {
    description: string,
    movielist: movieInfo[],
    title: string,
}

export type singleBookmarkPageData = {
    ID: string,
    description: string,
    movielist: movieInfo[],
    title: string,
    public: boolean,
    userId: string,
    isThisUser: boolean,
}

export type filmsSearchData = {
    data: singleCollectionMovie[],
    isEmpty: boolean,
}

export type actorsSearchData = {
    data: relatedItem[],
    isEmpty: boolean,
}

export type ratingResponse = {
    newrating: string
}

export type reviewResponse = {
    review: review;
}

export type authcheckResponse = {
    status: string,
    ID: string
}

export type searchResponse = {
    actors: actorsSearchData,
    announced: {
        data: Object[],
        isEmpty: boolean,
    },
    bookmarks: {
        data: Object[],
        isEmpty: boolean,
    },
    genres: {
        data: Object[],
        isEmpty: boolean,
    },
    movies: filmsSearchData
    users: {
        data: Object[],
        isEmpty: boolean,
    },
}

export type callback = (...args: any[]) => void;

export type baseViewData = {
    headerLinks: headerLink[],
    imgsrc: string,
    userId: string,
    profileHref: string,
    userFromStorage: boolean,
}

export type bookmarkRequest = {
    movieId: string,
    bookmarkId: string,
}

export type bookmarkCreateRequest = {
    title: string,
    userId: string,
    public: boolean,
}

export type bookmarkDeleteRequest = {
    bookmarkId: string,
}
export type bookmarkChangePrivateRequest = {
    bookmarkId: string,
    private: boolean,
}

export type bookmarkChangeTitleRequest = {
    bookmarkId: string,
    title: string,
}

export type bookmarkResponse = {
    ID: string,
    title: string,
    public: boolean,
    imgSrc: string,
}

export type announcedResponse = {
    title: string,
    description: string,
    movielist: announcedResponseMovie[],
}

export type announcedData = {
    title: string,
    description: string,
    movielist: announcedMovie[]
}

export type announcedResponseMovie = {
    ID: string,
    date: string,
    title: string,
    poster: string,
}

export type announcedMovie = {
    ID: string,
    day: string,
    month: string,
    title: string,
    poster: string,
}