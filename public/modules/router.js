import { eventBus } from "./eventBus.js";
import { events } from "../consts/events.js";
import { routes } from "../consts/routes.js";

/**
 * @description Получает аргументы из URL-a.
 * @param { string } URL URL, в котором ищутся аргументы
 * @param { string } template Шаблон URL-а
 * @returns { object } Найденные аргументы
 */
export const getURLArguments = (URL, template) => {
    if (!template) {
        return {};
    }
    const splitURL = URL.split("/");
    return template.split("/").reduce(
        (args, propertyName, index) => {
            if (propertyName.startsWith(":")) {
                args[propertyName.slice(1)] = splitURL[index];
            }
            return args;
        },
        {});
};

/**
 * @description Класс для роутера путей.
 */
export class Router {
    /**
     * @description Создаёт роутер.
     * @param { HTMLElement } page HTML страницы 
     */
    constructor(page) {
        this.routes = new Set();
        this.page = page;
        this.currentController = null;
        eventBus.on(events.pathChanged, this.onPathChanged);
        eventBus.on(events.redirectBack, this.onRedirectBack);
        eventBus.on(events.redirectForward, this.onRedirectForward);

        if (page) {
            this.page.addEventListener("click",
                (e) => {
                    const clickTarget = e.target;
                    const closestLink = e.target.closest("a");
                    if (!closestLink || clickTarget.matches("not-route") || 
                    closestLink?.matches("not-route")) {
                        return;
                    }
                    e.preventDefault();
                    const data = {...closestLink.dataset};
                    data.URL = closestLink.getAttribute("href");
                    eventBus.emit(events.pathChanged, data);
                }
            );
        }
    }

    onPathChanged = (data) => {
        this.go(data.URL);
    }
    
    /**
     * @description Переходит на указанную страницу.
     */
    go = (URL = "/") => {
        const routeData = this.getURLData(URL);
        const data = {...routeData};
        if (this.currentController) {
            this.currentController.unsubscribe();
        }
        this.currentController = routeData.constroller;
        if (!this.currentController) {
            eventBus.emit(events.app.errorPage);
            return;
        }
        this.currentController.subscribe();
        
        if (!this.currentController) {
            URL = routes.homePage;
            this.currentController = this.getURLData(URL).constroller;
        }
        if (window.location.pathname !== URL) {
            window.history.pushState(null, null, URL);
        }
        this.currentController.view.render(data);
        eventBus.emit(events.router.go);
    }
    
    /**
     * @description Получает информацию из URL-a.
     * @param { string } URL URL, на которые перешёл пользователь
     * @return { object } Информация об URL-е
     */
    getURLData = (URL) => {
        let targetController = null;
        const result = this.getParameters(URL);
        this.routes.forEach((route) => {
            const tmpResult = result.URL.match(route.URL);
            if (tmpResult) {
                targetController = route.controller;
            }
        });
        return {
            constroller: targetController,
            data: result.data,
            URL: {
                URL: result.URL,
                resourceID: +result.URLParameters,
            },
        };
    };

    /**
     * @description Получает параметры из URL-a.
     * @param { string } currentURL URL, на который перешёл пользователь
     * @return { object } Параметры URL-а
     */
    getParameters = (currentURL = "/") => {
        const parsedURL = new URL(window.location.origin + currentURL);
        const URLParameters = null;
        const resultURL = parsedURL.pathname;
        return {
            URL: resultURL,
            URLParameters: URLParameters,
        };
    };

    /**
     * @description Переключает на страницу назад.
     */
    onRedirectBack = () => {
        window.history.back();
    };

    /**
     * @description Переключает на страницу вперёд.
     */
    onRedirectForward = () => {
        window.history.forward();
    };

    /**
     * @description Запускает роутер и перенаправляет на необходимую 
     * страницу.
     */
    start = () => {
        window.addEventListener("popstate", () => {
            this.go(window.location.pathname + window.location.search);
        });
        this.go(window.location.pathname + window.location.search);
    };

    /**
     * @description Добавляет URL в роутер.
     * @param { string } URL Добавляемый URL
     * @param { BaseController } controller Контроллер для 
     * добавляемого URL-a
     * @return { object } Возвращает указатель на роутер
     */
    register = (URL, controller) => {
        this.routes.add({URL, controller});
        return this;
    }
}