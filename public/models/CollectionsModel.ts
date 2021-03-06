import EventBus from "@/modules/eventBus";
import { events } from "../consts/events";
import { statuses } from "../consts/statuses";
import { getCollections } from "../modules/connection";
import { BaseModel } from "./BaseModel";

/**
 * @description Класс модели подборок фильмов.
 */
export class CollectionsModel extends BaseModel {
    /**
     * @description Создаёт экземляр модели подборок фильмов.
     * @param { EventBus } eventBus Глобальная шина событий
     */
    constructor(eventBus: EventBus) {
        super(eventBus);
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
        ).catch((e) => {
            console.log("Unexpected error: ", e);
        });
    }
}
