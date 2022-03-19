import { root } from "../../main.js";
import { loader } from "../../components/loader/loader.pug";
import { events } from "../../consts/events.js";
import { renderBaseView } from "../../utils/utils.js";

/**
 * @description Абстрактный класс базового представления.
 */
export class BaseView {

    /**
     * @description Создаёт базовое представление.
     * @param { EventBus } eventBus Глобальная шина событий
     */
    constructor(eventBus, {data = {}} = {}) {
        this._data = data;
        this.eventBus = eventBus;
    }

    emitGetContent = () => {};
    render = (routeData) => {
        this.routeData = routeData;
        const content = document.querySelector(".content");
        if (!content) {
            root.innerHTML = renderBaseView();
            this.eventBus.emit(events.header.render.header);
        } else {
            content.innerHTML = loader();
        }
        this.emitGetContent();
    }
}