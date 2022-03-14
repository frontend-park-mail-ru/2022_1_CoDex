import { collectionsPage } from '../../modules/collectionsPage.js';
import { createElementFromHTML } from '../../utils/utils.js';
import { changeNavbarButton } from '../header/header.js';
import {
  URL, emailRegularCheck, passwordRegularCheck,
  numberRegularCheck, englishRegularCheck, countRegularCheck,
  CREATED, OK, russianRegularCheck
} from '../../utils/consts.js';

/**
 * @param { bool } isLogin - Является ли форма формой авторизации
 * @return { HTMLFormElement } - Возвращает форму авторизации / регистрации.
 * @description Создаёт и возвращает форму авторизации, если isLogin === true,
 * иначе создаёт и возвращает форму регистрации.
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

/**
 * @param { HTMLInputElement } input Поле повторного ввода пароля
 * @return { boolean } Корректность содержимого переданного поля
 * @description Проверяет содержимое переданного поля повторного
 * ввода пароля на корректность. Содержимое корректно, если в
 * полях ввода пароля и повторного пароля одинаковое, непустое и
 * корректное с точки зрения семантики содержимое.
 * Пароль является корректным, если в нём не меньше 8 символов,
 * не меньше одной цифры и не меньше одной буквы.
 */
function isRepeatPasswordError(input) {
  return input.value !== document.authForm.password.value &&
    document.authForm.password.value != '' &&
    !document.authForm.password.classList.contains('error');
}

/**
 * @description Добавляет обработчик ввода на каждое поле,
 * являющееся классом auth_input.
 *
 * Принцип работы обработчика: если значение поле пусто, то
 * оно перестаёт помечаться как содержащее ошибку.
 */
function InputClearListener() {
  const authForm = document.authForm;
  const formTextInputs = authForm.querySelectorAll('.auth_input');
  for (const input of formTextInputs) {
    if (input.value == '') {
      input.classList.remove('error');
      switch (input.name) {
        case 'name': {
          const error = document.getElementById('auth-name-error');
          error.textContent = '';
          break;
        }
        case 'email': {
          const error = document.getElementById('auth-email-error');
          error.textContent = '';
          break;
        }
        case 'password': {
          let error = document.getElementById('auth-password-error');
          error.textContent = '';
          error = document.getElementById('auth-repeat-password-error');
          error.textContent = '';
          break;
        }
        case 'repeatPassword': {
          const error = document.getElementById('auth-repeat-password-error');
          error.textContent = '';
          break;
        }
      }
    }
  }
}

/**
 * @description Обработчик для всех полей ввода, являющихся
 * классом auth_input. Когда, вызвано, для каждого поля ввода проверяет:
 * для поля email - что в нём находится корректный адрес,
 * для поля password - что пароль подходит под требования
 * (>= 8 символов, >= 1 цифра, >= 1 буква),
 * для поля repeatPassword - что его содержимое совпадает с содержимым
 * поля password,
 * для поля name - что в нём находится имя
 * (одно слово на русском или английском языке).
 */
