import { events } from "../consts/events";
import { getActor } from "../modules/connection";
import { statuses } from "../consts/statuses";
import { BaseModel } from "./BaseModel";
import EventBus from "@/modules/eventBus";
import { actorData } from "@/types";

/**
 * @description Класс модели страницы актёра.
 */
export class ActorModel extends BaseModel {
    /**
     * @description Создаёт модель страницы актёра.
     * @param { EventBus } eventBus Глобальная шина событий
     */
    constructor(eventBus: EventBus) {
        super(eventBus);
    }

    /**
     * @description Получает информацию для контента страницы 
     * актёра.
     * @param { object } actor Информация об актёре: 
     * имя, ID, фильмография...
     */
    getContent = (actor: actorData) => {
        if (!actor?.ID) {
            this.eventBus.emit(events.app.errorPage);
            return;
        }
        getActor(actor.ID)
        .then((response) => {
            if (!response || !response.status) {
                this.eventBus.emit(events.app.errorPage);
            } else if (response.status === statuses.OK && response.parsedResponse) {
                this.eventBus.emit(events.actorPage.render.content, response.parsedResponse);
            }
            if (response?.status === statuses.NOT_FOUND) {
                this.eventBus.emit(events.app.errorPageText, "Такого фильма нет :/");
            }
        })
        .catch((e) => {
            console.log("Unexpected error: ", e);
        });
    }
}