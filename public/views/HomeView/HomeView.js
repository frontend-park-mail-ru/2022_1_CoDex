import { events } from "../../consts/events.js";
import { BaseView } from "../BaseView/BaseView.js";

/**
 * @description Класс представления домашней страницы.
 */
export class HomeView extends BaseView {
    /**
     * @description Создаёт объект представления 
     * домашней страницы.
     * @param { EventBus } eventBus Глобальная шина событий
     * @param { object } data Данные для представления.
     */
    constructor(eventBus, {data = {}} = {}) {
        super(eventBus, data);
    }
}