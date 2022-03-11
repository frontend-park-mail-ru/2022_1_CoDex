import {collectionsPage} from '../../modules/collectionsPage.js';
import {createElementFromHTML} from '../../utils/utils.js';
import {changeNavbarButton} from '../header/header.js';
import {URL, emailRegularCheck, passwordRegularCheck, numberRegularCheck, englishRegularCheck, countRegularCheck, CREATED, OK, russianRegularCheck} from '../../utils/consts.js';

/**
 * @param { bool } isLogin - Является ли форма формой авторизации
 * @return { form } - Возвращает форму авторизации / регистрации.
 * @description Создаёт и возвращает форму авторизации, если isLogin === true, иначе
 * создаёт и возвращает форму регистрации.
 *
 */
export function createAuth(isLogin) {
  const params = {
    input: {
      isLogin: isLogin,
    },
  };
  const template = createElementFromHTML(auth(params));
  return template;
}

function isRepeatPasswordError(input) {
  return input.value !== authForm.password.value && authForm.password.value != "" && !authForm.password.classList.contains("error");
}

function InputClearListener() {
  const authForm = document.authForm;
  const formTextInputs = authForm.querySelectorAll('.auth_input');
  for (const input of formTextInputs) {
    if (input.value == "") {
      input.classList.remove("error");
      switch (input.name) {
        case 'name': {
          const error = document.getElementById('auth_name_error');
          error.textContent = '';
        }
        case 'email': {
          const error = document.getElementById('auth_email_error');
          error.textContent = '';
        }
        case 'password': {
          let error = document.getElementById('auth_password_error');
          error.textContent = '';
          document.authForm.repeatPassword.classList.remove("error");
          error = document.getElementById('auth_repeat_password_error');
          error.textContent = '';
        }
        case 'repeatPassword': {
          const error = document.getElementById('auth_repeat_password_error');
          error.textContent = '';
        }
      }
    }
  }
}

function InputListener() {
  const authForm = document.authForm;
  const formTextInputs = authForm.querySelectorAll('.auth_input');
  for (const input of formTextInputs) {
    switch (input.name) {
      case 'email': {
        if (!input.value.match(emailRegularCheck) && input.value != '') {
          input.classList.add('error');
          const err = document.getElementById('auth_email_error');
          err.textContent = 'Неправильный email!';
        } else {
          input.classList.remove('error');
          const err = document.getElementById('auth_email_error');
          err.textContent = '';
        }
        break;
      }
      case 'password': {
        let errorText = '';
        if (!input.value.match(passwordRegularCheck) && input.value != '') {
          input.classList.add('error');
          if (!input.value.match(numberRegularCheck)) {
            errorText='Пароль должен содержать хотя бы 1 цифру!';
          } else if (!input.value.match(englishRegularCheck)) {
            errorText='Пароль должен содержать хотя бы 1 латинскую букву!';
          } else if (!input.value.match(countRegularCheck)) {
            errorText='Пароль должен содержать хотя бы 8 символов!';
          }
        } else {
          input.classList.remove("error");
        }
        const err = document.getElementById('auth_password_error');
        err.textContent = errorText;
        break;
      }
      case 'repeatPassword': {
        if (input.value != '' && isRepeatPasswordError(input)) {
          input.classList.add('error');
          const err = document.getElementById('auth_repeat_password_error');
          err.textContent = 'Пароли не совпадают!';
        } else {
          input.classList.remove("error");
          const err = document.getElementById('auth_repeat_password_error');
          err.textContent = '';
        }
        break;
      }
      case 'name': {
        if (!(input.value.match(englishRegularCheck) || input.value.match(russianRegularCheck)) && input.value != '') {
          input.classList.add('error');
          const error = document.getElementById('auth_name_error');
          error.textContent = 'Введите своё имя на русском или английском языке';
        } else {
          input.classList.remove("error");
          const error = document.getElementById('auth_name_error');
          error.textContent = '';
        }
        break;
      }
      default: {
      }
    }
  }
}

/**
 * @param { form } authForm HTML-форма, поля которой будут проверяться
 * @description Проверяет поля ввода переданной формы:
 * поля ввода email должны быть email-адресом;
 * поля ввода password должны содержать 8 символов, а также хотя бы 1 цифру и латинскую букву.
 */
export function addInputListeners(authForm) {
  const formTextInputs = authForm.querySelectorAll('.auth_input');
  for (const input of formTextInputs) {
    input.addEventListener('focusin', InputListener);
    input.addEventListener('focusout', InputListener);
    input.addEventListener('keydown', InputClearListener);
  }
}


