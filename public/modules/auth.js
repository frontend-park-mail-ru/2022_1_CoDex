import { events } from "../consts/events.js";
import { statuses } from "../consts/statuses.js";
import { eventBus} from "./eventBus.js";
import { checkAuth, getCurrentUser, logout } from "./connection.js";

/**
 * @description Класс авторизации
 */
class Auth {

    constructor(eventBus) {
        this.eventBus = eventBus;
        this.user = null;
        this.lastEvent = null;
        if (navigator.onLine) {
            console.log("server");
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
            console.log("1");

            if (!response) {
                return null;
            }
            console.log("2");
            console.log("2:", response.parsedResponse);
            if (response?.parsedResponse?.status == statuses.OK) {
                console.log("response?.parsedResponse?.status === statuses.OK", response.parsedResponse.id);

                return response.parsedResponse?.id;
            }
            window.localStorage.removeItem("user");
            this.eventBus.emit(events.auth.notLoggedIn);
            this.lastEvent = events.auth.notLoggedIn;
            console.log("3");
            return null;
        }).then((userID) => {
            if (userID) {
                console.log("if (userID)", userID);
                return getCurrentUser(userID);
            }
        }).then((response) => {
            if (!response) {
                return;
            }
            console.log("4");
            if (response?.status === statuses.OK) {
                console.log("response?.status === statuses.OK", response.parsedResponse);
                this.user = response.parsedResponse;
                console.log(this.user);
                if (this.user) {
                    window.localStorage.setItem("user", JSON.stringify(this.user));
                    this.eventBus.emit(events.auth.gotUser);
                    this.lastEvent = events.auth.gotUser;
                    //this.eventBus.emit(events.authPage.redirect);
                }
            }
            console.log("5");
        }).catch((e) => {
            console.log("6:",e);
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
        console.log(this.user);
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
        logout().then((response) => {
            if (!response) {
                this.eventBus.emit(events.app.errorPage);
            } else if (response.status === statuses.OK) {
                window.localStorage.removeItem("user");
                this.user = null;
                this.lastEvent = events.auth.logoutUser;
            }
        }).catch(() => {
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
