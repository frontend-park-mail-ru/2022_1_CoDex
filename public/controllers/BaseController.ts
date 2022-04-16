import { BaseModel } from "@/models/BaseModel";
import { controllerItem } from "@/types";
import { BaseView } from "@/views/BaseView/BaseView";
import EventBus, { eventBus } from "@/modules/eventBus";

/**
 * @description Базовый класс контроллера для MVC архитектуры.
 */
export class BaseController {
    protected eventBus: EventBus;
    protected events: controllerItem[];
    public model: any;
    public view: any;
    /**
     * @description Создаёт базовый контроллер.
     * @param { function } view - Представление (view)
     * @param { function } model - Модель
     */
    constructor(view: any, model: any) { 
        // Если any заменить на BaseView и BaseModel, то ошибка
        // "type has no construct signatures"
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