import { getProfile, getBookmarks, getReview, sendSettingsChanges, sendAvatar } from "../modules/connection";
import { BaseModel } from "./BaseModel";
import { statuses } from "../consts/statuses";
import { events } from "../consts/events";
import EventBus from "@/modules/eventBus";
import { personalData, profileUserData, userData } from "@/types";
import { authModule } from "@/modules/auth";


/**
 * @description Класс модели страницы профиля.
 */
export class ProfileModel extends BaseModel {
    /**
     * @description Создаёт модель страницы одного фильма.
     * @param { EventBus } eventBus Глобальная шина событий
     */
    constructor(eventBus: EventBus) {
        super(eventBus);
    }

    getProfileInfo = (user: userData) => {
        getProfile(user.ID).then((response) => {
            if (!response) {
                this.eventBus.emit(events.app.errorPage);
            } if (response?.status === statuses.OK && response.parsedResponse) {
                const profileData : profileUserData = response.parsedResponse;
                profileData.isThisUser = authModule.user ? (user.ID == authModule.user.ID) : false;
                this.eventBus.emit(
                    events.profilePage.render.profileInfo, profileData
                );
            } else if (response?.status === statuses.NOT_FOUND) {
                this.eventBus.emit(events.app.errorPageText, "Такого пользователя нет");
            }
        }).catch((e) => {
            console.log("Unexpected profileInfo error: ", e);
        });
    }

    getBookmarks = (user: userData) => {
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
        }).catch((e) => {
            console.log("Unexpected profileBookmarks error: ", e);
        });
    }

    getReviews = (user: userData) => {
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
        }).catch((e) => {
            console.log("Unexpected profileReview error: ", e);
        });
    }

    getContent = (user: userData) => {
        this.getBookmarks(user);
        this.getReviews(user);
    }

    sendSettingsCnanges = (inputsData: personalData, userID: string) => {
        sendSettingsChanges(inputsData, userID).then((response) => {
            if (!response) {
                this.eventBus.emit(events.app.errorPage);
            } if (response?.status === statuses.OK && response.parsedResponse) {
                const profileData : profileUserData = response.parsedResponse;
                profileData.isThisUser = authModule.user ? (userID === authModule.user.ID) : false;
                this.eventBus.emit(
                    events.profilePage.render.changedProfile, profileData
                );
            } else if (response?.status === statuses.NOT_FOUND) {
                this.eventBus.emit(events.app.errorPageText, "Такого пользователя нет");
            }
        }).catch((e) => {
            console.log("Unexpected profileSettingsChanges error: ", e);
        });
    }

    sendSettingsAvatar = (formData: FormData, userID: string) => {
        sendAvatar(formData, userID).then((response) => {
            if (!response) {
                this.eventBus.emit(events.app.errorPage);
            } if (response?.status === statuses.OK && response.parsedResponse) {
                this.eventBus.emit(
                    events.profilePage.render.changedProfile, response.parsedResponse
                );
            } else if (response?.status === statuses.NOT_FOUND) {
                this.eventBus.emit(events.app.errorPageText, "Такого пользователя нет");
            }
        }).catch((e) => {
            console.log("Unexpected profileSettingsAvatar error: ", e);
        });
    }
}
