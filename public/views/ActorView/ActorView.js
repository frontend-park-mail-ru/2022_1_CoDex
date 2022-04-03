import { events } from "../../consts/events.js";
import { BaseView } from "../BaseView/BaseView.js";

/**
 * @description Класс представления страницы актёра.
 */
export class ActorView extends BaseView {

    /**
     * @description Создаёт представление страницы актёра.
     * @param { EventBus } eventBus Глобальная шина событий
     * @param { Object } data Данные, необходимые для создания представления
    */
    constructor(eventBus, {data={}} = {}) {
        super(eventBus, data);
    }

    /**
     * @description Отправляет на глобальную шину событий событие отрисовки
     * контента страницы.
     */
     emitGetContent = () => {
        const URLArgs = getURLArguments(window.location.pathname, "/actor/:ID");
        this.eventBus.emit(events.actorPage.getContent, URLArgs);
    }

    renderContent = (data) => {
        // TODO
    }
}