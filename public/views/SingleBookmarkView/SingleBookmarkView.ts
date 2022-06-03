import { singleBookmarkPageData, bookmarkRequest } from '@/types';
import EventBus from '@/modules/eventBus';
import { events } from '@/consts/events';
import { getURLArguments } from '@/modules/router';
import { BaseView } from '../BaseView/BaseView';
import singleBookmarkContent from '@/components/singleBookmark/singleBookmark.pug';

/**
 * @description Класс представления страницы одной закладки.
 */
export class SingleBookmarkView extends BaseView {
    private bookmarkData: singleBookmarkPageData;
    private bookmarkID: string;
    private isNotifyVisible: boolean;
    /**
       * @description Создаёт представление страницы одной закладки.
       * @param { EventBus } eventBus Глобальная шина событий
       * @param { Object } data Данные, необходимые для создания представления
       */
    constructor(eventBus: EventBus, { data = {} } = {}) {
        super(eventBus, data);
        this.bookmarkID = "";
        this.isNotifyVisible = false;
    }

    /**
       * @description Отправляет на глобальную шину событий событие отрисовки
       * контента страницы.
       */
    emitGetContent = () => {
        const URLArgs = getURLArguments(window.location.pathname, '/bookmarks/:ID');
        this.bookmarkID = URLArgs.ID;
        this.eventBus.emit(events.singleBookmarkPage.getContent, URLArgs);
    };

    /**
       * @description Отрисовывает контент страницы одной закладки.
       * @param { Object } data Данные для отрисовки контента закладки:
       * название подборки, даннные о фильмах
       */
    renderContent = (data: singleBookmarkPageData) => {
        const template = singleBookmarkContent(data);
        this.bookmarkData = data;
        const content = document.querySelector('.content');
        if (content) {
            content.innerHTML = template;
        } else {
            this.eventBus.emit(events.app.errorPage);
        }
        this.addEventListenerToSettingsButtons();
        this.addEventListenerToNameInput();
        if (this.isNotifyVisible) {
            this.showNotify("Фильм удалён");
        }
    };

    addEventListenerToNameInput = () => {
        const nameInput = document.querySelector('.container__bookmark-title__color__title-user') as HTMLInputElement;
        if (!nameInput) return;
        nameInput.addEventListener('keyup', (enterUp) => {
            const target = enterUp.target as HTMLInputElement;
            if (enterUp.key == 'Enter' && !(target.value == "" || target.value == this.bookmarkData.title || !target.value.trim())) {
                this.eventBus.emit(events.singleBookmarkPage.changeTitle, { bookmarkId: this.bookmarkID, newTitle: nameInput.value });
                nameInput.blur();
            }
        });

        nameInput.addEventListener('focusout', (enterUp) => {
            const target = enterUp.target as HTMLInputElement;
            console.log(this.bookmarkData)
            if (!(target.value == "" || target.value == this.bookmarkData.title)) {
                this.eventBus.emit(events.singleBookmarkPage.changeTitle, { bookmarkId: this.bookmarkID, newTitle: nameInput.value });
            } else {
                target.value = this.bookmarkData.title;
            }
        })
    }

    addEventListenerToSettingsButtons = () => {
        const deletePlaylistButton = document.querySelector('.container__bookmark-settings__delete-playlist-btn') as HTMLInputElement;
        const deleteMovieButtons = document.querySelectorAll('.movie__body__info__data__title__delete-movie-btn');
        const togglePrivateButton = document.querySelector('.container__bookmark-settings__private-btn') as HTMLElement;
        const popup = document.querySelector('.popup') as HTMLElement;
        const confirmDeleteButton = document.querySelector('.bookmark-submit') as HTMLElement;
        const closePopupButton = document.querySelector('.bookmark-cancel') as HTMLElement;
        if (!deletePlaylistButton || !deleteMovieButtons || !togglePrivateButton || !popup || !closePopupButton) { return; }

        deletePlaylistButton.addEventListener('click', (e) => {
            e.preventDefault();
            popup.classList.add('popup-open');
        });

        togglePrivateButton.addEventListener('click', (e) => {
            e.preventDefault();
            if (togglePrivateButton.classList.contains('private-on')) {
                this.eventBus.emit(events.singleBookmarkPage.changePrivate, { bookmarkId: this.bookmarkID, public: true });
                togglePrivateButton.classList.remove('private-on');
            } else {
                this.eventBus.emit(events.singleBookmarkPage.changePrivate, { bookmarkId: this.bookmarkID, public: false });
                togglePrivateButton.classList.add('private-on');
            }
        });

        deleteMovieButtons.forEach((button) => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const movieTitle = button.parentNode?.firstChild as HTMLAnchorElement;
                const movieID = movieTitle.href.split('/')[movieTitle.href.split('/').length - 1];
                const bookmarkRequest: bookmarkRequest = {
                    movieId: movieID,
                    bookmarkId: this.bookmarkID,
                };
                this.eventBus.emit(events.singleBookmarkPage.delete.movie, bookmarkRequest);
                this.isNotifyVisible = true;
            });
        });

        confirmDeleteButton.addEventListener('click', (e) => {
            e.preventDefault();
            this.eventBus.emit(events.singleBookmarkPage.delete.bookmark, { bookmarkId: this.bookmarkID });
        });

        popup.addEventListener('click', (e) => {
            e.preventDefault();
            this.closePopupWindow(e, popup);
        });
    }

    showNotify = (message: string) => {
        const notify = document.querySelector('.notify') as HTMLElement;
        const notifyMessageBody = document.querySelector('.notify__message') as HTMLElement;
        notifyMessageBody.innerText = message;
        notify.classList.add('notify-open');
        setTimeout(() => {
            notify.classList.remove('notify-open');
            this.isNotifyVisible = false;
        }, 2000);
    };

    closePopupWindow = (e: MouseEvent, popup: HTMLElement) => {
        const target = e.target as Element;
        if (!target.closest('.popup__container_body') || target.classList.contains('bookmark-cancel')) {
            popup.classList.remove('popup-open');
        }
    }

    reRenderPage = () => {
        this.emitGetContent();
    };

}
