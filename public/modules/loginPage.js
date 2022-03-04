import {clearContent} from '../utils/contentManipulate.js';
import {ajax} from '../utils/ajax.js';
import {createAuth} from '../components/auth/auth.js';

export function loginPage(warning = false) {
  const content = clearContent();

  const authContent = document.createElement('div');
  authContent.classList.add('login-content');
  const div = document.createElement('div');
  div.classList.add('login');

  const loginInvitation = document.createElement('div');
  loginInvitation.classList.add('login__invitation');
  loginInvitation.textContent = 'Войти';
  div.appendChild(loginInvitation);

  const signupInvitation = document.createElement('a');
  signupInvitation.href = '/signup';
  signupInvitation.dataset.section = 'signup';
  signupInvitation.textContent = 'Зарегистрироваться';

  const form = createAuth(true);
  div.appendChild(form);
  div.appendChild(signupInvitation);

  content.appendChild(div);

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    ajax(
        'POST',
        '/login',
        {email, password},
        ((status) => {
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
        }),
    );
  });
}
