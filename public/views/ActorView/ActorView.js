import { events } from "../../consts/events.js";
import { BaseView } from "../BaseView/BaseView.js";
import { getURLArguments } from "../../modules/router.js";
import { slider } from "../../utils/slider.js";
import actorPageContent from "../../components/actor/actor.pug";
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
        const URLArgs = getURLArguments(window.location.pathname, "/actors/:ID");
        this.eventBus.emit(events.actorPage.getContent, URLArgs);
    }

    /**
     * @description Отрисовывает контент страницы актёра.
     * @param { Object } Информация об актёре (от имени до фильмографии)
     */
    renderContent = (data) => {
        if (!data) { return; }
        this.actorID = data.actor.ID;
        const template = actorPageContent(data);
        const content = document.querySelector(".content");
        if (content) {
            content.innerHTML = template;
            slider("#related-slider");
        } else {
            this.eventBus.emit(events.app.errorPage);
        }
    }

}