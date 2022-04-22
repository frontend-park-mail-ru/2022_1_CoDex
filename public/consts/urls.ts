import { urlsList } from "../types";

// eslint-disable-next-line no-unused-vars
const localUrl = "http://localhost:3000";

// eslint-disable-next-line no-unused-vars
export const deployUrl = "https://park-akino.ru";
//https://teamprojectkinopoisk.herokuapp.com

export const currentUrl = localUrl;

const version = "/api/v1";

export const urls: urlsList = {
    api: {
        csrf: `${currentUrl}${version}/csrf`,
        checkAuth: `${currentUrl}${version}/user/authcheck`,
        getUser: `${currentUrl}${version}/user`,
        changeProfile:`${currentUrl}${version}/user/update`,
        changeAvatar:`${currentUrl}${version}/user/update/avatar`,
        bookmarks: `${currentUrl}${version}/user/bookmarks`,
        reviews: `${currentUrl}${version}/user/reviews`,
        logout: `${currentUrl}${version}/user/logout`,
        login: `${currentUrl}${version}/user/login`,
        register: `${currentUrl}${version}/user/signup`,
        singleCollection: `${currentUrl}${version}/collections`,
        collections: `${currentUrl}${version}/collections/feed`,
        movie: `${currentUrl}${version}/movies`,
        actor: `${currentUrl}${version}/actors`,
        sendRating: `${currentUrl}${version}/movies/postrating`,
        sendReviews: `${currentUrl}${version}/movies/postcomment`,
        addMovieToBookmark: `${currentUrl}${version}/addMovieToBookmark`, // TODO
        removeMovieFromBookmark: `${currentUrl}${version}/removeMovieFromBookmark`, // TODO
        createBookmark: `${currentUrl}${version}/createBookmark`, // TODO
    }
}
