import { events } from "../consts/events.js";
import { statuses } from "../consts/statuses.js";
import { getMovie } from "../modules/connection.js";

/**
 * @description Класс модели страницы одного фильма.
 */
export class MovieModel {
    /**
     * @description Создаёт модель страницы одного фильма.
     * @param { EventBus } eventBus Глобальная шина событий
     */
    constructor(eventBus) {
        this.eventBus = eventBus;
    }

    getContent = (movie) => {
        if (!movie?.ID) {
            this.eventBus.emit(events.app.errorPage);
            return;
        }
        getMovie(movie.ID)
        .then((response) => {
            if (!response || !response.status) {
                this.eventBus.emit(events.app.errorPage);
            } else if (response.status === statuses.OK && response.parsedResponse) {
                this.eventBus.emit(events.moviePage.render.content, response.parsedResponse);
            }
            if (response.status === statuses.NOT_FOUND) {
                this.eventBus.emit(events.app.errorPageText, "Такого фильма нет :/");
            }
        });
    }

    sendReview = (inputsData = {}) => {
        // TODO
    }

    sendRating = (movieID, rating) => {
        // TODO
    }

    addCollection = (movieID, collectionID) => {
        // TODO
    }

    createCollection = (collection) => {
        // TODO
    }


}