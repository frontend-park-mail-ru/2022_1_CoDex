import { events } from '../../consts/events';
import { BaseView } from '../BaseView/BaseView';
import { getURLArguments } from '../../modules/router';
import profilePug from '../../components/profile/profile.pug';
import profileSettings from '../../components/profile/profileInfo/profileInfo.pug';
import profileReview from '../../components/profile/profileReview/profileReview.pug';
import profileBookmark from '../../components/profile/profileBookmark/profileBookmark.pug';
import EventBus from '@/modules/eventBus';
import { userData, profileUserData, bookmarkResponse } from '@/types';
import { createElementFromHTML } from '@/utils/utils';

/**
 * @description Класс представления страницы профиля.
 */
export class ProfileView extends BaseView {
  userData: profileUserData;
  /**
     * @description Создаёт представление страницы профиля.
     * @param { EventBus } eventBus Глобальная шина событий
     * @param { Object } data Данные, необходимые для создания представления
    */
  constructor(eventBus: EventBus, data: object = {}) {
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
  renderProfileInfo = (data: profileUserData) => {
    this.userData = data;
    const content = document.querySelector('.content') as HTMLElement;
    if (content) {
      content.innerHTML = profilePug(this.userData);
    }
    this.eventBus.emit(events.profilePage.getContent, this.userData);
    this.addSettingsButtonListener();
    this.listenAvatarChanged();
  };
  /**
 * @description Отрисовывает страницу профиля (часть с личными подборками).
 * @param { object } data Данные о подборках пользователя
 */
  renderBookmarks = (data: any) => {
    const profileBookmarks = document.querySelector('.profile-bookmarks');
    if (profileBookmarks) {
      data.isThisUser = this.userData.isThisUser;
      profileBookmarks.innerHTML += profileBookmark(data);
    }
    this.addCreateBookmarkButtonListener();
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
  renderChangedProfile = (data: profileUserData) => {
    this.userData = data;
    const profileInfo = document.querySelector('.profile-info');
    if (profileInfo) {
      profileInfo.innerHTML = profileSettings(this.userData);
    }
    this.addSettingsButtonListener();
    this.listenAvatarChanged();
  };

  renderNewBookmark = (data: bookmarkResponse) => {
    const profileBookmarksContainer = document.querySelector('.profile-bookmarks__bookmarks-container') as HTMLElement;
    const newBookmark = {
      bookmarksList: [{ ID: data.ID, imgSrc: data.imgSrc, description: data.title }],
      isThisUser: this.userData.isThisUser
    };
    if (profileBookmarksContainer) {
      const newBookmarkElement = createElementFromHTML(profileBookmark(newBookmark)) as HTMLElement;
      profileBookmarksContainer.innerHTML += newBookmarkElement.querySelector('.bookmark-element')?.outerHTML;
    }
    this.addCreateBookmarkButtonListener();

  }

  addCreateBookmarkButtonListener = () => {
    const openWindowButton = document.querySelector('.bookmark-element-default__wrapper') as HTMLElement;
    const createBookmarkButton = document.querySelector('.bookmark-submit') as HTMLElement;
    const popup = document.querySelector('.profile__popup') as HTMLElement;
    const closePopupButton = document.querySelector('.popup-close') as HTMLElement;
    if (!openWindowButton || !popup || !closePopupButton || !createBookmarkButton) { return; }
    openWindowButton.addEventListener('click', (e) => {
      e.preventDefault();
      popup.classList.add('open');
    });
    popup.addEventListener('click', (e) => {
      e.preventDefault();
      this.closePopupWindow(e, popup);

    });
    createBookmarkButton.addEventListener('click', (e) => {
      e.preventDefault();
      const bookmarkName = document.querySelector('.bookmark-name') as HTMLInputElement;
      if (bookmarkName.value) {
        this.createBookmark(bookmarkName.value);
        popup.classList.remove('open');
        bookmarkName.value = "";
      }
    });

  }

  closePopupWindow = (e: MouseEvent, popup: HTMLElement) => {
    const target = e.target as Element;
    if (!target.closest('.profile__popup__container__body') || target.classList.contains('popup-close')) {
      popup.classList.remove('open');
    }
  }

  addSettingsButtonListener = () => {
    const settings = document.querySelector('.profile-info__container');
    const openSettingsButton = document?.querySelector('.profile-info__container__settings') as HTMLElement;
    const openedSettingsForm = document?.querySelector('.profile-info__container__settings__form') as HTMLElement;
    const nameInput = document?.querySelector('.profile-info__container__settings__form__name-input') as HTMLInputElement;
    if (!nameInput) { return; }
    nameInput.addEventListener('input', () => {
      this.deleteValidationError();
    });
    nameInput.addEventListener('change', () => {
      this.eventBus.emit(events.profilePage.validate, nameInput.name, nameInput.value);
    });
    if (!settings) return;
    settings.addEventListener('click', (e) => {
      e.preventDefault();
      const target = e.target as HTMLSelectElement;
      if (!target) return;
      if (target?.classList.contains('profile-info__container__settings')) {

        openSettingsButton.style.display = 'none';
        openedSettingsForm.style.display = 'flex';
      }

      if (target.value === 'Отменить') {
        openSettingsButton.style.display = 'flex';
        openedSettingsForm.style.display = 'none';
        nameInput.value = '';
        this.eventBus.emit(events.profilePage.deleteValidationError);
      } else if (target.value === 'Сохранить') {
        this.submitChange(nameInput.value);
      }
    });
  };

  submitChange = (inputValue: string) => {
    this.eventBus.emit(events.profilePage.sendChanges, { username: inputValue }, this.userData.ID);
  };

  createBookmark = (bookmarkName: string) => {
    this.eventBus.emit(events.profilePage.createBookmark, { title: bookmarkName, userId: this.userData.ID.toString(), public: true }, this.userData.ID);
  };

  successSumbit = () => {
    const openSettingsButton = document?.querySelector('.profile-info__container__settings') as HTMLElement;
    const openedSettingsForm = document?.querySelector('.profile-info__container__settings__form') as HTMLElement;
    const nameInput = document?.querySelector('.profile-info__container__settings__form__name-input') as HTMLInputElement;

    openSettingsButton.style.display = 'flex';
    openedSettingsForm.style.display = 'none';
    nameInput.value = "";
  };

  addValidationError = (errorMessage: string) => {
    const errorField = document.querySelector('.profile-info__container__settings__form__name-error') as HTMLElement;
    if (!errorField) {
      return;
    }
    errorField.textContent = errorMessage;
  }
  deleteValidationError = () => {
    const errorField = document.querySelector('.profile-info__container__settings__form__name-error') as HTMLElement;
    if (!errorField) {
      return;
    }
    errorField.textContent = "";
  }
  listenAvatarChanged = () => {
    const avatarInput = document.querySelector('.profile-info__avatar__input') as HTMLElement;
    const avatarDiv = document.querySelector('.avatar') as HTMLElement;
    if (!avatarInput) {
      return;
    }
    if (!avatarDiv) {
      return;
    }
    avatarInput.addEventListener('click', () => {
      avatarInput.addEventListener('change', (event: Event) => {
        const target = event.target as HTMLInputElement;
        if (!target) {
          return;
        }
        const file = target.files as FileList;
        if (!file) {
          return
        }
        const reader = new FileReader();
        reader.addEventListener('load', (event: Event) => {
          const avatarTarget = event.target as FileReader;
          if (!avatarTarget) return;
          const imgSrc: string = avatarTarget.result as string;
          avatarDiv.style.backgroundImage = `url(${imgSrc})`;
        });
        reader.readAsDataURL(file[0]);

        const formData = new FormData();
        if (file[0]) {
          formData.append('avatar', file[0]);
          this.eventBus.emit(events.profilePage.sendAvatar, formData, this.userData.ID);
        }
      });
    });
  };

  reRenderProfileInfo = (profileData: profileUserData) => {
    const profileInfo = document.querySelector('.profile-info');
    if (profileInfo) {
      profileInfo.innerHTML = profileSettings(profileData);
    }
    this.addSettingsButtonListener();
    this.listenAvatarChanged();
  }

  reRenderPage = () => {
    this.emitGetContent();
  };

}
