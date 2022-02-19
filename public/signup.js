
export function createInput(type, text, name) {
	const input = document.createElement('input');
	input.type = type;
	input.name = name;
	input.placeholder = text;

	return input;
}

export function signupPage() {
	root.innerHTML = '';    
    const div = document.createElement("div");
    div.classList.add("container");
    
    const backForm = document.createElement('form');
    backForm.action="http://0.0.0.0:3000";
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

    const repeatPasswordLabel = document.createElement("Label");
    repeatPasswordLabel.innerHTML = "<b>Повторите пароль</b>";
    repeatPasswordLabel.setAttribute("for", "repeatePassword");
	const repeatePasswordInput = createInput('password', 'Повторите пароль', 'repeatePassword');


    const terms = document.createElement("p");
    terms.innerHTML = "Создавая аккаунт, Вы соглашаетесь с <a href=\"#\">Правилами и условиями</a>.";
    div.appendChild(terms);

	const submitBtn = document.createElement('Button');
	submitBtn.type = 'submit';
    submitBtn.classList.add("registerbtn");
	submitBtn.innerHTML = 'Зарегистрироваться';
    div.appendChild(submitBtn);

    



    form.appendChild(emailLabel);
	form.appendChild(emailInput);
    form.appendChild(passwordLabel);
	form.appendChild(passwordInput);
    form.appendChild(repeatPasswordLabel);
    form.appendChild(repeatePasswordInput);

	root.appendChild(div);
}