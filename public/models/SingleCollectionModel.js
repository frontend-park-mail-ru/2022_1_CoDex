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
        if (!collection?.ID) {
            this.eventBus.emit(events.app.errorPage);
            return;
        }
        getSingleCollection(collection.ID).then(
            (response) => {
                if (!response) {
                    this.eventBus.emit(events.app.errorPage);
                } if (response?.status === statuses.OK && response.parsedResponse) {
                    this.shortenMoviesDescription(response.parsedResponse.movieList);
                    this.eventBus.emit(
                        events.singleCollectionPage.render.content, response.parsedResponse
                    );
                } else if (response?.status === statuses.NOT_FOUND) {
                    this.eventBus.emit(events.app.errorPageText, "Такой подборки нет :(");
                }
            }
        );
    }

    /**
     * @description Укорачивает, если требуется, переданное описание фильма,
     * согласно максимальной длине краткого описания. В случае укорачивания
     * добавляет в конце описания "..."
     * @param { string } description Описание фильма
     * @return { string } Укороченное описание фильма
     */
    processDescription = (description) => {
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
     * @param { Object[] } movieList Массив данных о фильмах
     */
    shortenMoviesDescription = (movieList) => {
        for (const movie of movieList) {
            movie.description = this.processDescription(movie.description);
        }
    }
}