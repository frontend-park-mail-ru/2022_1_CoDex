import {clearContent} from '../utils/contentManipulate.js';
import {createAuth, addInputListeners, loginSubmit} from '../components/auth/auth.js';

/**
 * @description Создаёт и отрисовывает страницу авторизации.
 * Предварительно очищает содержимое страницы. Поддерживает SPA.
 */
export function loginPage(warning = false) {
  const content = clearContent();

  const authContent = document.createElement('div');
  authContent.classList.add('auth-content');
  const div = document.createElement('div');
  div.classList.add('login');
  authContent.appendChild(div);

  const loginInvitation = document.createElement('div');
  loginInvitation.classList.add('login__invitation');
  loginInvitation.textContent = 'Войти';
  div.appendChild(loginInvitation);

  const signupInvitation = document.createElement('a');
  signupInvitation.classList.add('login_signup_invitation');
  signupInvitation.href = '/signup';
  signupInvitation.dataset.section = 'signup';
  signupInvitation.textContent = 'Нет аккаунта? Зарегистрироваться!';

  const form = createAuth(true);
  addInputListeners(form);
  const loginBtn = form.submitBtn;
  loginBtn.addEventListener('click', loginSubmit );

  div.appendChild(form);
  div.appendChild(signupInvitation);

  content.appendChild(authContent);
}
