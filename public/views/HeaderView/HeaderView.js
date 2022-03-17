// TODO

import events from "../../consts/events.js";
import { renderBaseView, createElementFromHTML } from "../../utils/utils.js";
import { BaseView } from "../BaseView/BaseView.js";
import loginButton from "../../components/header/loginButton.pug";

/**
 * @description Класс представления навигационной панели.
 */
export class HeaderView extends BaseView {
    /**
     * @description Создаёт представление навигационной панели.
     * @param { eventBus } Глобальная шина событий
     */
    constructor(eventBus) {
        super(eventBus);
        this.searchIsClicked = false;
        this.verticalMenuIsClicked = false;
    }

    /**
     * @description Рендерит пустое отображение навигационной панели.
     */
    render = () => {
        const template = renderBaseView();
        const header = this.getHeaderFromDOM();
        if (header) {
            header.innerHTML = template;
        } else {
            this.eventBus.emit(events.app.errorPage);
        }
    }

    /**
     * @description Делает кнопку навигационной панели с указанной
     * ссылкой активной.
     */
    changeActiveButton = (buttonHref) => {
        this.unactiveAllButtons();
        if (!buttonHref) {
            return;
        }
        const header = this.getHeaderFromDOM();
        const buttons = header.querySelectorAll('.navbar__menu-btn');
        if (!buttons.length) {
            return;
        }
        for (const button of buttons) {
            if (button.getAttribute('href') === buttonHref) {
                button.classList.add('.navbar__menu-btn_active');
            }
        }
    }

    /**
     * @description Делает все кнопки навигационной панели неактивными.
     */
    unactiveAllButtons = () => {
        const activeButtons = document.querySelectorAll('.navbar__menu-btn_active');
        if (!activeButtons) {
            return;
        }
        for (const button of activeButtons) {
            button.classList.remove('navbar__menu-btn_active');
        }
    }

    /**
     * @description Убирает кнопку выхода с навигационной панели
     */
    removeLogoutButton = () => {
        const logoutBtn = [...document.querySelectorAll('.vertival-menu__btn-container a')]
            .find((elem) => elem.textContent.includes('Выйти'));
        if (logoutBtn) {
            logoutBtn.remove();
        }
    }

    /**
     * @description Отрисовывает кнопку авторизации в навигационной панели.
     */
    renderLoginButton = () => {
        const userBlock = document.querySelector('.user-block');
        if (!userBlock) {
            return;
        }
        userBlock.replaceWith(createElementFromHTML(loginButton()));
    }

    renderUserBlock = () => {
        // TODO
    }

    /**
     * @description Находит и возвращает элемент навигационной панели.
     * @returns { HTMLDivElement } Элемент навигационной панели
     */
    getHeaderFromDOM = () => {
        return document.querySelector('.navbar');
    }
};