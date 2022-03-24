import { events } from "../consts/events.js";
import { statuses } from "../consts/statuses.js";
import { getCollections } from "../modules/connection.js";

/**
 * @description Класс модели подборок фильмов.
 */
export class CollectionsModel {
    /**
     * @description Создаёт экземляр модели подборок фильмов.
     * @param { EventBus } eventBus Глобальная шина событий
     */
    constructor(eventBus) {
        this.eventBus = eventBus;
    }

    /**
     * @description Получает информацию для контента страницы 
     * подборок.
     */
    getContent = () => {
        getCollections().then(
            (response) => {
                if (!response) {
                    this.eventBus.emit(events.app.errorPage);
                } if (response?.status === statuses.OK && response.parsedResponse) {
                    this.eventBus.emit(
                        events.collectionsPage.render.content, response.parsedResponse
                    );
                } else if (response?.status === statuses.NOT_FOUND) {
                    this.eventBus.emit(events.app.errorPageText, "Подборки не найдены :(");
                }
            }
        );
    }
}
