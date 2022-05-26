import EventBus from "@/modules/eventBus";
import { singleCollectionPageData } from "@/types";
import { events } from "../consts/events";
import { statuses } from "../consts/statuses";
import { getPremiers } from "../modules/connection";
import { BaseModel } from "./BaseModel";

/**
 * @description Класс модели одной подборки фильмов.
 */
export class PremiersModel extends BaseModel {
    /**
     * @description Создаёт экземляр модели одной подборки фильмов.
     * @param { EventBus } eventBus Глобальная шина событий
     */
    constructor(eventBus: EventBus) {
        super(eventBus);
    }

    getContent = () => {
        getPremiers().then(
            (response) => {
                if (!response) {
                    this.eventBus.emit(events.app.errorPage);
                } if (response?.status === statuses.OK && response.parsedResponse) {
                    const parsed = <singleCollectionPageData>response.parsedResponse;
                    this.eventBus.emit(
                        events.premiersPage.render.content, parsed
                    );
                } else if (response?.status === statuses.NOT_FOUND) {
                    this.eventBus.emit(events.app.errorPageText, "Премьер нет :(");
                }
            }
        ).catch((e) => {
            console.log("Unexpected premiersModel error: ", e);
        });
    }
}
