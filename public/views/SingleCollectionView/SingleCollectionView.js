import { events } from "../../consts/events.js";
import { getURLArguments } from "../../modules/router.js";
import { BaseView } from "../BaseView/BaseView.js";
import singleCollectionContent from "../../components/singleCollection/singleCollection.pug";

/**
 * @description Класс представления страницы одной подборки.
 */
export class SingleCollectionView extends BaseView {
    /**
     * @description Создаёт представление страницы одной подборки.
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
        const URLArgs = getURLArguments(window.location.pathname, '/collections/:ID');
        this.eventBus.emit(events.singleCollectionPage.getContent, URLArgs);
    }

    /**
     * @description Отрисовывает контент страницы одной подборки.
     * @param { Object } data Данные для отрисовки контента подборки фильмов:
     * название подборки, даннные о фильмах
     */
    renderContent = (data) => {
        const template = singleCollectionContent(data);
        this.moviesData = data;
        const content = document.querySelector(".content");
        if (content) {
            content.innerHTML = template;
        } else {
            this.eventBus.emit(events.app.errorPage);
        }
    }
}