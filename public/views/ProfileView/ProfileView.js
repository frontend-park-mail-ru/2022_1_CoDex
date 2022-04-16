import { events } from '../../consts/events';
import { BaseView } from '../BaseView/BaseView.js';
import { getURLArguments } from '../../modules/router.js';
import profilePug from '../../components/profile/profile.pug';
import profileSettings from '../../components/profile/profileInfo/profileInfo.pug';
import profileReview from '../../components/profile/profileReview/profileReview.pug';
import profileBookmark from '../../components/profile/profileBookmark/profileBookmark.pug';
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
  };
  /**
 * @description Отрисовывает страницу профиля (часть с данными о пользователе).
 * @param { object } data Данные о пользователе
 */
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
  };
  /**
 * @description Отрисовывает страницу профиля (часть с личными подборками).
 * @param { object } data Данные о подборках пользователя
 */
  renderBookmarks = (data) => {
    const profileBookmarks = document.querySelector('.profile-bookmarks');
    if (profileBookmarks) {
      profileBookmarks.innerHTML += profileBookmark(data);
    }
  };
  /**
 * @description Отрисовывает страницу профиля (часть с активностью).
 * @param { object } data Данные об активности пользователя
 */
  renderReviews = (data) => {
    const profileReviews = document.querySelector('.profile-reviews');
    if (profileReviews) {
      profileReviews.innerHTML += profileReview(data);
    }
  };
  /**
 * @description Отображает изменения (после изменений полей данных пользователя).
 * @param { object } data Новые данные
 */
  renderChangedProfile = (data) => {
    this.user = data;
    this.user.isThisUser = authModule.user ? (data.ID === authModule.user.ID) : false;
    const profileInfo = document.querySelector('.profile-info');
    if (profileInfo) {
      profileInfo.innerHTML = profileSettings(this.user);
    }
    this.addSettingsButtonListener();
  };

  addSettingsButtonListener = () => {
    const settings = document.querySelector('.profile-info__container');
    settings.addEventListener('click', (e) => {
      e.preventDefault();
      const target = e.target;
      if (target.classList.contains('profile-info__container__settings')) {
        document.querySelector('.profile-info__container__settings').style.display = 'none';
        document.querySelector('.profile-info__container__settings__form').style.display = 'block';
      }
      if (target.value == 'Отменить') {
        document.querySelector('.profile-info__container__settings').style.display = 'flex';
        document.querySelector('.profile-info__container__settings__form').style.display = 'none';
        document.querySelector('.profile-info__container__settings__form__name-input').value = '';
      } else if (target.value == 'Сохранить') {
        document.querySelector('.profile-info__container__settings').style.display = 'flex';
        document.querySelector('.profile-info__container__settings__form').style.display = 'none';
        this.submitChange();
      }
    });
  };
  submitChange = () => {
    const inputName = document.querySelector('.profile-info__container__settings__form__name-input').value;
    if (!this.validateInput(inputName)) {
      return;
    } else {
      document.querySelector('.profile-info__container__settings__form__name-input').value = '';
      this.eventBus.emit(events.profilePage.sendChanges, { name: inputName }, this.user.ID);
    }
  };
  /**
 * @description Проверяет корректность данных для поля ввода.
 * @param { string } inputName Имя поля ввода.
 * @return { bool } Корректны ли новые данные
 */
  validateInput = (inputName) => {
    if (!inputName) {
      return null;
    } else {
      return true;
    }
  };

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
        });
        reader.readAsDataURL(ee.target.files[0]);

        const formData = new FormData();
        if (ee.target.files[0]) {
          formData.append('avatar', ee.target.files[0]);
          this.eventBus.emit(events.profilePage.sendAvatar, formData, this.user.ID);
        }
      });
    });
  };

  reRenderPage = () => {
    this.emitGetContent();
  };
}
