import {clearContent} from '../utils/contentManipulate.js';
import {createAuth, addInputListeners, signupSubmit}
  from '../components/auth/auth.js';

/** @module signupPage */

/**
 * @description Создаёт и отрисовывает страницу регистрации.
 * Предварительно очищает содержимое страницы. Поддерживает SPA.
 */
export function signupPage() {
  const content = clearContent();

  const authContent = document.createElement('div');
  authContent.classList.add('auth-content');
  const div = document.createElement('div');
  div.classList.add('signup');
  authContent.appendChild(div);

  const signupInvitation = document.createElement('div');
  signupInvitation.classList.add('signup__invitation');
  signupInvitation.textContent = 'Зарегистрироваться';
  div.appendChild(signupInvitation);

  const form = createAuth(false);

  addInputListeners(form);
  const signupBtn = form.submitBtn;
  signupBtn.addEventListener('click', signupSubmit );

  const loginInvitation = document.createElement('a');
  loginInvitation.href = '/login';
  loginInvitation.dataset.section = 'login';
  loginInvitation.classList.add('signup_login_invitation');
  loginInvitation.textContent = 'Уже есть аккаунт?';

  div.appendChild(form);
  div.appendChild(loginInvitation);
  content.appendChild(authContent);
}
