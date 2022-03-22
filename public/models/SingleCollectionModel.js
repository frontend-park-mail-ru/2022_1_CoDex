import { events } from "../consts/events.js";
import { statuses } from "../consts/statuses.js";
import { getSingleCollection } from "../modules/connection.js";

/**
 * @description Класс модели одной подборки фильмов.
 */
export class SingleCollectionModel {
    /**
     * @description Создаёт экземляр модели одной подборки фильмов.
     * @param { EventBus } eventBus Глобальная шина событий
     */
    constructor(eventBus) {
        this.eventBus = eventBus;
    }

    /**
     * @description Получает информацию для контента страницы 
     * одной подборки.
     * @param { object } collection Информация о подборке: 
     * название, ID
     */
    getContent = (collection) => {
        console.log("getContent");
        console.log(collection);
        if (!collection?.ID) {
            this.eventBus.emit(events.app.errorPage);
            return;
        }
        console.log("trying");
        getSingleCollection(collection.ID).then(
            (response) => {
                console.log("Response", response);
                if (!response) {
                    this.eventBus.emit(events.app.errorPage);
                } if (response?.status === statuses.OK && response.parsedResponse) {
                    this.eventBus.emit(
                        events.singleCollectionPage.render.content, response.parsedResponse
                    );
                } else if (response?.status === statuses.NOT_FOUND) {
                    this.eventBus.emit(events.app.errorPageText, "Такой подборки нет :(");
                }
            }
        );
    }
}