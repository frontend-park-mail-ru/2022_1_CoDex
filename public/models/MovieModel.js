import { events } from "../consts/events.js";
import { statuses } from "../consts/statuses.js";
import { authModule } from "../modules/auth.js";
import { getMovie, sendUserRating } from "../modules/connection.js";

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

    /**
     * @description Проверяет, авторизован пользователь или нет, если авторизован, 
     * то отправляет оценку пользователя на сервер.
     * @param { string } movieID ID текущего фильма
     * @param { number } rating Оценка пользователя
     */
    sendRating = (movieID, rating) => {
        console.log(movieID, rating);
        if (!movieID || !rating) { 
            this.eventBus.emit(events.app.errorPage);
            return; 
        }
        if (!authModule.user) {
            this.eventBus.emit(events.moviePage.askToLog, movieID);
            return;
        }
        sendUserRating(movieID, rating).then(
            (response) => {
                if (!response) { return; }
                if (response.status === statuses.OK) {
                    this.eventBus.emit(events.moviePage.ratingSuccess, rating, response.rating);
                }
            }
        );
    }

    sendReview = (inputsData = {}) => {
        // TODO
    }


    addCollection = (movieID, collectionID) => {
        // TODO
    }

    createCollection = (collection) => {
        // TODO
    }


}