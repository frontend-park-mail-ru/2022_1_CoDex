import { loginPage } from './login.js'
import { signupPage } from './signup.js';
import { profilePage } from './profile.js';

export let configApp = {
	menu: {
		href: '/menu',
		openMethod: menuPage,
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
	about: {
		href: '/about',
		text: 'Контакты',
	}
};

export function menuPage(   ) {
	root.innerHTML = '';

	const navbar = document.createElement("div");
	navbar.classList.add("nav-bar");
	root.appendChild(navbar);

	const menu = document.createElement("ul");
	menu.classList.add("menu");
	navbar.appendChild(menu);

	const main = document.createElement("li");
	menu.appendChild(main);
	const mainLabel = document.createElement("a");
	main.appendChild(mainLabel);
	mainLabel.href = "/menu";
	mainLabel.innerHTML = "<div>Кинопоиск</div>";

	const movies = document.createElement("li");
	menu.appendChild(movies);
	const moviesLabel = document.createElement("a");
	moviesLabel.href = "/menu"; // TODO
	moviesLabel.innerHTML = "<div>Фильмы</div>";
	movies.appendChild(moviesLabel);

	const moviesSubMenu = document.createElement("ul");
	moviesSubMenu.classList.add("sub-menu");
	movies.appendChild(moviesSubMenu);
	const top250 = document.createElement("li");
	moviesSubMenu.appendChild(top250);
	top250.innerHTML = "<a href=\"/menu\">Топ 250</a>"
	const top500 = document.createElement("li");
	moviesSubMenu.appendChild(top500);
	top500.innerHTML = "<a href=\"/menu\">Топ 500</a>"
	const ourChoice = document.createElement("li");
	moviesSubMenu.appendChild(ourChoice);
	ourChoice.innerHTML = "<a href=\"/menu\">Выбор редакции</a>"

	const signin = document.createElement("li");
	menu.appendChild(signin);
	const signinLabel = document.createElement("a");
	signinLabel.href = '/login';
	signinLabel.classList.add("menu");
	signinLabel.dataset.section = "login";
	signinLabel.innerHTML = "<div>Войти</div>";
	signin.appendChild(signinLabel);


	const signup = document.createElement("li");
	menu.appendChild(signup);
	const signupLabel = document.createElement("a");
	signupLabel.href = '/signup';
	signupLabel.classList.add("menu");
	signupLabel.dataset.section = "signup";
	signupLabel.innerHTML = "<div>Зарегистрироваться</div>";
	signup.appendChild(signupLabel);


	// Object
	// 	.entries(configApp)
	// 	.map(([key, {href, text}]) => {
	// 		if (!text) {
	// 			return ;
	// 		}
	// 		const menuElement = document.createElement('a');
	// 		menuElement.href = href;
	// 		menuElement.classList.add("menu");
	// 		menuElement.textContent = text;
	// 		menuElement.dataset.section = key;

	// 		return menuElement;
	// 	})
	// 	.forEach((element) => {
	// 		if (!element) {
	// 			return;
	// 		}
	// 		root.appendChild(element);
	// 	})
	// ;

}