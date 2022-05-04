import EventBus from "@/modules/eventBus";
import { events } from "../consts/events";
import { statuses } from "../consts/statuses";
import { getGenres } from "../modules/connection";
import { BaseModel } from "./BaseModel";

export class GenresModel extends BaseModel {
    constructor(eventBus: EventBus) {
        super(eventBus);
    }

    getContent = () => {
        getGenres().then(
            (response) => {
                if (!response) {
                    this.eventBus.emit(events.app.errorPage);
                } if (response?.status === statuses.OK && response.parsedResponse) {
                    this.eventBus.emit(
                        events.genresPage.render.content, response.parsedResponse
                    );
                } else if (response?.status === statuses.NOT_FOUND) {
                    this.eventBus.emit(events.app.errorPageText, "Жанры не найдены :(");
                }
            }
        ).catch((e) => {
            console.log("Unexpected error: ", e);
        });
    }
}
