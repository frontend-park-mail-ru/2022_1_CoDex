import { BaseModel } from "./BaseModel";
import { regularRoutes, routes } from "../consts/routes";
import { authConfig, authFormName, submitButtonName } from "../consts/authConfig";
import { events } from "../consts/events";
import { errorInfo, emptyField } from "../consts/errors";
import { login, register } from "../modules/connection";
import { statuses } from "../consts/statuses";
import EventBus from "@/modules/eventBus";
import { loginData, registerData, routerData } from "@/types";

/**
 * @description Класс модели страницы авторизации / регистрации.
 */
export class AuthModel extends BaseModel {
    private errorMessages: Map<string, Set<string>>;
    /**
     * @description Создаёт экземпляр страницы авторизации / регистрации.
     * @param { EventBus } eventBus Глобальная шина данных
     */
    constructor(eventBus: EventBus) {
        super(eventBus);
        this.errorMessages = new Map();
    }

    getContent = (routeData: routerData) => {
        if (routeData?.URL.match(regularRoutes.loginPage)) {
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
        Object.values(authConfig).forEach((value)=> {
            this.errorMessages.set(value.name, new Set());
        });
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
            this.eventBus.emit(events.pathChanged, { URL: `${redirect}` });
        }
    };

    /**
     * @description Отправляет ошибку конкретного поля на добавление.
     * @param { string } inputName Название поля ввода с ошибкой
     * @param { string } errorMessage Добавляемое ообщение об ошибке 
     */
    addError = (inputName: string, errorMessage: string) => {
        const inputErrors = this.errorMessages.get(inputName);
        if (!inputErrors?.has(errorMessage)) {
            this.eventBus.emit(events.authPage.addValidationError, inputName, errorMessage);
            inputErrors?.add(errorMessage);
        }
    };

    /**
     * @description Удаляет ошибку конкретного поля ввода.
     * @param { string } inputName Название поля ввода с ошибкой
     * @param { string } errorMessage Удаляемое сообщение об ошибке
     */
    deleteError = (inputName: string, errorMessage: string) => {
        const inputErrors = this.errorMessages.get(inputName);
        if (inputErrors?.has(errorMessage)) {
            this.eventBus.emit(events.authPage.deleteValidationError, inputName);
            inputErrors?.delete(errorMessage);
        }
    };

    /**
     * @description Удаляет все ошибки с конкретного поля ввода.
     * @param { string } inputName Названия поля ввода с ошибками
     */
    deleteAllErrors = (inputName: string) => {
        if (!inputName) {
            return;
        }
        let inputErrors = this.errorMessages.get(inputName);
        if (!inputErrors) { return; }
        for (const errorMessage of inputErrors) {
            this.deleteError(inputName, errorMessage);
        }
        const repeatePasswordName = authConfig.repeatePasswordInput.name;
        if (inputName === authConfig.passwordInput.name) {
            inputErrors = this.errorMessages.get(repeatePasswordName);
            if (!inputErrors) { return; }
            for (const errorMessage of inputErrors) {
                this.deleteError(repeatePasswordName, errorMessage);
            }
        }
    }

    /**
     * @description Отправляет и обрабатывает данные об авторизации.
     * @param { object } inputsData Данные об авторизации.
     */
    submitLogin = (inputsData: loginData) => {
        if (!inputsData || this.hasErrors(inputsData)) {
            return;
        }
        login(inputsData).then((response) => {
            if (!response) {
                return;
            }
            if (response.status === statuses.OK && response.parsedResponse?.ID) {
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
    submitRegister = (inputsData: registerData) => {
        if (!inputsData || this.hasErrors(inputsData)) {
            return;
        }
        register(inputsData).then((response) => {
            if (!response) {
                return;
            }
            if (response.status === statuses.OK && response.parsedResponse?.ID) {
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
    hasErrors = (inputsData: loginData | registerData) => {
        if (!inputsData) {
            return true;
        }
        let result = false;
        Object.entries(inputsData).forEach(([inputName, inputValue]) => {
            this.validateSingleInput(inputName, inputValue);
            if (this.errorMessages.get(inputName)?.size) {
                this.eventBus.emit(events.authPage.wrongInput, inputName);
                result = true;
            }
        });
        return result;
    };

    /**
     * @description Проверяет указанное поле ввода на корректность.
     * @param { string } inputName Имя проверяемого поля ввода
     * @param { string } inputValue Значение проверяемого поля ввода
     */
    validateSingleInput = (inputName: string, inputValue: string) => {
        if (!inputName) { return; }
        if (!inputValue) {
            this.addError(inputName, emptyField.message);
            return;
        }
        this.deleteError(inputName, emptyField.message);
        for (const error of (errorInfo[inputName])) {
            if (error.regexp.toString() != (/empty/).toString() && !inputValue.match(error.regexp)) {
                this.addError(inputName, error.message)
            } else if (error.regexp.toString() == (/empty/).toString() && inputName === 
                authConfig.repeatePasswordInput.name) {
                const authForm = document.forms.namedItem(authFormName);
                if (!authForm) { return; }
                let passwordValue = "";
                for (const input of Object.values(authForm)) {
                    const formInput = <HTMLFormElement> input;
                    if (formInput.name === authConfig.passwordInput.name) {
                        passwordValue = <string> formInput.value;
                    }
                }
                if (inputValue !== passwordValue) {
                    this.addError(inputName, error.message);
                } else {
                    this.deleteError(inputName, error.message)
                }
            } else {
                this.deleteError(inputName, error.message);
            }
        }
    };
}
