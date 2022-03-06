import {collectionsPage} from './modules/collectionsPage.js';
import {mainPage} from './modules/mainPage.js';
import {moviesPage} from './modules/moviesPage.js';
import {signupPage} from './modules/signupPage.js';
import {loginPage} from './modules/loginPage.js';
import { changeNavbarButton } from './components/header/header.js';

export const root = document.getElementById('root');

const configApp = {
  main: {
    href: '/',
    openMethod: mainPage,
  },
  signup: {
    href: '/signup',
    text: 'Зарегистрироваться',
    openMethod: signupPage,
  },
  login: {
    href: '/login',
    text: 'Войти',
    openMethod: loginPage,
  },
  collections: {
    href: '/collections',
    text: 'Подборки',
    openMethod: collectionsPage,
  },
  movies: {
    href: '/movies',
    text: 'Фильмы',
    openMethod: moviesPage,
  },
  logout: {
    href: '/logout',
    text: 'Выйти',
    openMethod: changeNavbarButton,
  }
};

mainPage();

root.addEventListener('click', (e) => {
  const {target} = e;

  if (target instanceof HTMLElement) {
    e.preventDefault();

    const {section} = target.dataset;
    if (section) {
      configApp[section].openMethod();
    }
  }
});
