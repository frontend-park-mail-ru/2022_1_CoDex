// eslint-disable-next-line no-unused-vars
const localUrl = 'http://localhost:3001';

// eslint-disable-next-line no-unused-vars
export const deployUrl = 'https://teamprojectkinopoisk.herokuapp.com';

export const currentUrl = localUrl;

export const urls = {
    api: {
        checkAuth: `${currentUrl}/api/v1/checkAuth`,
        getUser: `${currentUrl}/api/TODO`,
        logout: `${currentUrl}/api/v1/logout`,
    }
}