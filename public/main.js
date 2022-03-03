import { collectionsPage } from "./modules/collectionsPage.js";
import { mainPage } from "./modules/mainPage.js";
import { moviesPage } from "./modules/moviesPage.js";
import { profilePage } from "./modules/profilePage.js";
import { signupPage } from "./modules/signupPage.js";
import { loginPage } from "./modules/loginPage.js";

export const root = document.getElementById('root');

let configApp = {
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
	profile: {
		href: '/profile',
		text: 'Профиль',
		openMethod: profilePage,
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
