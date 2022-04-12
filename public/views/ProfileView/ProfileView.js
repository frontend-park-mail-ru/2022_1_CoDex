import { events } from "../../consts/events.js";
import { BaseView } from "../BaseView/BaseView.js";
import { getURLArguments } from "../../modules/router.js";
import profilePug from "../../components/profile/profile.pug";
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
            const profileInfo = document.querySelector('profile-info');
            if (!profileInfo) {
                content.innerHTML = profilePug(this.user);
            }
        }
        this.eventBus.emit(events.profilePage.getContent, data);
        this.addSettingsButtonListener();
        this.listenAvatarChanged();
    }

    renderBookmarks = (data) => {
        const profileContent = document.querySelector('.profileContent');
        if (profileContent) {
            profileContent.innerHTML = profileBookmark(data);
        }
    }

    renderReviews = (data) => {
        const profileContent = document.querySelector('.profileContent');
        if (profileContent) {
            console.log(data)
            profileContent.innerHTML += profileReview(data);
        }

    }

    addSettingsButtonListener = () => {
        const settings = document.querySelector('.profile-info__container');
        settings.addEventListener("click", (e) => {
            e.preventDefault();
            const target = e.target;
            if (target.classList.contains("profile-info__settings")) {
                document.querySelector(".profile-info__settings").style.display = "none";
                document.querySelector(".profile-info__settings__form").style.display = "block";
            }
            if (target.value == "Отменить") {
                document.querySelector(".profile-info__settings").style.display = "flex";
                document.querySelector(".profile-info__settings__form").style.display = "none";
            } else if (target.value == "Сохранить") {
                document.querySelector(".profile-info__settings").style.display = "flex";
                document.querySelector(".profile-info__settings__form").style.display = "none";
                this.submitChange();

            }
        });

    }

    submitChange = () => {
        const inputName = document.querySelector('.profile-info__settings__form__name-input').value;
        console.log(inputName);
        if (!this.validateInput(inputName)) {
            return;
        } else {
            document.querySelector('.profile-info__settings__form__name-input').value = "";
            document.querySelector('.name').textContent = inputName;
            console.log({ name: inputName })
            this.eventBus.emit(events.profilePage.sendChanges, { name: inputName });//changedProfile <---
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
            console.log("1");
            avatarInput.addEventListener('change', (ee) =>{
                if (!ee.target.files[0]) {
                    return;
                  }
                const reader = new FileReader();

                console.log("change");
                reader.addEventListener('load', (event)=> {
                    console.log(event.target.result)
                    avatarDiv.style.backgroundImage = `url(${event.target.result})`;
                })
                console.log("files",ee.target.files[0])
                reader.readAsDataURL(ee.target.files[0]);

            });
            
        });
        
    }
}



// submitSettingsButton = () => {
//     const settingsForm = document.querySelector('');
//     if (!settingsForm) {
//         return;
//     }
//     const settingsButton = document.querySelector('.settings-form__btn');
//     if (!settingsButton) {
//         return;
//     }

//     settingsButton.addEventListener('click', () => {
//         const formData = new FormData();
//         if (settingsForm.avatar.files[0]) {
//             formData.append('avatar', settingsForm.avatar.files[0]);
//             this.eventBus.emit(EVENTS.ProfilePage.ChangeAvatar, formData);
//         }
//         const formTextInputs = settingsForm.querySelectorAll('.settings-form__inputs');
//         if (!formTextInputs.length) {
//             return;
//         }
//         const inputsData = {};
//         for (const input of formTextInputs) {
//             inputsData[input.name] = input.value;
//         }
//         inputsData.gender = this.user.gender;
//         inputsData.email = this.user.email;
//         inputsData.picture_url = this.user.picture_url;
//         this.eventBus.emit(EVENTS.ProfilePage.ChangeProfile, inputsData);
//     });
// }
