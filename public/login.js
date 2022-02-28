import { createInput } from './signup.js';
import { ajax } from './main.js';
import { clearContent } from './menu.js';

export function loginPage(warning = false) {
    const content = clearContent();

    const authContent = document.createElement("div");
    authContent.classList.add("login-content");
    const div = document.createElement("div");
    div.classList.add("login");

    const loginInvitation = document.createElement("div");
    loginInvitation.classList.add("login__invitation");
    loginInvitation.textContent = "Войти";
    div.appendChild(loginInvitation);

    const form = document.createElement('form');
    form.classList.add("login__form");
    div.appendChild(form);

    const signupInvitation = document.createElement("a");
    signupInvitation.href = "/signup";
    signupInvitation.dataset.section = "signup";
    signupInvitation.textContent = "Зарегистрироваться";

    div.appendChild(signupInvitation);
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

    const loginButton = document.createElement("input");
    loginButton.type = "button";
    loginButton.value = "Войти";
    loginButton.name = "submitBtn";
    loginButton.classList.add("login__btn");
    form.appendChild(loginButton);

    // let emailLabelWarning;
    // if (warning) {
    //     emailLabelWarning = document.createElement("Label");
    //     emailLabelWarning.classList.add("warning");
    //     emailLabelWarning.innerHTML = '<p>wrong data (login or password)</p>';
    // }

    // const submitBtn = document.createElement('Button');
    // submitBtn.type = 'submit';
    // submitBtn.classList.add("registerbtn");
    // submitBtn.innerHTML = 'Войти';

    // form.appendChild(emailLabel);
    // form.appendChild(emailInput);
    // form.appendChild(passwordLabel);
    // form.appendChild(passwordInput);
    // if (warning) {
    //     form.appendChild(emailLabelWarning);
    // }
    // form.appendChild(submitBtn);

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
