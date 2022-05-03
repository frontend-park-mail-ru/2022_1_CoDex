import EventBus from "@/modules/eventBus";
import { singleBookmark, singleCollectionMovie, singleBookmarkPageData } from "@/types";
import { events } from "../consts/events";
import { statuses } from "../consts/statuses";
import { getSingleBookmark } from "../modules/connection";
import { BaseModel } from "./BaseModel";

/**
 * @description Класс модели одной закладки.
 */
export class SingleBookmarkModel extends BaseModel {
    /**
     * @description Создаёт экземляр модели одной закладки.
     * @param { EventBus } eventBus Глобальная шина событий
     */
    constructor(eventBus: EventBus) {
        super(eventBus);
    }

    /**
     * @description Получает информацию для контента страницы 
     * одной закладки.
     * @param { object } bookmark Информация о закладке: 
     * название, ID
     */
    getContent = (bookmark: singleBookmark) => {
        console.log("getContent from bookmark")
        if (!bookmark?.ID) {
            this.eventBus.emit(events.app.errorPage);
            return;
        }
        getSingleBookmark(bookmark.ID).then(
            (response) => {
                if (!response) {
                    this.eventBus.emit(events.app.errorPage);
                } if (response?.status === statuses.OK && response.parsedResponse) {
                    const parsed = <singleBookmarkPageData>response.parsedResponse;
                    this.shortenMoviesDescription(parsed.movielist);
                    this.eventBus.emit(
                        events.singleBookmarkPage.render.content, response.parsedResponse
                    );
                } else if (response?.status === statuses.NOT_FOUND) {
                    this.eventBus.emit(events.app.errorPageText, "Такой подборки нет :(");
                }
            }
        ).catch((e) => {
            console.log("Unexpected singleCollection error: ", e);
        });
    }

    /**
     * @description Укорачивает, если требуется, переданное описание фильма,
     * согласно максимальной длине краткого описания. В случае укорачивания
     * добавляет в конце описания "..."
     * @param { string } description Описание фильма
     * @return { string } Укороченное описание фильма
     */
    processDescription = (description: string) => {
        const maxMovieShortDescriptionLength = 190;
        if (description.length < maxMovieShortDescriptionLength) {
            return description;
        }
        return description.slice(0, description.slice(
            0, maxMovieShortDescriptionLength).
            lastIndexOf(" ")) + "...";
    }

    /**
     * @description По необходимости укорачивает описания фильмов.
     * @param { Object[] } movielist Массив данных о фильмах
     */
    shortenMoviesDescription = (movielist: singleCollectionMovie[]) => {
        for (const movie of movielist) {
            movie.description = this.processDescription(movie.description);
        }
    }
}
