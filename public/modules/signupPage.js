import { ajax } from "../utils/ajax.js";
import { clearContent } from "../utils/contentManipulate.js";

export function createInput(type, text, name) {
    const input = document.createElement('input');
    input.type = type;
    input.name = name;
    input.placeholder = text;

    return input;
}

export function signupPage(warning = 0) {
    const content = clearContent();

    const signupContent = document.createElement("div");
    signupContent.classList.add("signup-content");
    const div = document.createElement("div");
    div.classList.add("signup");

    const signupInvitation = document.createElement("div");
    signupInvitation.classList.add("signup__invitation");
    signupInvitation.textContent = "Зарегистрироваться";
    div.appendChild(signupInvitation);

    const form = document.createElement('form');
    form.classList.add("signup__form");
    div.appendChild(form);

    const emailLabel = document.createElement("Label");
    emailLabel.textContent = "Email";
    emailLabel.classList.add("text_inputs__label");
    emailLabel.setAttribute("for", "email");

    const emailInput = createInput('email', 'Введите e-mail', 'email');
    emailInput.classList.add("text_inputs");
    emailInput.name = "email";
    emailInput.type = "email";

    form.appendChild(emailLabel);
    form.appendChild(emailInput);

    const passwordLabel = document.createElement("Label");
    passwordLabel.classList.add("text_inputs__label");
    passwordLabel.textContent = "Пароль";
    passwordLabel.setAttribute("for", "password");
    const passwordInput = createInput('password', 'Введите пароль', 'password');
    passwordInput.classList.add("text_inputs");
    
    form.appendChild(passwordLabel);
    form.appendChild(passwordInput);
    
    const repeatPasswordLabel = document.createElement("Label");
    repeatPasswordLabel.classList.add("text_inputs__label");
    repeatPasswordLabel.textContent = "Повторите пароль";
    repeatPasswordLabel.setAttribute("for", "repeatPassword");
    const repeatPasswordInput = createInput('password', 'Введите пароль', 'repeatPassword');
    repeatPasswordInput.classList.add("text_inputs");
    form.appendChild(repeatPasswordLabel);
    form.appendChild(repeatPasswordInput);
    const loginButton = document.createElement("input");
    loginButton.type = "button";
    loginButton.value = "Войти";
    loginButton.name = "submitBtn";
    loginButton.classList.add("login__btn");
    form.appendChild(loginButton);

    content.appendChild(div);
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        const password = passwordInput.value;

        ajax(
            'POST',
            '/login',
            { email, password },
            (status => {
                if (status === 200) {
                    alert('All good');
                    // FilmPage(); //
                    return;
                }
                if (status === 400) {
                    alert('Input ur data bruh');
                    loginPage(false);
                    return;
                }
                if (status === 401) {
                    loginPage(true);
                    return;
                }
            })
        )
    });
}
