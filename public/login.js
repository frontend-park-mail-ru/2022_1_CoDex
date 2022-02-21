import { createInput } from './signup.js';
import { ajax } from './main.js';

export function loginPage(warning = false) {
    root.innerHTML = '';
    const div = document.createElement("div");
    div.classList.add("container");

    const backForm = document.createElement('form');
    backForm.action = "http://0.0.0.0:3000";
    div.appendChild(backForm);

    const backBtn = document.createElement("Button");
    backBtn.classList.add("back");
    backBtn.type = "submit";
    backBtn.innerHTML = "🠈 Назад";
    backForm.appendChild(backBtn);

    const pageLabel = document.createElement("h1");
    pageLabel.innerHTML = "<center>Войти</center>";
    div.appendChild(pageLabel);

    const h = document.createElement("hr");
    div.appendChild(h);

    const form = document.createElement('form');
    h.appendChild(form);

    const emailLabel = document.createElement("Label");
    emailLabel.innerHTML = "<b>Email</b>";
    emailLabel.setAttribute("for", "email");

    const emailInput = createInput('email', 'Введите e-mail', 'email');
    emailInput.name = "email";
    emailInput.type = "text";

    const passwordLabel = document.createElement("Label");
    passwordLabel.innerHTML = "<b>Пароль</b>";
    passwordLabel.setAttribute("for", "password");
    const passwordInput = createInput('password', 'Введите пароль', 'password');

    let emailLabelWarning;
    if (warning) {
        emailLabelWarning = document.createElement("Label");
        emailLabelWarning.classList.add("warning");
        emailLabelWarning.innerHTML = '<p>wrong data (login or password)</p>';
    }

    const submitBtn = document.createElement('Button');
    submitBtn.type = 'submit';
    submitBtn.classList.add("registerbtn");
    submitBtn.innerHTML = 'Войти';

    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(passwordLabel);
    form.appendChild(passwordInput);
    if (warning) {
        form.appendChild(emailLabelWarning);
    }
    form.appendChild(submitBtn);

    root.appendChild(div);

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
