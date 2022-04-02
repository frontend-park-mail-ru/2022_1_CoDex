import { authModule } from "../../modules/auth.js";
import { events } from "../../consts/events.js";
import { routes } from "../../consts/routes.js";
import { renderBaseView, createElementFromHTML } from "../../utils/utils.js";
import { BaseView } from "../BaseView/BaseView.js";
import loginButton from "../../components/header/loginButton.pug";
import userBlock from "../../components/header/userBlock/userBlock.pug";
import logoutButton from "../../components/header/logoutButton.pug";

const usernameMaxLength = 10;


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
    };

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
        const buttons = header.querySelectorAll(".navbar__menu-btn");
        if (!buttons.length) {
            return;
        }
        for (const button of buttons) {
            if (button.getAttribute("href") === buttonHref) {
                button.classList.add(".navbar__menu-btn_active");
            }
        }
    };

    /**
     * @description Делает все кнопки навигационной панели неактивными.
     */
    unactiveAllButtons = () => {
        const activeButtons = document.querySelectorAll(".navbar__menu-btn_active");
        if (!activeButtons) {
            return;
        }
        for (const button of activeButtons) {
            button.classList.remove("navbar__menu-btn_active");
        }
    };

    /**
     * @description Убирает кнопку выхода с навигационной панели
     */
    removeLogoutButton = () => {
        const logoutBtn = [...document.querySelectorAll(".vertival-menu__btn-container a")]
        .find((elem) => elem.textContent.includes("Выйти"));
        if (logoutBtn) {
            logoutBtn.remove();
        }
    };

    /**
     * @description Отрисовывает кнопку авторизации в навигационной панели.
     */
    renderLoginButton = () => {
        const userBlock = document.querySelector(".user-block");
        if (!userBlock) {
            return;
        }
        userBlock.replaceWith(createElementFromHTML(loginButton()));
    };

    /**
     * @description Отрисовывает блок навигационной панели, 
     * предназначенный для информации пользователя: в зависимости от 
     * ситуации, отрисовывает приглашение ко выходу или кнопку выхода.
     */
    renderUserBlock = () => {
        const changeBlock = document.querySelector(".navbar__login-btn") ||
            document.querySelector(".user-block");
        if (!authModule.user || !changeBlock) {
            return;
        }
        userBlock();
        changeBlock.replaceWith(createElementFromHTML(userBlock({
            imgSrc: authModule.user.avatarSrc,
            userID: authModule.user.ID,
            profileHref: routes.profilePage,
        })));
        const verticalMenu = document.querySelector(".vertical-menu__btn-container");
        if (verticalMenu) {
            const logoutBtn = document.querySelector(".vertical-logout-btn");
            if (logoutBtn) {
                return;
            }
            verticalMenu.appendChild(createElementFromHTML(logoutButton()));
        }
        this.addEventListenerToLogoutButton();
    };

    /**
     * @description Добавляет обработчик события для нажатия на 
     * кнопку выхода из аккаунта (заменяет на приглашение ко входу).
     */
    addEventListenerToLogoutButton = () => {
        const logoutButton = document.querySelectorAll(".user-block__logout-btn");
        if (!logoutButton || !logoutButton.length) {
            return;
        }
        logoutButton.forEach((button) => { 
                button.addEventListener("click", (e) => {
                this.removeLogoutButton();
                this.renderLoginButton();
                this.eventBus.emit(events.header.logout);
            });
        });
    };

    /**
     * @description Находит и удаляет кнопку выхода из аккаунта 
     * из вертикального меню.
     */
    removeLogoutButton = () => {
        const logoutButton = [...document.querySelectorAll("vertical-menu__btn-container a")]
            .find((button) => button.textContent.includes("Выйти"));
        if (logoutButton) {
            logoutButton.remove();
        }
    };


    /**
     * @description Находит и возвращает элемент навигационной панели.
     * @returns { HTMLDivElement } Элемент навигационной панели
     */
    getHeaderFromDOM = () => {
        return document.querySelector(".navbar");
    };

    addEventListenerToResize = () => {
        // TODO
    };
    
    addEventListenerToSearch = () => {
        // TODO
    };

    addEventListenerToVerticalMenu = () => {
        // TODO
    };

    
};