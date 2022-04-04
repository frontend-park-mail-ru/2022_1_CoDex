import {BaseView} from "../BaseView/BaseView.js";
import {getURLArguments} from '../../modules/router.js';
import { events } from "../../consts/events.js";
import moviePageContent from "../../components/movie/movie.pug";

/**
 * @description Класс представления страницы одного фильма
 */
export class MovieView extends BaseView {

    /**
     * @description Создаёт представление страницы одного фильма.
     * @param { EventBus } eventBus Глобальная шина событий
     * @param { Object } data Данные, необходимые для создания представления
    */
    constructor(eventBus, {data={}} = {}) {
        super(eventBus, data);
    }

    /**
     * @description Отправляет на глобальную шину событий событие отрисовки
     * контента страницы.
     */
    emitGetContent = () => {
        const URLArgs = getURLArguments(window.location.pathname, "/movie/:ID");
        this.eventBus.emit(events.moviePage.getContent, URLArgs);
    }

    renderContent = (data) => {
        // data: poster, title, rating, originalTitle, desctiption
        const template = moviePageContent(data);
        const content = document.querySelector(".content");
        if (content) {
            content.innerHTML = template;
            // TODO 
        } else {
            this.eventBus.emit(events.app.errorPage);
        }
    }

    renderRating = (movieID) => {
        // TODO
    }

    renderCollectionBlock = () => {
        // TODO
    }

    renderReviewSuccess = () => {
        // TODO
    }

    addSubmitReviewListener = (movieID) => {
        // TODO
    }

}