import { collectionsPage } from '../../modules/collectionsPage.js';
import {createElementFromHTML} from '../../utils/utils.js';
import { changeNavbarButton } from '../header/header.js';

/**
 * @param { bool } isLogin - Является ли форма формой авторизации
 * @returns { form } - Возвращает форму авторизации / регистрации.
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

/**
 * @param { Node } currNode Элемент в DOM, относительно которого будет искаться сообщение
 *  об ошибке
 * @description Если перед currNode есть сообщение об ошибке, то удаляет элемент, содержащий
 * это сообщение.
 * 
 */
function deleteNodeError(currNode) {
  const prevNode = currNode.previousSibling;
  if (!prevNode) {
    return;
  }
  if (prevNode.classList.contains('error_text')) {
    currNode.parentNode.removeChild(prevNode);
  }
}

/**
 * @param { string } text Текст сообщения об ошибке
 * @returns { div } HTML Div, содержащий сообщение об ошибке.
 * @description Создаёт HTML Div, содержащий сообщение об ошибке.
 */
function createError(text) {
  const errorBlock = document.createElement('div');
  errorBlock.innerText = text;
  errorBlock.classList.add('error_text');
  return errorBlock;
} 

/**
 * @param { form } authForm HTML-форма, поля которой будут проверяться
 * @description Проверяет поля ввода переданной формы: 
 * поля ввода email должны быть email-адресом;
 * поля ввода password должны содержать 8 символов, а также хотя бы 1 цифру и латинскую букву.
 */
export function addInputListeners(authForm) {
  const formTextInputs = authForm.querySelectorAll('.text_inputs');
  for (const input of formTextInputs) {
    input.addEventListener('focusout', (e) => {
      deleteNodeError(input);
      switch (input.name) {
        case 'email': {
          if (!input.value.match(/\S+@\S+\.\S+/)) {
            input.classList.add('error');
            authForm.insertBefore(createError('Неправильный email!'), input);
          } else {
            input.classList.remove('error');
          }
          break;
        }
        case 'password': {
          let errorText = '';
          if (!input.value.match(/^(?=.*[0-9])(?=.*[A-z])[A-zА-я0-9]{8,}$/)) {
            input.classList.add('error');
            if (!input.value.match(/(?=.*[0-9])/)) {
              errorText='Пароль должен содержать хотя бы 1 цифру!';
            } else if (!input.value.match(/(?=.*[A-z])/)) {
              errorText='Пароль должен содержать хотя бы 1 латинскую букву!';
            } else if (!input.value.match(/[a-zA-Z0-9]{8,}/)) {
              errorText='Пароль должен содержать хотя бы 8 символов!';
            }
            authForm.insertBefore(createError(errorText), input);
          } else {
            input.classList.remove('error');
          }
          break;
        }
        case 'repeatPassword': {
          if (input.value !== authForm.password.value) {
            input.classList.add('error');
            authForm.insertBefore(createError('Пароли не совпадают!'), input);
          } else {
            input.classList.remove('error');
          }
          break;
        }
        default: {
        }
      }
    });
  }
}

/**
 * @param { form } form Форма, которую будем проверять
 * @returns { bool } True, если форма содержит ошибки.
 * @description Проверяет каждое input-поле формы на предмет ошибки. Если
 * ошибка есть, добавляет класс animated полю input, а также добавляет сообщение об ошибке.
 */
function foundErrorFields(form) {
  let flag = false;
  const formTextInputs = form.querySelectorAll('.text-inputs');
  for (const input of formTextInputs) {
    if (input.classList.contains('error')) {
      flag = true;
      input.classList.toggle('animated');
      continue;
    }
    if (input.value === '') {
      flag = true;
      input.classList.add('error');
      form.insertBefore(createError('Поле не заполнено!'), input);
      input.classList.toggle('animated');
    }
  }
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
    url: '/login', // TODO: наш url на логин, по типу https://codex.ru/api/user/login
    body: {email: email, password: password},
  }).then((response) => {
    if (response && response.status === 200) {
      changeNavbarButton();
      // collectionsPage(response.parsedBody); - TODO, когда сделаем интеграцию с сервером
      collectionsPage();
      return;
    } else if (!(e.target.previousElementSibling.classList.contains('error_mes'))){
      const error = document.createElement('div');
      error.classList.add('error_mes');
      error.innerText = 'Неправильный логин или пароль!';
      e.target.parentNode.insertBefore(error, e.target)
    }
  })
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
  const email = document.forms.authForm.email.value.trim();
  const password = document.forms.authForm.password.value.trim();
  Ajax.postFetch({
    url: '/signup', // TODO
    body: {email: email, password: password },
  }).then((response) => {
    if (response && response.status === 201) {
      changeNavbarButton();
      collectionsPage(response.parsedBody);
      return;
    } else if (!(e.target.previousElementSibling.classList.contains('error_mes'))){
      const error = document.createElement('div');
      error.classList.add('error_mes');
      error.innerText = 'Такой пользователь уже существует!';
      e.target.parentNode.insertBefore(error, e.target)
    }
  });
}
