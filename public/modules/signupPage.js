import { ajax } from '../utils/ajax.js';
import { clearContent } from '../utils/contentManipulate.js';
import { createAuth, addInputListeners, signupSubmit } from '../components/auth/auth.js';

export function signupPage(warning = 0) {
  const content = clearContent();

  const signupContent = document.createElement('div');
  signupContent.classList.add('signup-content');
  const div = document.createElement('div');
  div.classList.add('signup');

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
  loginInvitation.textContent = 'Уже есть аккаунт?';

  div.appendChild(form);
  div.appendChild(loginInvitation);
  content.appendChild(div);
}