function InputListener() {
  const authForm = document.authForm;
  const formTextInputs = authForm.querySelectorAll('.auth_input');
  for (const input of formTextInputs) {
    let errorText = '';
    switch (input.name) {
      case 'email': {
        if (!input.value.match(emailRegularCheck) && input.value != '') {
          input.classList.add('error');
          input.classList.remove('correct-input');
          errorText = 'Неправильный email';
        } else if (input.value != '') {
          input.classList.remove('error');
          input.classList.add('correct-input');
        } else {
          input.classList.remove('correct-input');
        }
        const err = document.getElementById('auth-email-error');
        err.textContent = errorText;
        break;
      }
      case 'password': {
        if (!input.value.match(passwordRegularCheck) && input.value != '') {
          input.classList.add('error');
          input.classList.remove('correct-input');
          errorText = 'Пароль должен содержать хотя бы 1 цифру, 1 латинскую букву и быть длиной не менее 8 символов!';
        } else if (input.value != '') {
          input.classList.remove('error');
          input.classList.add('correct-input');
        } else {
          input.classList.remove('correct-input');
        }
        const err = document.getElementById('auth-password-error');
        err.textContent = errorText;
        break;
      }
      case 'repeatPassword': {
        if (input.value != '' && isRepeatPasswordError(input)) {
          input.classList.add('error');
          input.classList.remove('correct-input');
          errorText = 'Пароли не совпадают';
        } else if (input.value != '') {
          input.classList.remove('error');
          input.classList.add('correct-input');
        } else {
          input.classList.remove('correct-input');
        }
        const err = document.getElementById('auth-repeat-password-error');
        err.textContent = errorText;
        break;
      }
      case 'name': {
        if ((!input.value.match(englishRegularCheck) ||
          !input.value.match(russianRegularCheck)) && input.value.match(numberRegularCheck) && input.value != '') {
          input.classList.add('error');
          input.classList.remove('correct-input');
          const error = document.getElementById('auth-name-error');
          errorText = 'Введите своё имя на русском или английском языке без использования цифр';
        } else if (input.value != '') {
          input.classList.remove('error');
          input.classList.add('correct-input');

          const error = document.getElementById('auth-name-error');
          error.textContent = '';
        } else {
          input.classList.remove('correct-input');
        }
        const error = document.getElementById('auth-name-error');
        error.textContent = errorText;

        break;
      }
      default: {
      }
    }
  }
}

/**
 * @param { HTMLFormElement } authForm HTML-форма, поля которой будут проверяться
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
 * @param { HTMLFormElement } form Форма, которую будем проверять
 * @return { boolean } True, если форма содержит ошибки.
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
        if (!input.value.match(emailRegularCheck) || input.value == '') {
          input.classList.add('error');
          flag = true;
          if (input.value == '') {
            errorText = 'Поле не заполнено!';
          } else {
            errorText = 'Неправильный email!';
          }
        } else {
          input.classList.remove('error');
        }
        const err = document.getElementById('auth-email-error');
        err.textContent = errorText;
        break;
      }
      case 'password': {
        let errorText = '';
        if (!input.value.match(passwordRegularCheck) || input.value == '') {
          input.classList.add('error');
          flag = true;
          if (input.value == '') {
            errorText = 'Поле не заполнено!';
          } else if (!input.value.match(numberRegularCheck) || !input.value.match(englishRegularCheck) || !input.value.match(countRegularCheck)) {
            errorText = 'Пароль должен содержать хотя бы 1 цифру, 1 латинскую букву и быть длиной не менее 8 символов!';
          }
        } else {
          input.classList.remove('error');
        }
        const err = document.getElementById('auth-password-error');
        err.textContent = errorText;
        break;
      }
      case 'repeatPassword': {
        let errorText = '';
        if (input.value == '' || isRepeatPasswordError(input)) {
          input.classList.add('error');
          flag = true;
          if (input.value == '') {
            errorText = 'Поле не заполнено!';
          } else {
            errorText = 'Пароли не совпадают!';
          }
        } else {
          input.classList.remove('error');
        }
        const err = document.getElementById('auth-repeat-password-error');
        err.textContent = errorText;
        break;
      }
      case 'name': {
        let errorText = '';
        if (input.value == '' || !(input.value.match(englishRegularCheck) || input.value.match(russianRegularCheck))) {
          input.classList.add('error');
          flag = true;
          if (input.value == '') {
            errorText = 'Поле не заполнено!';
          } else {
            errorText = 'Введите своё имя на русском или английском языке';
          }
        } else {
          input.classList.remove('error');

        }
        const err = document.getElementById('auth-name-error');
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
 * @param { Event } e - перехваченное HTML событие
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
    body: { email: email, password: password },
  }).then((response) => {
    if (response && response.status === OK) {
      changeNavbarButton();
      collectionsPage();
      return;
    } else if (!(e.target.previousElementSibling.classList.contains('error_mes'))) {
      const error = document.getElementById('auth-btn-error');
      error.textContent = 'Неправильный логин или пароль!';
    }
  });
}

/**
 * @param { Event } e - перехваченное HTML событие
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
    body: { username: name, password: password, repeatpassword: secondPassword, email: email },
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
