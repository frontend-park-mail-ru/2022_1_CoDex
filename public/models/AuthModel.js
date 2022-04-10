import { BaseModel } from "./BaseModel.js";
import { regularRoutes, routes } from "../consts/routes.js";
import { authConfig, authFormName, submitButtonName } from "../consts/auth.js";
import { events } from "../consts/events.js";
import { errorMessages } from "../consts/errors.js";
import { login, register } from "../modules/connection.js";
import { statuses } from "../consts/statuses.js";

/**
 * @description Класс модели страницы авторизации / регистрации.
 */
export class AuthModel extends BaseModel {
    /**
     * @description Создаёт экземпляр страницы авторизации / регистрации.
     * @param { EventBus } eventBus Глобальная шина данных
     */
    constructor(eventBus) {
        super(eventBus);
        this.errorMessages = new Map();
    }

    getContent = (URLData) => {
        if (URLData?.URL?.URL.match(regularRoutes.loginPage)) {
            this.getLoginContent();
        } else {
            this.getRegistrationContent();
        }
    }

    /**
     * @description Создаёт и отправляет на отрисовку контент
     * страницы авторизации.
     */
    getLoginContent = () => {
        this.errorMessages.clear();
        this.initErrorMessages();
        this.eventBus.emit(events.authPage.render.content, {
            inputs: [
                authConfig.emailInput,
                authConfig.passwordInput,
            ],
            authFormName: authFormName,
            submitButtonName: submitButtonName,
            login: true,
        });
    };
    
    /**
     * @description Инициализирует внутренний список ошибок.
     */
    initErrorMessages = () => {
        for (const input in authConfig) {
            this.errorMessages.set(authConfig[input].name, new Set());
        }
    };

    /**
     * @description Создаёт и отправляет на отрисовку контент страницы 
     * авторизации / регистрации.
     */
    getRegistrationContent = () => {
        this.errorMessages.clear();
        this.initErrorMessages();
        this.eventBus.emit(events.authPage.render.content, {
            inputs: [
                authConfig.nameInput,
                authConfig.emailInput,
                authConfig.passwordInput,
                authConfig.repeatePasswordInput,
            ],
            authFormName: authFormName,
            submitButtonName: submitButtonName,
            login: false,
        });
    };

    /**
     * @description Перенаправляет (если необходимо) на следующую страницу.
     */
    redirect = () => {
        const redirect = new URL(location.href).searchParams.get("redirect");
        if (!redirect) {
            this.eventBus.emit(events.pathChanged, { URL: routes.collectionsPage });
        } else {
            this.eventBus.emit(events.pathChanged, { URL: `/${redirect}` });
        }
    };

    /**
     * @description Отправляет ошибку конкретного поля на добавление.
     * @param { string } inputName Название поля ввода с ошибкой
     * @param { string } errorMessage Добавляемое ообщение об ошибке 
     */
    addError = (inputName, errorMessage) => {
        const inputErrors = this.errorMessages.get(inputName);
        if (!inputErrors.has(errorMessage)) {
            this.eventBus.emit(events.authPage.addValidationError, inputName, errorMessage);
            inputErrors.add(errorMessage);
        }
    };

    /**
     * @description Удаляет ошибку конкретного поля ввода.
     * @param { string } inputName Название поля ввода с ошибкой
     * @param { string } errorMessage Удаляемое сообщение об ошибке
     */
    deleteError = (inputName, errorMessage) => {
        const inputErrors = this.errorMessages.get(inputName);
        if (inputErrors.has(errorMessage)) {
            this.eventBus.emit(events.authPage.deleteValidationError, inputName);
            inputErrors.delete(errorMessage);
        }
    };

    /**
     * @description Удаляет все ошибки с конкретного поля ввода.
     * @param { string } inputName Названия поля ввода с ошибками
     */
    deleteAllErrors = (inputName) => {
        if (!inputName) {
            return;
        }
        for (const errorMessage of this.errorMessages.get(inputName)) {
            this.deleteError(inputName, errorMessage);
        }
    }

    /**
     * @desctiption Отправялет данные об авторизации / регистрации 
     * (в зависимости от URL-a).
     * @param { object } inputsData Данные об авторизациии / регистрации
     * @param { object } URLData Данные о текущей странице
     */
    submit = (inputsData = {}, URLData) => {
        if (this.hasErrors(inputsData)) {
            return;
        }
        if (URLData?.URL?.URL.match(regularRoutes.loginPage)) {
            this.submitLogin(inputsData);
        } else {
            this.submitRegister(inputsData);
        }
    };

    /**
     * @description Отправляет и обрабатывает данные об авторизации.
     * @param { object } inputsData Данные об авторизации.
     */
    submitLogin = (inputsData) => {
        if (!inputsData) {
            return;
        }
        login(inputsData).then((response) => {
            if (!response) {
                return;
            }
            if (response.status === statuses.OK) {
                this.eventBus.emit(events.authPage.logRegSuccess, 
                    response.parsedResponse);
                this.redirect();
            } else {
                this.eventBus.emit(events.authPage.submitError, 
                    "Неправильный email или пароль!");
            }
        }).catch(() => {
            this.eventBus.emit(events.app.errorPage);
        });
    }
    
    /**
     * @description Отправляет и обрабатывает данные об регистрации.
     * @param { object } inputsData Данные об регистрации.
     */
    submitRegister = (inputsData) => {
        if (!inputsData) {
            return;
        }
        register(inputsData).then((response) => {
            if (!response) {
                return;
            }
            if (response.status === statuses.AUTHORIZED) {
                this.eventBus.emit(events.authPage.logRegSuccess, 
                    response.parsedResponse);
                this.redirect();
            } else {
                this.eventBus.emit(events.authPage.submitError, 
                    "Пользователь с таким email уже существует!");
            }
        }).catch(() => {
            this.eventBus.emit(events.app.errorPage);
        });
    }

    /**
     * @description Проверяет, есть ли в форме авторизации / регистрации 
     * ошибки.
     * @param { object } Данные о полях ввода формы
     * @returns { boolean } Есть ли в форме ошибки
     */
    hasErrors = (inputsData) => {
        if (!inputsData) {
            return true;
        }
        let result = false;
        for (const inputName in inputsData) {
            this.validateSingleInput(inputName, inputsData[inputName]);
            if (this.errorMessages.get(inputName).size) {
                this.eventBus.emit(events.authPage.wrongInput, inputName);
                result = true;
            }
        }
        return result;
    };

    /**
     * @description Проверяет указанное поле ввода на корректность.
     * @param { string } inputName Имя проверяемого поля ввода
     * @param { string } inputValue Значение проверяемого поля ввода
     */
    validateSingleInput = (inputName, inputValue) => {
        if (!inputName) {
            return;
        }
        if (!inputValue) {
            this.addError(inputName, errorMessages.emptyField.message);
            return;
        }
        this.deleteError(inputName, errorMessages.emptyField.message);
        for (const error of errorMessages[inputName]) {
            if (error.regexp && !inputValue.match(error.regexp)) {
                this.addError(inputName, error.message)
            } else if (!error.regexp && inputName === 
                authConfig.repeatePasswordInput.name) {
                const authForm = document.forms[authFormName];
                let passwordValue = "";
                for (const input of authForm) {
                    if (input.name === authConfig.passwordInput.name) {
                        passwordValue = input.value;
                    }
                }
                if (inputValue !== passwordValue) {
                    this.addError(inputName, error.message);
                } else {
                    this.deleteError(inputName, error.message)
                }
            }
        }
    };
}
