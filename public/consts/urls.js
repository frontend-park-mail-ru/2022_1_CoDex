// eslint-disable-next-line no-unused-vars
const localUrl = "http://localhost:3001";

// eslint-disable-next-line no-unused-vars
export const deployUrl = "https://teamprojectkinopoisk.herokuapp.com";

export const currentUrl = deployUrl;

const versions = {
    v1: "/api/v1",
}

export const urls = {
    api: {
        checkAuth: `${currentUrl}${versions.v1}/user/authcheck`,
        getUser: `${currentUrl}${versions.v1}/user`,
        //profile: `${currentUrl}${versions.v1}/user/getProfile`,
        changeProfile:`${currentUrl}${versions.v1}/user/update`,
        bookmarks: `${currentUrl}${versions.v1}/user/bookmarks`,
        reviews: `${currentUrl}${versions.v1}/user/getReviews`,
        logout: `${currentUrl}${versions.v1}/user/logout`,
        login: `${currentUrl}${versions.v1}/user/login`,
        register: `${currentUrl}${versions.v1}/user/signup`,
        singleCollection: `${currentUrl}${versions.v1}/collections`,
        collections: `${currentUrl}${versions.v1}/collections/feed`,
        movie: `${currentUrl}${versions.v1}/movies`,
        actor: `${currentUrl}${versions.v1}/actors`,
        sendRating: `${currentUrl}${versions.v1}/movies/postrating`,
        sendReviews: `${currentUrl}${versions.v1}/movies/postcomment`,
    }
}
