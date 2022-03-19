import { BaseModel } from "./BaseModel.js";

/**
 * @description Класс модели страницы авторизации / регистрации.
 */
export class AuthModel extends BaseModel {
    /**
     * @description Создаёт экземпляр страницы авторизации / регистрации.
     * @param { EventBus } eventBus Глобальная шина данных
     */
    constructor(eventBus) {
        super(eventBus);
        this.errorMessages = new Map();
    }

    // TODO
}