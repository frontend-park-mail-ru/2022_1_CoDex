import EventBus from "@/modules/eventBus";
import { movie } from "@/types";
import { events } from "../consts/events";
import { statuses } from "../consts/statuses";
import { getAnnounced } from "../modules/connection";
import { BaseModel } from "./BaseModel";

export class AnnouncedModel extends BaseModel {
    /**
     * @description Создаёт модель страницы одного фильма.
     * @param { EventBus } eventBus Глобальная шина событий
     */
    constructor(eventBus: EventBus) {
        super(eventBus);
    }

    /**
     * @description Получает информацию для контента страницы 
     * одного фильма.
     * @param { object } movie Информация о подборке: 
     * название, ID, похожие фильмы...
     */
    getContent = (movie: movie) => {
        if (!movie?.ID) {
            this.eventBus.emit(events.app.errorPage);
            return;
        }
        getAnnounced(movie.ID)
        .then((response) => {
            if (!response || !response.status) {
                this.eventBus.emit(events.app.errorPage);
            } else if (response.status === statuses.OK && response.parsedResponse) {
                this.eventBus.emit(events.announcedPage.render.content, response.parsedResponse);
            }
            if (response?.status === statuses.NOT_FOUND) {
                this.eventBus.emit(events.app.errorPageText, "Такого фильма нет :/");
            }
        }).catch((e) => {
            console.log("Unexpected error: ", e);
        });
    }
}