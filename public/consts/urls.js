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
        checkAuth: `${currentUrl}${versions.v1}/checkAuth`,
        getUser: `${currentUrl}${versions.v1}/user`,
        logout: `${currentUrl}${versions.v1}/logout`,
        login: `${currentUrl}${versions.v1}/login`,
        register: `${currentUrl}${versions.v1}/signup`,
        singleCollection: `${currentUrl}${versions.v1}/collections/collection`,
        collections: `${currentUrl}${versions.v1}/collections`,
        movie: `${currentUrl}${versions.v1}/movie`,
        getUser: `${currentUrl}${versions.v1}/TODO`,
        sendRating: `${currentUrl}${versions.v1}/TODO`,
    }
}
