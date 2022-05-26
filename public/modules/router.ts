import { eventBus } from "./eventBus";
import { events } from "../consts/events";
import { routes } from "../consts/routes";
import { BaseController } from "@/controllers/BaseController";
import { pathData, routerData } from "@/types";
import { AuthController } from "@/controllers/AuthController";
import { getURLData } from "@/utils/utils";

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
        (args: Record<string, string>, propertyName: string, index: number) => {
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
    private currentController: BaseController;
    /**
     * @description Создаёт роутер.
     * @param { HTMLElement } page HTML страницы 
     */
    constructor(page: HTMLElement) {
        this.routes = new Set();
        this.page = page;
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
                    const data = {
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
    /* eslint-disable @typescript-eslint/no-unsafe-member-access */
    /* eslint-disable @typescript-eslint/no-unsafe-call */
    go = (url = "/") => {
        const routeData = getURLData(url, this.routes);
        if (!routeData) { return;}
        const data: routerData = {
            URL: routeData.URL.URL,
            controller: routeData.controller
        };
        if (this.currentController) {
            this.currentController.unsubscribe();
        }
        let urlToGo = url;
        if (routeData.controller instanceof AuthController) {
            if (this.currentController instanceof AuthController) {
                const redirect = new URL(location.href).searchParams.get("redirect");
                if (redirect) {
                    urlToGo += `?redirect=${redirect}`;
                }
            } else {
                urlToGo += `?redirect=${location.pathname}`;
            }
        }
        this.currentController = routeData.controller;
        if (!this.currentController) {
            eventBus.emit(events.app.errorPage);
            return;
        }
        this.currentController?.subscribe();

        
        if (!this.currentController) {
            url = routes.homePage;
            const homeData = getURLData(url, this.routes);
            if (!homeData) { return; }
            this.currentController = homeData.controller;
        }
        if (window.location.pathname !== url) {
            window.history.pushState(null, "", urlToGo);
        }
        this.currentController?.view.render(data);
        eventBus.emit(events.router.go, url);
    }

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
