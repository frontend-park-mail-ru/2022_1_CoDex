import { events } from "../consts/events.js";
import { statuses } from "../consts/statuses.js";
import { eventBus} from "./eventBus.js";
import { checkAuth, getCurrentUser, logout } from "./connection.js";

/**
 * @description Класс авторизации
 */
class Auth {
    /**
     * @description Создаёт модуль авторизации.
     * @param { eventBus } Глобальная шина событий
     */
    constructor(eventBus) {
        this.eventBus = eventBus;
        this.user = null;
        this.lastEvent = null;
        if (navigator.onLine) {
            this.getUserFromServer();
        }
        this.eventBus.on(events.authPage.logRegSuccess, this.getUserFromSubmit);
        this.eventBus.on(events.header.logout, this.logoutUser);
        this.eventBus.on(events.profilePage.changedProfile, this.changeUser);
    }

    /**
     * @description Получает данные о пользователе с сервера,
     * запоминает. В случае успеха перенаправляет на следующую
     * страницу.
     */
    getUserFromServer = () => {
        checkAuth().then((response) => {
            if (!response) {
                return null;
            }
            if (response?.parsedResponse?.status == statuses.OK) {
                return response.parsedResponse?.ID;
            }
            window.localStorage.removeItem("user");
            this.eventBus.emit(events.auth.notLoggedIn);
            this.lastEvent = events.auth.notLoggedIn;
            return null;
        }).then((userID) => {
            if (userID) {
                return getCurrentUser(userID);
            }
        }).then((response) => {
            if (!response) {
                return;
            }
            if (response?.status === statuses.OK) {
                this.user = response.parsedResponse;
                if (this.user) {
                    window.localStorage.setItem("user", JSON.stringify(this.user));
                    this.eventBus.emit(events.auth.gotUser);
                    this.lastEvent = events.auth.gotUser;
                }
            }
        }).catch((e) => {
            this.eventBus.emit(events.app.errorPage);
        });
    };

    /**
     * @description Обрабатывает и записывает данные о пользователе, 
     * полученные из обработанного ответа с сервера.
     * @param { object } parsedResponse Обработанный ответ с сервера
     */
    getUserFromSubmit = (parsedResponse) => {
        if (!parsedResponse) {
            return;
        }
        this.user = parsedResponse;
        if (this.user) {
            window.localStorage.setItem("user", JSON.stringify(this.user));
            this.eventBus.emit(events.auth.gotUser);
            this.lastEvent = events.auth.gotUser;
        }
    };

    /**
     * @description Осуществляет выход пользователя из системы.
     */
    logoutUser = () => {
        console.log("Starting logout...");
        logout().then((response) => {
            if (!response) {
                this.eventBus.emit(events.app.errorPage);
            } else if (response.status === statuses.OK) {
                window.localStorage.removeItem("user");
                this.user = null;
                this.lastEvent = events.auth.logoutUser;
                console.log("Logout done!");
            }
        }).catch(() => {
            console.log("Something went wrong, logout fail");
            this.eventBus.emit(events.app.errorPage);
        });
    };

    /**
     * @description Заменяет данные о пользователе.
     * @param { string } user Новые данные о пользователе.
     */
    changeUser = (user) => {
        if (!user) {
            return;
        }
        this.user = user;
        window.localStorage.setItem("user", JSON.stringify(this.user));
        this.eventBus.emit(events.auth.changedUser);
    };
}

export const authModule = new Auth(eventBus);
