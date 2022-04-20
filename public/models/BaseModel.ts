import EventBus from "@/modules/eventBus";

/**
 * @description Класс базовой модели.
 */
export class BaseModel {
    protected eventBus: EventBus;
    /**
     * @description Создаёт базовую модель.
     * @param { EventBus } eventBus Глобальная шина событий
     */
    constructor(eventBus: EventBus) {
        this.eventBus = eventBus;
    }
}