import { authInputs } from "@/types";

export const authFormName = "authForm";
export const submitButtonName = "submitBtn";

export const authConfig: authInputs = {
    emailInput: {
        type: "email", 
        name: "email", 
        placeholder: "Введите e-mail", 
        title: "Email"
    },
    surnameInput: {
        type: "text", 
        name: "surname", 
        placeholder: "Введите фамилию", 
        title: "Фамилия"
    },
    nameInput: {
        type: "text", 
        name: "username", 
        placeholder: "Введите имя", 
        title: "Имя"
    },
    passwordInput: {
        type: "password", 
        name: "password", 
        placeholder: "Введите пароль", 
        title: "Пароль"
    },
    repeatePasswordInput: {
        type: "password", 
        name: "repeatpassword", 
        placeholder: "Повторите пароль", 
        title: "Повторите пароль"
    },
  };
