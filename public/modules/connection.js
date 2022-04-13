import { statuses } from "../consts/statuses.js";
import { urls } from "../consts/urls.js";
import regeneratorRuntime from "regenerator-runtime";

/**
 * @description Отправляет асинхронный запрос на сервер.
 * @param { object } params Параметры для запроса
 * @returns { object } Статус и обработанный ответ
 */
export const sendRequest = async ({ url, method, body } = {}) => {
    const response = await fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json",
        },
        body: body,
        mode: "cors",
        credentials: "include",
    });

    try {
        const parsedResponse = await response?.json();
        if (response.status !== statuses.OK && response.status !== statuses.CREATED) {
            console.log("err");
            return null;
        }
        return {
            status: response.status,
            parsedResponse,
        };
    } catch {
        return {
            status: response.status,
        };
    }
};

/**
 * @description Проверяет, авторизован ли пользователь.
 * @returns { object } Ответ с сервера
 */
export const checkAuth = async () => {
    const params = {
        url: urls.api.checkAuth,
        method: "GET",
        credentials: "include",
    };

    try {
        return await sendRequest(params);
    } catch (error) {
        return null;
    }
};

/**
 * @description Получает данные о текущем пользователе посредством
 * запроса на сервер.
 * @param { string } id ID пользователя
 * @returns { object } Данные о текущем пользователе
 */
export const getCurrentUser = async (id) => {
    const params = {
        url: urls.api.getUser.concat('/').concat(id),
        methd: "GET",
        credentials: "include",
    };
    try {
        return await sendRequest(params);
    } catch (error) {
        return null;
    }
};

/**
 * @description Производит выход пользователя из системы.
 * @returns { object } Ответ с сервера
 */
export const logout = async () => {
    const params = {
        url: urls.api.logout,
        method: "POST",
    };

    try {
        return await sendRequest(params);
    } catch (error) {
        return null;
    }
};

/**
 * @description Производит авторизацию пользователя в системе.
 * @param { object } user Данные о пользователе
 * @returns { object } Ответ с сервера
 */
export const login = async (user) => {
    const params = {
        url: urls.api.login,
        method: "POST",
        body: JSON.stringify(user),
    };

    try {
        return await sendRequest(params);
    } catch (error) {
        return null;
    }
}

/**
 * @description Производит регистрацию пользователя в системе.
 * @param { object } user Данные о пользователе
 * @returns { object } Ответ с сервера
 */
export const register = async (user) => {
    const params = {
        url: urls.api.register,
        method: "POST",
        body: JSON.stringify(user),
    };

    try {
        return await sendRequest(params);
    } catch (error) {
        return null;
    }
};

/**
 * @description Получает с сервера данные о конкретной подборке фильмов.
 * @param { string } collectionID ID запрашиваемой подборки
 * @returns { object } Ответ с сервера
 */
export const getSingleCollection = async (collectionID) => {
    const params = {
        url: `${urls.api.singleCollection}/${collectionID}`,
        method: "GET",
    };

    try {
        return await sendRequest(params);
    } catch (error) {
        return null;
    }
}

/**
 * @description Получает с сервера данные о подборках фильмов.
 * @returns { object } Ответ с сервера
 */
export const getCollections = async () => {
    const params = {
        url: `${urls.api.collections}`,
        method: "GET",
    };

    try {
        return await sendRequest(params);
    } catch (error) {
        return null;
    }
}

/**
 * @description Получает с сервера данные о конкретной подборке фильмов.
 * @param { string } movieID ID запрашиваемой подборки
 * @returns { object } Ответ с сервера
 */
export const getMovie = async (movieID) => {
    const params = {
        url: `${urls.api.movie}/${movieID}`,
        method: "GET",
    };

    try {
        return await sendRequest(params);
    } catch (error) {
        return null;
    }
}

/**
 * @description Отправляет оценку фильма пользователем на сервер.
 * @param { string } rating Данные о рейтинге
 * @returns { object } Ответ с сервера
 */
export const sendUserRating = async (rating) => {
    const params = {
        url: `${urls.api.sendRating}`,
        method: "POST",
        body: JSON.stringify(rating),
    };

    try {
        return await sendRequest(params);
    } catch (error) {
        return null;
    }
};

/**
 * @description Отправляет оценку фильма пользователем на сервер.
 * @param { string } movieID Данные о пользователе
 * @param { number } rating Оставленная оценка
 * @returns { object } Ответ с сервера
 */
export const sendUserReview = async (review) => {
    const params = {
        url: `${urls.api.sendReviews}`,
        method: "POST",
        body: JSON.stringify(review),
    };

    try {
        return await sendRequest(params);
    } catch (error) {
        return null;
    }
};

/**
 * @description Получает с сервера данные о пользователе.
 * @param { string } id ID запрашиваемого пользователя
 * @returns { object } Ответ с сервера
 */
export const getProfile = async (id) => {
    const params = {
        url: `${urls.api.getUser}/${id}`,
        method: "GET",
        credentials: "include",
    };
    try {
        return await sendRequest(params);
    } catch (error) {
        return null;
    }
}

/**
 * @description Получает с сервера данные о подборка пользователя.
 * @param { string } id ID запрашиваемого пользователя
 * @returns { object } Ответ с сервера
 */
export const getBookmarks = async (id) => {
    const params = {
        url: `${urls.api.bookmarks}/${id}`,
        method: "GET",
        credentials: "include",
    };

    try {
        return await sendRequest(params);
    } catch (error) {
        return null;
    }
}

/**
 * @description Получает с сервера данные о оценках и отзывах пользователя.
 * @param { string } id ID запрашиваемого пользователя
 * @returns { object } Ответ с сервера
 */
export const getReview = async (id) => {
    const params = {
        url: `${urls.api.reviews}/${id}`,
        method: "GET",
        credentials: "include",
    };

    try {
        return await sendRequest(params);
    } catch (error) {
        return null;
    }
}

/**
 * @description Отправляет обновленные данные пользователя на сервер.
 * @param { string } userID ID пользователя
 * @param { object } personalData Новые данные
 * @returns { object } Ответ с сервера
 */
export const sendSettingsChanges = async (personalData, userID) => {
    const params = {
        url: `${urls.api.changeProfile}/${userID}`,
        method: "POST",
        body: JSON.stringify(personalData),
    };

    try {
        return await sendRequest(params);
    } catch (error) {
        return null;
    }
}
/**
 * @description Получает с сервера данные о конкретной подборке фильмов.
 * @param { string } actorID ID запрашиваемой подборки
 * @returns { object } Ответ с сервера
 */
export const getActor = async (actorID) => {
    const params = {
        url: `${urls.api.actor}/${actorID}`,
        method: "GET",
    };

    try {
        return await sendRequest(params);
    } catch (error) {
        return null;
    }
};

