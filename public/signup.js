import { ajax } from './main.js';

export function createInput(type, text, name) {
    const input = document.createElement('input');
    input.type = type;
    input.name = name;
    input.placeholder = text;

    return input;
}

export function signupPage(warning = 0) {
    root.innerHTML = '';
    const div = document.createElement("div");
    div.classList.add("container");

    const backForm = document.createElement('form');
    backForm.action = "http://0.0.0.0:3000";
    div.appendChild(backForm);

    const backBtn = document.createElement("Button");
    backBtn.classList.add("back");
    backBtn.type = "submit";
    backBtn.innerHTML = "🠈 Back";
    backForm.appendChild(backBtn);

    const pageLabel = document.createElement("h1");
    pageLabel.innerHTML = "<center>Регистрация</center>";
    div.appendChild(pageLabel);

    const descriptionLabel = document.createElement("p");
    descriptionLabel.innerHTML = "Пожалуйста, заполните эту форму, чтобы создать аккаунт";
    div.appendChild(descriptionLabel);

    const h = document.createElement("hr");
    div.appendChild(h);

    const form = document.createElement('form');
    h.appendChild(form);

    const emailLabel = document.createElement("Label");
    emailLabel.innerHTML = "<b>E-mail</b>";
    emailLabel.setAttribute("for", "email");

    const emailInput = createInput('email', 'Введите e-mail', 'email');
    emailInput.name = "email";
    emailInput.type = "text";

    const passwordLabel = document.createElement("Label");
    passwordLabel.innerHTML = "<b>Пароль</b>";
    passwordLabel.setAttribute("for", "password");
    const passwordInput = createInput('password', 'Введите пароль', 'password');

    const repeatePasswordLabel = document.createElement("Label");
    repeatePasswordLabel.innerHTML = "<b>Повторите пароль</b>";
    repeatePasswordLabel.setAttribute("for", "repeatePassword");
    const repeatePasswordInput = createInput('password', 'Повторите пароль', 'repeatePassword');

    let warningLabel;
    if (warning == 1) {
        warningLabel = document.createElement("Label");
        warningLabel.classList.add("warning");
        warningLabel.innerHTML = "<p>Passwords are different</p>";
    } else if (warning == 2) {
        warningLabel = document.createElement("Label");
        warningLabel.classList.add("warning");
        warningLabel.innerHTML = "<p>User exists</p>";
    }


    const terms = document.createElement("p");
    terms.innerHTML = "Создавая аккаунт, Вы соглашаетесь с <a href=\"#\">Правилами и условиями</a>.";
    

    const submitBtn = document.createElement('Button');
    submitBtn.type = 'submit';
    submitBtn.classList.add("registerbtn");
    submitBtn.innerHTML = 'Зарегистрироваться';

    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(passwordLabel);
    form.appendChild(passwordInput);
    form.appendChild(repeatePasswordLabel);
    form.appendChild(repeatePasswordInput);
    if (warning != 0) {
        form.appendChild(warningLabel); 
    }
    form.appendChild(terms);
    form.appendChild(submitBtn);

    root.appendChild(div);

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = emailInput.value.trim();
        const password1 = passwordInput.value;
        const password2 = repeatePasswordInput.value;

        ajax(
            'POST',
            '/signup',
            { email, password1, password2 },
            (status => {
                if (status === 200) {
                    alert('All good');
                    // FilmPage(); //
                    return;
                }
                if (status === 400) {
                    alert('Invalid data bruh');
                    signupPage(0);
                    return;
                }
                if (status === 401) {
                    signupPage(1);
                    return;
                }
                if (status === 402) {
                    signupPage(2);
                    return;
                }
            })
        )
    });
}