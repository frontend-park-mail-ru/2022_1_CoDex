import EventBus from "@/modules/eventBus";
import { events } from "@/consts/events";
import { headerLinks } from "@/consts/header";
import { BaseModel } from "./BaseModel";

/**
 * @description Класс модели навигационной панели.
 */
export class HeaderModel extends BaseModel {
    /**
     * @description Создаёт экземпляр модели навигационной панели.
     * @param { EventBus } Глобальная шина событий
     */
    constructor(eventBus: EventBus) {
        super(eventBus);
    }

    /**
     * @description Определяет, какую кнопку в навигационной панели 
     * необходимо менять.
     * @param { string } URL URL, на который пользователь перейдёт.
     */
    compareURLWithPath = (URL: string) => {
        const activeURL = headerLinks.find((link) => link.href == URL);
        this.eventBus.emit(events.header.changeActiveButton, activeURL ? activeURL.href : null);
    }
}
