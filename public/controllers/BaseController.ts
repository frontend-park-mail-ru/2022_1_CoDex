/* eslint-disable @typescript-eslint/no-unused-vars */

import { controllerItem } from "@/types";
import EventBus, { eventBus } from "@/modules/eventBus";
import { BaseView } from "@/views/BaseView/BaseView";
import { BaseModel } from "@/models/BaseModel";

/**
 * @description Базовый класс контроллера для MVC архитектуры.
 */
export class BaseController {
    protected eventBus: EventBus;
    protected events: controllerItem[];
    
    public view: BaseView;
    public model: BaseModel;

    constructor() { 
        this.eventBus = eventBus;
        this.events = [];
    }
    
    subscribe = () => {
        this.events.forEach((item) => this.eventBus.on(item.event, item.handler));
    }
    unsubscribe = () => {
        this.events.forEach((item) => this.eventBus.off(item.event, item.handler));
    }
}