import { collectionsPage } from '../../modules/collectionsPage.js';
import {createElementFromHTML} from '../../utils/utils.js';
import { changeNavbarButton } from '../header/header.js';

export function createAuth(isLogin) {
  const params = {
    input: {
      isLogin: isLogin,
    },
  };
  const template = createElementFromHTML(auth(params));
  return template;
}

function deleteNodeError(currNode) {
  const prevNode = currNode.previousSibling;
  if (!prevNode) {
    return;
  }
  if (prevNode.classList.contains('error_text')) {
    currNode.parentNode.removeChild(prevNode);
  }
}

function createError(text) {
  const errorBlock = document.createElement('div');
  errorBlock.innerText = text;
  errorBlock.classList.add('error_text');
  return errorBlock;
} 

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

export function loginSubmit(e) {
  e.preventDefault();
  if (foundErrorFields(authForm)) {
    return;
  }
  const email = document.forms.authForm.email.value.trim();
  const password = document.forms.authForm.password.value.trim();
  Ajax.postFetch({
    url: 'https://teamprojectkinopoisk.herokuapp.com/api/v1/login', // TODO: наш url на логин, по типу https://codex.ru/api/user/login
    body: {email: email, password: password},
  }).then((response) => {
    if (response && response.status === 200) {
      changeNavbarButton();
      collectionsPage(response.parsedBody); // - TODO, когда сделаем интеграцию с сервером
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

export function signupSubmit(e) {
  e.preventDefault();
  if (foundErrorFields(authForm)) {
    return;
  }
  const email = document.forms.authForm.email.value.trim();
  const password = document.forms.authForm.password.value.trim();
  Ajax.postFetch({
    url: 'https://teamprojectkinopoisk.herokuapp.com/api/v1/signup', // TODO
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
