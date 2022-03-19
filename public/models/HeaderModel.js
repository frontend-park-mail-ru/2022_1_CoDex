import { events } from "../consts/events.js";
import { headerLinks } from "../consts/header.js";
import { BaseModel } from "./BaseModel.js";

/**
 * @description Класс модели навигационной панели.
 */
export class HeaderModel extends BaseModel {
    /**
     * @description Создаёт экземпляр модели навигационной панели.
     * @param { EventBus } Глобальная шина событий
     */
    constructor(eventBus) {
        super(eventBus);
    }

    /**
     * @description Определяет, какую кнопку в навигационной панели 
     * необходимо менять.
     * @param { string } URL URL, на который пользователь перейдёт.
     */
    compareURLWithPath = (URL) => {
        const activeURL = headerLinks.find((link) => link.href === URL);
        this.eventBus.emit(events.header.changeActiveButton, activeURL ? activeURL.href : null);
    }
}
