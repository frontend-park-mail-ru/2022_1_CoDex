
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
        // TODO
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