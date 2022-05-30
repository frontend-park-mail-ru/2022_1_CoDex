import { getProfile, getBookmarks, getReview, sendSettingsChanges, sendAvatar, createBookmark } from "../modules/connection";
import { BaseModel } from "./BaseModel";
import { statuses } from "../consts/statuses";
import { events } from "../consts/events";
import EventBus from "@/modules/eventBus";
import { bookmarkCreateRequest, bookmarkResponse, personalData, profileUserData, userData } from "@/types";
import { authModule } from "@/modules/auth";
import { emptyField, errorInfo } from "@/consts/errors";
import { authConfig } from "@/consts/authConfig";
import { sleep } from "@/utils/sleep";

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
                const profileData: profileUserData = response.parsedResponse;
                (async () => {
                    await sleep(500);
                    profileData.isThisUser = authModule.user ? (user.ID == authModule.user.ID) : false;
                    this.eventBus.emit(
                        events.profilePage.render.profileInfo, profileData
                    );
                })();
                // profileData.isThisUser = authModule.user ? (user.ID == authModule.user.ID) : false;
                //     this.eventBus.emit(
                //         events.profilePage.render.profileInfo, profileData
                //     );
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
        if (this.hasError(inputsData)) {
            return;
        }
        sendSettingsChanges(inputsData, userID).then((response) => {
            if (!response) {
                this.eventBus.emit(events.app.errorPage);
            } if (response?.status === statuses.OK && response.parsedResponse) {
                const profileData: profileUserData = response.parsedResponse;
                profileData.isThisUser = authModule.user ? (userID === authModule.user.ID) : false;
                const parsed: userData = response.parsedResponse;
                authModule.changeUser(parsed);
                this.eventBus.emit(
                    events.profilePage.render.changedProfile, profileData
                );
                this.eventBus.emit(events.profilePage.onSuccessSubmit);
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
                const parsed: userData = response.parsedResponse;
                authModule.changeUser(parsed);
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

    createBookmark = (inputsData: bookmarkCreateRequest) => {
        createBookmark(inputsData).then(
            (response) => {
                if (!response) { return; }
                const parsed = <bookmarkResponse>response.parsedResponse;

                if (response.status == statuses.OK) {
                    this.eventBus.emit(events.profilePage.render.newBookmark, parsed);
                }
            }
        ).catch((e) => {
            console.log("Unexpected review error: ", e);
        });
    }

    /**
     * @description Проверяет указанное поле ввода на корректность.
     * @param { string } inputName Имя проверяемого поля ввода
     * @param { string } inputValue Значение проверяемого поля ввода
     */
    validateSingleInput = (inputName: string, inputValue: string) => {
        if (!inputName) { return false; }
        if (!inputValue) {
            this.eventBus.emit(events.profilePage.addValidationError, emptyField.message);
            return false;
        }
        this.eventBus.emit(events.profilePage.deleteValidationError);
        for (const error of (errorInfo[inputName])) {
            if (!inputValue.match(error.regexp)) {
                this.eventBus.emit(events.profilePage.addValidationError, error.message);
                return false;
            } else {
                this.eventBus.emit(events.profilePage.deleteValidationError);
                return true;
            }
        }
    };

    hasError = (inputsData: personalData) => {
        return !this.validateSingleInput(authConfig.nameInput.name, inputsData.username);
    };
}
