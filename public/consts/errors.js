import { authConfig } from "./auth.js";

export const errorMessages = {
    [authConfig.emailInput.name]: [{
        message: 'Неправильный email!',
        regexp: new RegExp('^[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)' +
            '*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$', 'i'),
    }],
    [authConfig.passwordInput.name]: [{
        message: 'Пароль должен содержать хотя бы 1 цифру!',
        regexp: /(?=.*[0-9])/,
    }, {
        message: 'Пароль должен содержать хотя бы 1 латинскую букву!',
        regexp: /(?=.*[A-z])/,
    }, {
        message: 'Пароль должен содержать хотя бы 8 символов!',
        regexp: /[а-яА-Яa-zA-Z0-9]{8,}/,
    }],
    [authConfig.repeatePasswordInput.name]: [{
        message: 'Пароли не совпадают!',
    }],
    [authConfig.nameInput.name]: [{
        message: 'Количество символов больше 30 или введены небуквенные символы!',
        regexp: /^[^0-9_!.,\-¡?÷¿/\\+=@#$%ˆ&*(){}| ~<>;:[\]]{0,30}$/,
    }],
    emptyField: {
        message: 'Заполните поле!',
    },
}
