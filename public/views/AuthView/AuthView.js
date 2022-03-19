import { authFormName } from "../../consts/auth.js";
import { BaseView } from "./BaseView/BaseView.js"
import { authContent } from "../..components/auth/auth.pug";
import { events } from "../../consts/events.js";
import { authFormName, authConfig } from "../../consts/auth.js";

/**
 * @description Класс представления страницы авторизации / регистрации.
 */
export class AuthView extends BaseView {
    constructor(eventBus, {data={}} = {}) {
        super(eventBus, data);
    }

    renderContent = (data) => {
        this._data = data;
        const template = authContent(this._data);
        const content = document.querySelector(".content");
        if (content) {
            content.innerHTML = template;
            this.addValidateListeners();
            // this.
        }
    };

    /**
     * @description Устанавливает обработчики событий на поля ввода 
     * в форме авторизации / регистрации (на снятие ошибок, на валидацию 
     * и на анимацию).
     */
    addValidateListeners = () => {
        const authForm = this.getAuthDOMForm();
        const textInputs = authForm?.querySelectorAll(".text-input");
        if (!authForm || !textInputs.length) {
            return;
        }
        for (const input of textInputs) {
            input.addEventListener("input", () => {
                this.eventBus.emit(events.authPage.deleteAllErrors, input.name);
                this.deleteNotAuthorizedError();
            });
            input.addEventListener("change", () => {
                this.eventBus.emit(events.authPage.validate, 
                    input.name, input.value, input.name === 
                    authConfig.repeatePasswordInput.name) ?
                    this.getAuthDOMForm()?.[authConfig.passwordInput.name].value :
                    ""
            });
            input.addEventListener("animationend", () => {
                input.className.remove("auth-error-input_animated");
            })
        }
    };

    /**
     * @description Получает форму авторизации / регистрации из DOM.
     * @returns { HTMLFormElement } Форма авторизации / регистрации.
     */
    getAuthDOMForm = () => {
        return document.forms[AuthFormName];
    }

    /**
     * @description Очищает ошибку входа / регистрации 
     * (над кнопкой отправления формы).
     */
    deleteNotAuthorizedError = () => {
        const error = document.querySelector(".auth__btn__error");
        if (error) {
            error.textContent = "";
        }
    }

    addSubmitListener = () => {
        const authForm = this.getAuthDOMForm();
        const submitBtn = document.querySelector(".auth__btn__input");
        if (!authForm || !submitBtn) {
            return;
        }
        submitBtn.addEventListener("click", (e) => {
            const textInputs = authForm.querySelectorAll(".text-input");
            if (!textInputs?.length) {
                return;
            }
            const inputData = {};
            for (const input of textInputs) {
                inputData[input.name] = input.value;
            }
            this.eventBus.emit(events.authPag)
        })
    }
}