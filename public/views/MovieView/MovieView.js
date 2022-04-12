import {BaseView} from "../BaseView/BaseView.js";
import {getURLArguments} from '../../modules/router.js';
import { authModule } from "../../modules/auth.js";
import { slider } from "../../utils/slider.js";
import { events } from "../../consts/events.js";
import moviePageContent from "../../components/movie/movie.pug";
import reviewInvitation from "../../components/reviewInvitation/reviewInvitation.pug";
import reviewInputBlock from "../../components/reviewInputBlock/reviewInputBlock.pug";
import reviewSuccessBlock from "../../components/reviewSuccessBlock/reviewSuccessBlock.pug";
import createReviewCard from "../../components/reviewCard/createReviewCard.pug";
import { createElementFromHTML } from "../../utils/utils.js";

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
        const URLArgs = getURLArguments(window.location.pathname, "/movies/:ID");
        this.eventBus.emit(events.moviePage.getContent, URLArgs);
    }

    /**
     * @description Отрисовывает контент страницы фильма.
     * @param { Object } Информация о фильме (от названия до отзывов)
     */
    renderContent = (data) => {
        // data: poster, title, rating, originalTitle, desctiption
        if (!data) { return; }
        this.movieID = data.movie.ID;
        const template = moviePageContent(data);
        const content = document.querySelector(".content");
        if (content) {
            content.innerHTML = template;
            slider("#related-slider");
            this.renderRating(data.movie.ID);
            this.renderReviewInput(data.movie.ID);
            if (data.reviewex != "")
                this.eventBus.emit(events.moviePage.reviewSuccess);
            if (data.userrating != "")
                this.eventBus.emit(events.moviePage.ratingSuccess, data.userrating, data.movie.rating);
        } else {
            this.eventBus.emit(events.app.errorPage);
        }
    }

    /**
     * @description Отрисовывает панель рейтинга и навешивает все необходимые 
     * обработчики (для динамического изменения рейтинга).
     * @param { string } movieID ID текущего фильма
     */
    renderRating = (movieID) => {
        const rating = document.querySelector(".stars");
        const ratingItems = document.querySelectorAll(".stars__item__single-star");
        rating.addEventListener("click", (e) => {
            if (!authModule)
            e.preventDefault();
            const target = e.target;
            if (target.classList.contains("stars__item__single-star")) {
                removeClass(ratingItems, "current-active");
                target.classList.add("active", "current-active");
                const rating = {
                    myRating: target.getAttribute("rating"),
                    ID: authModule?.ID,
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

    /**
     * @description Выводит сообщение о просьбе зарегистрироваться.
     * @param { string } movieID ID текущего фильма.
     */
    askToLog = (movieID) => {
        const messageArea = document.querySelector(".user-rating");
        messageArea.innerHTML = `
        Чтобы поставить оценку, пожалуйста, 
        <a href= /register?redirect=movie/${movieID} class = "white_text"">
        зарегистрируйтесь</a>`;

    }

    /**
     * @description Отображает оставленную пользователем оценку, 
     * обновляет глобальную оценку.
     * @param { string } myRating Оставленная оценка
     * @param { string } movieRating Глобальная оценка фильма
     */
    onRatingSuccess = (myRating, movieRating) => {
        const messageArea = document.querySelector(".user-rating");
        messageArea.innerHTML = `Ваша оценка: ${myRating}. Рейтинг фильма: ${movieRating}`;
        const shortRating = document.querySelector(".short-rating");
        shortRating.textContent = `${movieRating}`;
    }

    /**
     * @description Отрисовывает область оставления отзыва.
     * @param { string } movieID ID текущего фильма
     */
    renderReviewInput = (movieID) => {
        const reviewInput = document.querySelector(".send-review__input");
        if (!reviewInput) { return;}
        if (authModule?.user) {
            reviewInput.innerHTML = reviewInputBlock();
            this.addReviewInputListeners();
        } else {
            reviewInput.innerHTML = reviewInvitation({ movieID: movieID });
        }
    }

    /**
     * @description Добавляет обработчики событий на dropdown.
     */
    addReviewInputListeners = () => {
        const dropdown = document.getElementsByClassName("review-input-block__dropdown");
        const choiceAmount = dropdown.length;
        for (let i = 0; i < choiceAmount; i++) {
            const curentSelect = dropdown[i].getElementsByTagName("select")[0];
            const currentSelectLength = curentSelect.length;
            let div = document.createElement("div");
            div.setAttribute("class", "select-selected");
            div.innerHTML = curentSelect.options[curentSelect.selectedIndex].innerHTML;
            dropdown[i].appendChild(div);

            let optionListContainer = document.createElement("div");
            optionListContainer.setAttribute("class", "select-items select-hide");
            for (let j = 1; j < currentSelectLength; j++) {
                let optionItem = document.createElement("div");
                if (j == currentSelectLength - 1) {
                    optionItem.classList.add("last");
                }
                optionItem.innerHTML = curentSelect.options[j].innerHTML;
                optionItem.addEventListener("click", this.dropdownEventListener);
                optionListContainer.appendChild(optionItem);
            }
            dropdown[i].appendChild(optionListContainer);
            div.addEventListener("click", function(e) {
                e.stopPropagation();
                this.nextSibling.classList.toggle("select-hide");
                this.classList.toggle("select-arrow-active");
            });
        }
        document.addEventListener("click", this.closeAllSelect);

        const submitButton = document.querySelector(".review-input-block__submit");
        submitButton.addEventListener("click", this.sendReview);
    }

    /**
     * @description Когда происходит нажатие элемента dropdown-a,
     * обновляет исходный dropdown и отмечает элемент как выбранный.
     */
    dropdownEventListener = (e) => {
        const target = e.target;

        const currentSelect = target.parentNode.parentNode.getElementsByTagName("select")[0];
        const currentSelectLength = currentSelect.length;
        let previousSelect = target.parentNode.previousSibling;
        for (let i = 0; i < currentSelectLength; i++) {
            if (currentSelect.options[i].innerHTML == target.innerHTML) {
                currentSelect.selectedIndex = i;
                previousSelect.innerHTML = "Выбор: " + target.innerHTML;
                let previousSameAsSelected = target.parentNode.getElementsByClassName("same-as-selected");
                const previousLength = previousSameAsSelected.length;
                for (let k = 0; k < previousLength; k++) {
                    previousSameAsSelected[k].classList.toggle("same-as-selected");
                }
                target.classList.add("same-as-selected");
                break;
            }
        }
        previousSelect.click();
    }

    /**
     * @description Закрывает все элементы в dropdown-e, кроме выбранного.
     */
    closeAllSelect = (element) => {
        const items = document.getElementsByClassName("select-items");
        let selected = document.getElementsByClassName("select-selected");
        const itemsAmount = items.length;
        const selectedAmount = selected.length;
        let elementsToHide = [];
        for (let i = 0; i < selectedAmount; i++) {
            if (element == selected[i]) {
                elementsToHide.push(i)
            } else {
                selected[i].classList.remove("select-arrow-active");
            }
        }
        for (let i = 0; i < itemsAmount; i++) {
            if (elementsToHide.indexOf(i)) {
                items[i].classList.add("select-hide");
            }
        }
    }

    /**
     * @description Собирает данные для оставления отзыва и отправляет их в модель.
     */
    sendReview = () => {
        const reviewText = document.querySelector(".review-input-block__text-input").value;
        const reviewTypeText = document.querySelector(".select-selected").textContent;
        let reviewType = 2;
        if (reviewTypeText.includes("Отлично")) {
            reviewType = 1;
        } else if (reviewTypeText.includes("Неплохо")) {
            reviewType = 2;
        } else if (reviewTypeText.includes("Ужасно")) {
            reviewType = 3;
        }
        let review = {
            reviewText: reviewText,
            reviewType: reviewType.toString(),
            movieId: this.movieID,
            userId: authModule.user.ID.toString(),
        }
        this.eventBus.emit(events.moviePage.sendReview, review);
    }

    /**
     * @description Отображает результат отправления отзыва.
     * @param { object } review Сформированный отзыв
     */
    renderReviewSuccess = (review) => {
        const reviewInput = document.querySelector(".send-review__input");
        reviewInput.innerHTML = reviewSuccessBlock();
        let reviewList = document.querySelector(".review-list");
        if (!review) { return; } 
        reviewList.append(createElementFromHTML(createReviewCard({singleReview: review})));
    }

    /**
     * @description Убирает информацию, которая находится только на странице
     * авторизованного пользователя.
     */
    onLogout = () => {
        const reviewInput = document.querySelector(".send-review__input");
        const messageArea = document.querySelector(".user-rating");
        if (!reviewInput || !messageArea) { return;}
        messageArea.innerHTML = ``;
        reviewInput.innerHTML = reviewInvitation({ movieID: movieID });
    }
}