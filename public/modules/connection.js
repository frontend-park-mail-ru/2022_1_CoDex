import { statuses } from "../consts/statuses.js";
import { urls } from "../consts/urls.js";

/**
 * @description Отправляет асинхронный запрос на сервер.
 * @param { object } params Параметры для запроса
 * @returns { object } Статус и обработанный ответ
 */
export const sendRequest = async ({url, method, body} = {}) => {
    const response = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: body,
        mode: 'cors',
        credentials: 'include',
    });

    try {
        const parsedResponse = await response?.json();
        if (response.status !== statuses.OK) {
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
        method: 'GET',
        credentials: 'include',
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
        url: urls.api.getUser.concat(id),
        methd: 'GET',
        credentials: 'include',
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
        method: 'GET',
    };

    try {
        return await sendRequest(params);
    } catch (error) {
        return null;
    }
};