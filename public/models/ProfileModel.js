import { getProfile, getBookmarks, getReview, sendSettingsChanges, sendAvatar } from "../modules/connection.js";
import { BaseModel } from "./BaseModel.js";
import { statuses } from "../consts/statuses.js";
import { events } from "../consts/events.js";

/**
 * @description Класс модели страницы профиля.
 */
export class ProfileModel extends BaseModel {
    /**
     * @description Создаёт модель страницы одного фильма.
     * @param { EventBus } eventBus Глобальная шина событий
     */
    constructor(eventBus) {
        super(eventBus);
        this.errorMessages = new Map();
    }

    getProfileInfo = (user) => {
        getProfile(user.ID).then((response) => {
            if (!response) {
                this.eventBus.emit(events.app.errorPage);
            } if (response?.status === statuses.OK && response.parsedResponse) {
                this.eventBus.emit(
                    events.profilePage.render.profileInfo, response.parsedResponse
                );
            } else if (response?.status === statuses.NOT_FOUND) {
                this.eventBus.emit(events.app.errorPageText, "Такого пользователя нет");
            }
        });
    }

    getBookmarks = (user) => {
        getBookmarks(user.ID).then((response) => {
            if (!response) {
                this.eventBus.emit(events.app.errorPage);
            } if (response?.status === statuses.OK && response.parsedResponse) {
                this.eventBus.emit(
                    events.profilePage.render.bookmarks, response.parsedResponse
                );
            } else if (response?.status === statuses.NOT_FOUND) {
                this.eventBus.emit(events.app.errorPageText, "Такого пользователя нет");
            }
        });
    }

    getReviews = (user) => {
        getReview(user.ID).then((response) => {
            if (!response) {
                this.eventBus.emit(events.app.errorPage);
            } if (response?.status === statuses.OK && response.parsedResponse) {
                this.eventBus.emit(
                    events.profilePage.render.reviews, response.parsedResponse
                );
            } else if (response?.status === statuses.NOT_FOUND) {
                this.eventBus.emit(events.app.errorPageText, "Такого пользователя нет");
            }
        });
    }

    getContent = (user) => {
        this.getBookmarks(user);
        this.getReviews(user);
    }

    sendSettingsCnanges = (inputsData, userID) => {
        sendSettingsChanges(inputsData, userID).then((response) => {
            if (!response) {
                this.eventBus.emit(events.app.errorPage);
            } if (response?.status === statuses.OK && response.parsedResponse) {
                this.eventBus.emit(
                    events.profilePage.render.changedProfile, response.parsedResponse
                );
            } else if (response?.status === statuses.NOT_FOUND) {
                this.eventBus.emit(events.app.errorPageText, "Такого пользователя нет");
            }
        })
    }

    sendSettingsAvatar = (formData) => {
        sendAvatar(formData).then((response) => {
            if (!response) {
                this.eventBus.emit(events.app.errorPage);
            } if (response?.status === statuses.OK && response.parsedResponse) {
                this.eventBus.emit(
                    events.profilePage.render.changedProfile, response.parsedResponse
                );
            } else if (response?.status === statuses.NOT_FOUND) {
                this.eventBus.emit(events.app.errorPageText, "Такого пользователя нет");
            }
        })
    }

    changeAvatar = async (avatar) => {
        // TODO
    }

    getChangeContent = () => {
        // TODO
    }

    initErrorMessages = () => {
        // TODO
    }

    addError = () => {
        // TODO
    }

    deleteError = () => {
        // TODO
    }

    deleteAllErrors = () => {
        // TODO
    }

    sendChanges = (inputsData) => {
        // TODO
    }

    submitChanges = (inputsData) => {
        // TODO
    }

    hasErrors = (inputsData) => {
        // TODO
    }

    validateSingleInput = (inputName, inputValue) => {
        // TODO ?
    }
}
