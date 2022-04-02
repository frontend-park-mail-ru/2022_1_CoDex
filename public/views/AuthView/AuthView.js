import { BaseView } from "../BaseView/BaseView.js"
import authContent from "../../components/auth/auth.pug";
import { events } from "../../consts/events.js";
import { authFormName, authConfig } from "../../consts/auth.js";

/**
 * @description Класс представления страницы авторизации / регистрации.
 */
export class AuthView extends BaseView {
    /**
     * @description Создаёт представление страницы 
     * авторизации / регистрации.
     * @param { EventBus } eventBus Глобальная шина событий
     * @param { Object } data Данные, необходимые для создания представления
     */
    constructor(eventBus, {data={}} = {}) {
        super(eventBus, data);
    }

    /**
     * @description Отправляет на глобальную шину событий событие отрисовки 
     * контента страницы. 
     */
    emitGetContent = () => {
        this.eventBus.emit(events.authPage.getContent, this.routeData)
    }

    /**
     * @description Отрисовывает контент страницы авторизации / регистрации.
     * @param { Object } data Данные для формы авторизации / регистрации: 
     * количество полей ввода и их названия
     */
    renderContent = (data) => {
        this._data = data;
        const template = authContent(this._data);
        const content = document.querySelector(".content");
        if (content) {
            content.innerHTML = template;
            this.addValidateListeners();
            this.addSubmitListener();
        } else {
            this.eventBus.emit(events.app.errorPage);
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
                this.deleteSubmitError();
            });
            input.addEventListener("change", () => {
                this.eventBus.emit(events.authPage.validate, 
                    input.name, input.value, input.name === 
                    authConfig.repeatePasswordInput.name) ?
                    this.getAuthDOMForm()?.[authConfig.passwordInput.name].value :
                    ""
            });
            input.addEventListener("animationend", () => {
                input.classList.remove("auth-error-input_animated");
            })
        }
    };

    /**
     * @description Получает форму авторизации / регистрации из DOM.
     * @returns { HTMLFormElement } Форма авторизации / регистрации.
     */
    getAuthDOMForm = () => {
        return document.forms[authFormName];
    };

    addSubmitError = (message) => {
        this.deleteSubmitError();
        const error = document.querySelector(".auth__btn__error");
        if (error) {
            error.textContent = message;
        }
    };

    /**
     * @description Очищает ошибку входа / регистрации 
     * (над кнопкой отправления формы).
     */
    deleteSubmitError = () => {
        const error = document.querySelector(".auth__btn__error");
        if (error) {
            error.textContent = "";
        }
    };

    /**
     * @description Добавляет обработчик событий (нажатия) на 
     * кнопку отправки данных в форме авторизации / регистрации.
     */
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
            this.eventBus.emit(events.authPage.submit, inputData, this.routeData);  
        });
    };

    /**
     * @description Добавляет сообщение об ошибке для конкретного поля ввода.
     * @param { string } inputName Название поля ввода
     * @param { string } errorMessage Сообщение об ошибке
     */
    addErrorMessage = (inputName, errorMessage) => {
        const authForm = this.getAuthDOMForm();
        const errorField = document.getElementsByClassName(`auth-input__head__error ${inputName}`)[0];
        if (!inputName || !errorMessage || !authForm || !errorField) {
            return;
        }
        const errorInput = authForm[inputName];
        errorInput.classList.add("error");
        errorField.textContent = errorMessage;
    }

    /**
     * @description Удаляет сообщение об ошибке для конкретного поля ввода.
     * @param { string } inputName Название поля ввода
     */
    deleteErrorMessage = (inputName) => {
        const authForm = this.getAuthDOMForm();
        const errorField = document.getElementsByClassName(`auth-input__head__error ${inputName}`)[0];
        if (!inputName || !authForm || !errorField) {
            return;
        }
        const errorInput = authForm[inputName];
        errorInput.classList.remove("error");
        errorField.textContent = "";
    }


}