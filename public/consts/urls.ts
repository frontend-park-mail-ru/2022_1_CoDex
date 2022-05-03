import { urlsList } from "../types";

// eslint-disable-next-line no-unused-vars
const localUrl = "http://localhost:3000";

// eslint-disable-next-line no-unused-vars
export const deployUrl = "https://park-akino.ru";

export const currentUrl = deployUrl;

const version = "/api/v1";

export const urls: urlsList = {
    api: {
        csrf: `${currentUrl}${version}/csrf`,
        checkAuth: `${currentUrl}${version}/authcheck`,
        getUser: `${currentUrl}${version}/user`,
        changeProfile:`${currentUrl}${version}/user/update`,
        changeAvatar:`${currentUrl}${version}/user/update/avatar`,
        bookmarks: `${currentUrl}${version}/user/bookmarks`,
        reviews: `${currentUrl}${version}/user/reviews`,
        logout: `${currentUrl}${version}/logout`,
        login: `${currentUrl}${version}/login`,
        register: `${currentUrl}${version}/signup`,
        singleBookmark: `${currentUrl}${version}/collections`,
        singleCollection: `${currentUrl}${version}/collections`,
        collections: `${currentUrl}${version}/collections/feed`,
        movie: `${currentUrl}${version}/movies`,
        actor: `${currentUrl}${version}/actors`,
        sendRating: `${currentUrl}${version}/ratings/set`,
        sendReviews: `${currentUrl}${version}/comments/set`,
        addMovieToBookmark: `${currentUrl}${version}/playlist/addMovie`, // TODO
        removeMovieFromBookmark: `${currentUrl}${version}/playlist/deleteMovie`, // TODO
        createBookmark: `${currentUrl}${version}/playlist/create`, 
        genres: `${currentUrl}${version}/genres`,
        singleGenre: `${currentUrl}${version}/genres`,
        premiers: `${currentUrl}${version}/announced`,
        announced: `${currentUrl}${version}/announced`,
        search: `${currentUrl}${version}/search`,
    }
}