/**
 * @param { form } form Форма, которую будем проверять
 * @return { bool } True, если форма содержит ошибки.
 * @description Проверяет каждое input-поле формы на предмет ошибки. Если
 * ошибка есть, добавляет класс animated полю input, а также добавляет сообщение об ошибке.
 */
function foundErrorFields(form) {
  let flag = false;
  const authInput = form.querySelectorAll('.auth_input');
  authInput.forEach((input) => {
    switch (input.name) {
      case 'email': {
        let errorText = '';
        if (!input.value.match(emailRegularCheck) || input.value == "") {
          input.classList.add('error');
          flag = false;
          if (input.value == "")
            errorText = 'Поле не заполнено!';
          else
            errorText = 'Неправильный email!';
        } else {
          input.classList.remove("error");
        }
        const err = document.getElementById('auth_email_error');
        err.textContent = errorText;
        break;
      }
      case 'password': {
        let errorText = '';
        if (!input.value.match(passwordRegularCheck) || input.value == '') {
          input.classList.add('error');
          flag = false;
          if (input.value == "") {
            errorText = "Поле не заполнено!";
          } else if (!input.value.match(numberRegularCheck)) {
            errorText='Пароль должен содержать хотя бы 1 цифру!';
          } else if (!input.value.match(englishRegularCheck)) {
            errorText='Пароль должен содержать хотя бы 1 латинскую букву!';
          } else if (!input.value.match(countRegularCheck)) {
            errorText='Пароль должен содержать хотя бы 8 символов!';
          }
        } else {
          input.classList.remove("error");
        }
        const err = document.getElementById('auth_password_error');
        err.textContent = errorText;
        break;
      }
      case 'repeatPassword': {
        let errorText = '';
        if (input.value == "" || isRepeatPasswordError(input)) {
          input.classList.add('error');
          flag = false;
          if (input.value == "") {
            errorText = "Поле не заполнено!";
          } else {
            errorText = 'Пароли не совпадают!';
          }
        } else {
          input.classList.remove("error");
        }
        const err = document.getElementById('auth_repeat_password_error');
        err.textContent = errorText;
        break;
      }
      case 'name': {
        let errorText = '';
        if (input.value == "" || !(input.value.match(englishRegularCheck) || input.value.match(russianRegularCheck))) {
          input.classList.add('error');
          if (input.value == "") {
            errorText = "Поле не заполнено!";
          } else {
            errorText = "Введите своё имя на русском или английском языке";
          }
        } else {
          input.classList.remove("error");
        }
        const err = document.getElementById('auth_name_error');
        err.textContent = errorText;
        break;
      }
      default: {
      }
    }
  });
  return flag;
}


/**
 * @param { event } e - перехваченное событие
 * @description Обрабатывает отправку данных из формы авторизации. Проверяет поля ввода, в
 * случае успеха отправляет запрос на сервер. В случае успеха перенаправляет на следующую страницу,
 * иначе показывает сообщение об ошибке.
 */
export function loginSubmit(e) {
  e.preventDefault();
  if (foundErrorFields(authForm)) {
    return;
  }
  const email = document.forms.authForm.email.value.trim();
  const password = document.forms.authForm.password.value.trim();
  Ajax.postFetch({
    url: `${URL}/api/v1/login`,
    body: {email: email, password: password},
  }).then((response) => {
    if (response && response.status === OK) {
      changeNavbarButton();
      collectionsPage();
      return;
    } else if (!(e.target.previousElementSibling.classList.contains('error_mes'))) {
      const error = document.getElementById('auth_btn_error');
      error.textContent = 'Неправильный логин или пароль!';
    }
  });
}

/**
 * @param { event } e - перехваченное событие
 * @description Обрабатывает отправку данных из формы регистрации. Проверяет поля ввода, в
 * случае успеха отправляет запрос на сервер. В случае успеха перенаправляет на следующую страницу,
 * иначе показывает сообщение об ошибке.
 */
export function signupSubmit(e) {
  e.preventDefault();
  if (foundErrorFields(authForm)) {
    return;
  }
  const name = document.forms.authForm.name.value.trim();
  const email = document.forms.authForm.email.value.trim();
  const password = document.forms.authForm.password.value.trim();
  const secondPassword = document.forms.authForm.repeatPassword.value.trim();
  Ajax.postFetch({
    url: `${URL}/api/v1/signup`,
    body: {username: name, password: password, repeatpassword: secondPassword, email: email},
  }).then((response) => {
    if (response && response.status === CREATED) {
      changeNavbarButton();
      collectionsPage(response.parsedBody);
      return;
    } else if (!(e.target.previousElementSibling.classList.contains('error_mes'))) {
      const error = document.createElement('div');
      error.classList.add('error_mes');
      error.innerText = 'Такой пользователь уже существует!';
      e.target.parentNode.insertBefore(error, e.target);
    }
  });
}
