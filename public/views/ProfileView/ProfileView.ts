import { events } from '../../consts/events';
import { BaseView } from '../BaseView/BaseView';
import { getURLArguments } from '../../modules/router';
import profilePug from '../../components/profile/profile.pug';
import profileSettings from '../../components/profile/profileInfo/profileInfo.pug';
import profileReview from '../../components/profile/profileReview/profileReview.pug';
import profileBookmark from '../../components/profile/profileBookmark/profileBookmark.pug';
import { authModule } from '../../modules/auth';
import EventBus from '@/modules/eventBus';
import { userData } from '@/types';

/**
 * @description Класс представления страницы профиля.
 */
export class ProfileView extends BaseView {
  user: any;
  /**
     * @description Создаёт представление страницы профиля.
     * @param { EventBus } eventBus Глобальная шина событий
     * @param { Object } data Данные, необходимые для создания представления
    */
  constructor(eventBus: EventBus, data: object) {
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
  renderProfileInfo = (data: userData) => {
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
  renderBookmarks = (data: userData) => {
    const profileBookmarks = document.querySelector('.profile-bookmarks');
    if (profileBookmarks) {
      profileBookmarks.innerHTML += profileBookmark(data);
    }
  };
  /**
 * @description Отрисовывает страницу профиля (часть с активностью).
 * @param { object } data Данные об активности пользователя
 */
  renderReviews = (data: userData) => {
    const profileReviews = document.querySelector('.profile-reviews');
    if (profileReviews) {
      profileReviews.innerHTML += profileReview(data);
    }
  };
  /**
 * @description Отображает изменения (после изменений полей данных пользователя).
 * @param { object } data Новые данные
 */
  renderChangedProfile = (data: userData) => {
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
    const openSettingsButton = document?.querySelector('.profile-info__container__settings') as HTMLElement;
    const openedSettingsForm = document?.querySelector('.profile-info__container__settings__form') as HTMLElement;
    const settingsInput = document?.querySelector('.profile-info__container__settings__form__name-input') as HTMLInputElement;

    if (!settings) return;
    settings.addEventListener('click', (e) => {
      e.preventDefault();
      const target = e.target as HTMLSelectElement;
      if (!target) return;
      if (target?.classList.contains('profile-info__container__settings')) {
        openSettingsButton.style.display = 'none';
        openedSettingsForm.style.display = 'block';
      }
      
      if (target.value === 'Отменить') {
        openSettingsButton.style.display = 'flex';
        openedSettingsForm.style.display = 'none';
        settingsInput.value = '';
      } else if (target.value === 'Сохранить') {
        openSettingsButton.style.display = 'flex';
        openedSettingsForm.style.display = 'none';
        this.submitChange();
      }
    });
  };
  submitChange = () => {
    const settingsInput = document.querySelector('.profile-info__container__settings__form__name-input') as HTMLInputElement;
    if (!this.validateInput(settingsInput.value)) {
      return;
    } else {
      settingsInput.value = '';
      this.eventBus.emit(events.profilePage.sendChanges, { name: settingsInput.value }, this.user.ID);
    }
  };
  /**
 * @description Проверяет корректность данных для поля ввода.
 * @param { string } inputName Имя поля ввода.
 * @return { bool } Корректны ли новые данные
 */
  validateInput = (inputName: string) => {
    if (!inputName) {
      return null;
    } else {
      return true;
    }
  };

  listenAvatarChanged = () => {
    const avatarInput = document.querySelector('.profile-info__avatar__input') as HTMLElement;
    const avatarDiv = document.querySelector('.avatar') as HTMLElement;
    if (!avatarInput) {
      return;
    }
    if (!avatarDiv) {
      return;
    }
    avatarInput.addEventListener('click', (e: Event) => {
      avatarInput.addEventListener('change', (ee: Event) => {
        const target = ee.target as HTMLInputElement;
        if (!target) {
          return;
        }
        const file = target.files as FileList;
        if (!file) {
          return
        };
        const reader = new FileReader();
        reader.addEventListener('load', (event : Event) => {
          const avatarTarget = event.target as FileReader;
          if (!avatarTarget) return;
          avatarDiv.style.backgroundImage = `url(${avatarTarget.result})`;
        });
        reader.readAsDataURL(file[0]);

        const formData = new FormData();
        if (file[0]) {
          formData.append('avatar', file[0]);
          this.eventBus.emit(events.profilePage.sendAvatar, formData, this.user.ID);
        }
      });
    });
  };

  reRenderPage = () => {
    this.emitGetContent();
  };
}
