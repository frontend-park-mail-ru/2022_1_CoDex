import { eventBus } from "../modules/eventBus.js";

/**
 * @description Базовый класс контроллера для MVC архитектуры.
 */
export class BaseController {
    /**
     * @description Создаёт базовый контроллер.
     * @param { function } view - Представление (view)
     * @param { function } model - Модель
     */
    constructor(view, model) {
        this.eventBus = eventBus;
        this.view = new view(eventBus);
        this.model = new model(eventBus);
        this.events = [];
    }

    subscribe = () => {
        this.events.forEach((item) => this.eventBus.on(item.event, item.handler));
    }
    unsubscribe = () => {
        this.events.forEach((item) => this.eventBus.off(item.event, item.handler));
    }
}