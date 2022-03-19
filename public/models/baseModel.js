/**
 * @description Класс базовой модели.
 */
export class BaseModel {
    /**
     * @description Создаёт базовую модель.
     * @param { EventBus } eventBus Глобальная шина событий
     */
    constructor(eventBus) {
        this.eventBus = eventBus;
    }
}