import {BaseView} from "../BaseView/BaseView.js";
import {getURLArguments} from '../../modules/router.js';
import { events } from "../../consts/events.js";
import moviePageContent from "../../components/movie/movie.pug";
import { slider } from "../../utils/slider.js";

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

    /**
     * @description Отрисовывает контент страницы фильма.
     * @param { Object } Информация о фильме (от названия до отзывов)
     */
    renderContent = (data) => {
        // data: poster, title, rating, originalTitle, desctiption
        if (!data) { return; }
        const template = moviePageContent(data);
        const content = document.querySelector(".content");
        if (content) {
            content.innerHTML = template;
            slider("#related-slider");
            this.renderRating(data.movie.ID);
            // TODO 
        } else {
            this.eventBus.emit(events.app.errorPage);
        }
    }

    renderRating = (movieID) => {
        const rating = document.querySelector(".stars");
        const ratingItems = document.querySelectorAll(".stars__item__single-star");
        rating.addEventListener("click", (e) => {
            e.preventDefault();
            const target = e.target;
            if (target.classList.contains("stars__item__single-star")) {
                removeClass(ratingItems, "current-active");
                target.classList.add("active", "current-active");
                const rating = {
                    myRating: target.getAttribute("rating"),
                };
                this.eventBus.emit(events.moviePage.sendRating, movieID, rating.myRating);
            }
        });

        rating.onmouseover = function(e) {
            const target = e.target;
            if (target.classList.contains("stars__item__single-star")) {
                removeClass(ratingItems, "active");
                target.classList.add("active");
                mouseOverActive(ratingItems);
            }
        }

        rating.onmouseout = function(e) {
            addClass(ratingItems, "active");
            mouseOutOfActive(ratingItems);
        }

        function removeClass(item, removableClass) {
            for (let i = 0, len=ratingItems.length; i < len; i++) {
                ratingItems[i].classList.remove(removableClass);
            }
        }

        function addClass(item, addbleClass) {
            for (let i = 0, len=ratingItems.length; i < len; i++) {
                ratingItems[i].classList.add(addbleClass);
            }
        }

        function mouseOverActive(items) {
            for (let i = 0, len=items.length; i < len; i++) {
                if (items[i].classList.contains("active")) {
                    break;
                } else {
                    items[i].classList.add("active");
                }
            }
        }

        function mouseOutOfActive(items) {
            for (let i = items.length - 1; i >= 0; i--) {
                if (items[i].classList.contains("current-active")) {
                    break;
                } else {
                    items[i].classList.remove("active");
                }
            }
        }


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