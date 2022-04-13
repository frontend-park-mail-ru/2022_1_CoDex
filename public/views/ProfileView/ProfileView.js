import { events } from "../../consts/events.js";
import { BaseView } from "../BaseView/BaseView.js";
import { getURLArguments } from "../../modules/router.js";
import profilePug from "../../components/profile/profile.pug";
import profileSettings from "../../components/profile/profileInfo/profileInfo.pug";
import profileReview from "../../components/profile/profileReview/profileReview.pug";
import profileBookmark from "../../components/profile/profileBookmark/profileBookmark.pug";
import { authModule } from '../../modules/auth.js';
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
    }
    /**
     * @description Отправляет на глобальную шину событий событие отрисовки
     * контента страницы.
     */
    emitGetContent = () => {
        const URLArgs = getURLArguments(window.location.pathname, '/profile/:ID');
        this.eventBus.emit(events.profilePage.getProfileInfo, URLArgs);
    }
    renderProfileInfo = (data) => {
        this.user = data;
        this.user.isThisUser = authModule.user ? (data.ID === authModule.user.ID) : false;
        const content = document.querySelector('.content');
        if (content) {
            content.innerHTML = profilePug(this.user);
        }
        this.eventBus.emit(events.profilePage.getContent, data);
        this.addSettingsButtonListener();
        this.listenAvatarChanged();
    }
    renderBookmarks = (data) => {
        const profileBookmarks = document.querySelector('.profile-bookmarks');
        if (profileBookmarks) {
            profileBookmarks.innerHTML += profileBookmark(data);
        }
    }
    renderReviews = (data) => {
        const profileReviews = document.querySelector('.profile-reviews');
        if (profileReviews) {
            profileReviews.innerHTML += profileReview(data);
        }
    }
    renderChangedProfile = (data) => {
        this.user = data;
        this.user.isThisUser = authModule.user ? (data.ID === authModule.user.ID) : false;
        const profileInfo = document.querySelector('.profile-info');
        if (profileInfo) {
            profileInfo.innerHTML = profileSettings(this.user);
        }
        this.addSettingsButtonListener();
    }
    addSettingsButtonListener = () => {
        const settings = document.querySelector('.profile-info__container');
        settings.addEventListener("click", (e) => {
            e.preventDefault();
            const target = e.target;
            if (target.classList.contains("profile-info__container__settings")) {
                document.querySelector(".profile-info__container__settings").style.display = "none";
                document.querySelector(".profile-info__container__settings__form").style.display = "block";
            }
            if (target.value == "Отменить") {
                document.querySelector(".profile-info__container__settings").style.display = "flex";
                document.querySelector(".profile-info__container__settings__form").style.display = "none";
                document.querySelector('.profile-info__container__settings__form__name-input').value = "";
            } else if (target.value == "Сохранить") {
                document.querySelector(".profile-info__container__settings").style.display = "flex";
                document.querySelector(".profile-info__container__settings__form").style.display = "none";
                this.submitChange();
            }
        });
    }
    submitChange = () => {
        const inputName = document.querySelector('.profile-info__container__settings__form__name-input').value;
        if (!this.validateInput(inputName)) {
            return;
        } else {
            document.querySelector('.profile-info__container__settings__form__name-input').value = "";
            this.eventBus.emit(events.profilePage.sendChanges, { name: inputName }, this.user.ID);
        }
    }
    validateInput = (inputName) => {
        if (!inputName) {
            return null;
        } else {
            return true;
        }
    }
    listenAvatarChanged = () => {
        const avatarInput = document.querySelector('.profile-info__avatar__input');
        const avatarDiv = document.querySelector('.avatar');
        if (!avatarInput) {
            return;
        }
        avatarInput.addEventListener('click', (e) => {
            avatarInput.addEventListener('change', (ee) => {
                if (!ee.target.files[0]) {
                    return;
                }
                const reader = new FileReader();
                reader.addEventListener('load', (event) => {
                    avatarDiv.style.backgroundImage = `url(${event.target.result})`;
                })
                reader.readAsDataURL(ee.target.files[0]);
                
                const formData = new FormData();
                if (ee.target.files[0]) {
                    console.log("ee.target", ee.target.files[0]);
                    //console.log("avatarDiv", formData.values());
                    formData.append('avatar', ee.target.files[0]);
                    console.log("before event form data");
                    this.eventBus.emit(events.profilePage.sendAvatar, formData);
                }

            });
        });
    }
    reRenderPage = () => {
        this.emitGetContent();
    }
}