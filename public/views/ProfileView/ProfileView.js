import { events } from "../../consts/events.js";
import { BaseView } from "../BaseView/BaseView.js";
import { getURLArguments } from "../../modules/router.js";
import profilePage from "../../components/profile/profile.pug";
import profileInfo from "../../components/profile/profileInfo/profileInfo.pug";
import profileReview from "../../components/profile/profileReview/profileReview.pug";
import profileBookmark from "../../components/profile/profileBookmark/profileBookmark.pug";

/**
 * @description Класс представления страницы профиля.
 */
export class ProfileView extends BaseView {
    /**
     * @description Создаёт представление страницы профиля.
     * @param { EventBus } eventBus Глобальная шина событий
     * @param { Object } data Данные, необходимые для создания представления
    */
    constructor(eventBus, { data = {} } = {}) {
        super(eventBus, data);
        this.profileBookmarks = null;
        this.profileReviews = null;
        this.profileInfo = null;
    }

    /**
     * @description Отправляет на глобальную шину событий событие отрисовки
     * контента страницы.
     */
    emitGetContent = () => {
        const URLArgs = getURLArguments(window.location.pathname, '/profile/:ID');
        this.eventBus.emit(events.profilePage.getProfileInfo, URLArgs);
        this.eventBus.emit(events.profilePage.getBookmarks, URLArgs);
        this.eventBus.emit(events.profilePage.getReviews, URLArgs);
        //this.eventBus.emit(events.profilePage.render.content);

    }

    // renderContent = () => {
    //     const content = document.querySelector('.content');

    //     if (content) {
    //         content.innerHTML = this.profileBookmarks;
    //     } else {
    //         this.eventBus.emit(events.app.errorPage);
    //     }
    // }

    renderProfileInfo = (data) => {
        const content = document.querySelector('.content');

        const profileInf = profileInfo(data);
        content.innerHTML += profileInf;
    }

    renderBookmarks = (data) => {
        const content = document.querySelector('.content');

        const profileBookmarks = profileBookmark(data);
        content.innerHTML += profileBookmarks;


    }

    renderReviews = (data) => {
        this.profileReviews = profileReview();
        console.log("review", this.profileReviews);
    }

    openSettings = () => {
        const profileInfoSettings = document.querySelector('.profileInfo__container');
        if (!profileInfoSettings) {
            return;
        }

    }

    closeSettings = () => {
        // TODO
    }

    renderSettings = () => {
        // TODO
    }

    deleteSettings = () => {
        // TODO
    }

    submitChange = () => {
        // TODO
    }

    addValidateListeners = () => {
        // TODO
    }

    addSubmitError = () => {
        // TODO
    }

    deleteSubmitError = () => {
        // TODO
    }

    addSubmitListener = () => {
        // TODO
    }

    addErrorMessage = () => {
        // TODO
    }

    deleteErrorMessage = () => {
        // TODO
    }

    addAvatarListener = () => {
        // TODO
    }

    renderCollections = () => {
        // TODO
    }

    renderActivity = () => {
        // TODO
    }
}
