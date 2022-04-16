import { eventBus } from "./eventBus";
import { events } from "../consts/events";
import { routes } from "../consts/routes";
import { BaseController } from "@/controllers/BaseController";
import { pathData, routeParameters, routerData, URLData } from "@/types";

/**
 * @description Получает аргументы из URL-a.
 * @param { string } URL URL, в котором ищутся аргументы
 * @param { string } template Шаблон URL-а
 * @returns { object } Найденные аргументы
 */
export const getURLArguments = (URL: string, template: string) => {
    if (!template) {
        return {};
    }
    const splitURL: string[] = URL.split("/");
    return template.split("/").reduce(
        (args: any, propertyName: string, index: number) => {
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
    private routes: Set<routerData>;
    private page: HTMLElement;
    private currentController: BaseController | null;
    /**
     * @description Создаёт роутер.
     * @param { HTMLElement } page HTML страницы 
     */
    constructor(page: HTMLElement) {
        this.routes = new Set();
        this.page = page;
        this.currentController = null;
        eventBus.on(events.pathChanged, this.onPathChanged);
        eventBus.on(events.redirectBack, this.onRedirectBack);
        eventBus.on(events.redirectForward, this.onRedirectForward);

        if (page) {
            this.page.addEventListener("click",
                (e: Event) => {
                    const clickTarget = e.target as Element;
                    if (!clickTarget) { return; }
                    const closestLink = clickTarget.closest("a");
                    if (!closestLink || clickTarget.classList.contains("not-route") || 
                    closestLink?.classList.contains("not-route")) {
                        return;
                    }
                    e.preventDefault();
                    console.log("I hear");
                    let data = {
                        URL: closestLink.getAttribute("href"),
                    }
                    eventBus.emit(events.pathChanged, data);
                }
            );
        }
    }

    onPathChanged = (data: pathData) => {
        this.go(data.URL);
    }
    
    /**
     * @description Переходит на указанную страницу.
     */
    go = (URL = "/") => {
        const routeData = this.getURLData(URL);
        console.log(routeData);
        const data = {...routeData};
        if (this.currentController) {
            this.currentController.unsubscribe();
        }
        this.currentController = routeData.controller;
        if (!this.currentController) {
            eventBus.emit(events.app.errorPage);
            return;
        }
        this.currentController?.subscribe();
        
        if (!this.currentController) {
            URL = routes.homePage;
            this.currentController = this.getURLData(URL).controller;
        }
        if (window.location.pathname !== URL) {
            window.history.pushState(null, "", URL);
        }
        this.currentController?.view.render(data);
        eventBus.emit(events.router.go, URL);
    }
    
    /**
     * @description Получает информацию из URL-a.
     * @param { string } URL URL, на которые перешёл пользователь
     * @return { object } Информация об URL-е
     */
    getURLData = (URL: string) => {
        let targetController = null;
        const result: routeParameters = this.getParameters(URL);
        this.routes.forEach((route) => {
            const tmpResult = result.URL.match(route.URL);
            if (tmpResult) {
                targetController = route.controller;
            }
        });
        const URLData: URLData = {
            controller: targetController,
            data: result.data,
            URL: {
                URL: result.URL,
                resourceID: +(result.URLParameters ? result.URLParameters : 0),
            },
        };
        return URLData;
    };

    /**
     * @description Получает параметры из URL-a.
     * @param { string } currentURL URL, на который перешёл пользователь
     * @return { object } Параметры URL-а
     */
    getParameters = (currentURL: string = "/"): routeParameters => {
        const parsedURL = new URL(window.location.origin + currentURL);
        const URLParameters = null;
        const resultURL = parsedURL.pathname;
        const result: routeParameters = {
            URL: resultURL,
            URLParameters: URLParameters,
            data: null,
        }
        return result;
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
    register = (URL: string, controller: BaseController) => {
        const data: routerData = { URL: URL, controller: controller}

        this.routes.add(data);
        return this;
    }
}
