import { loginPage } from './login.js'
import { signupPage } from './signup.js';
import { profilePage } from './profile.js';
import { filmsPage } from './films.js';

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
	films: {
		href: '/films',
		text: 'Фильмы',
		openMethod: filmsPage,
	},
};

export function menuPage() {
	navbarRender();
	contentRender();
	footerRender();

}

export function navbarRender() {
	const navbar = document.createElement("header");
	navbar.id = "navbar";
	root.appendChild(navbar);

	const logo = document.createElement("a");
	logo.classList.add("navbar_logo");
	logo.innerHTML = `<img src="logo.svg"/>`;
	logo.href = "/";
	navbar.appendChild(logo);

	const menu = document.createElement("div");
	menu.classList.add("navbar_menu");
	navbar.appendChild(menu);

	const collection = document.createElement("a");
	collection.classList.add("navbar_menu_btn");
	menu.appendChild(collection);
	collection.href = "/films";
	collection.textContent = "Подборки";
	collection.dataset.section = "films";

	const genres = document.createElement("a");
	genres.classList.add("navbar_menu_btn");
	menu.appendChild(genres);
	genres.href = "/";
	genres.textContent = "Жанры";
	genres.dataset.section = "genres";

	const premieres = document.createElement("a");
	premieres.classList.add("navbar_menu_btn");
	menu.appendChild(premieres);
	premieres.href = "/";
	premieres.textContent = "Премьеры";
	premieres.dataset.section = "premieres";

	const search = document.createElement("div");
	search.classList.add("navbar_search");
	navbar.appendChild(search);	

	const login = document.createElement("a");
	login.classList.add("navbar_menu_login-btn");
	navbar.appendChild(login);
	login.href = "/login";
	login.textContent = "Войти";
	login.dataset.section = "login";
}
	
export function contentRender() {
	const content = document.createElement("div");
	content.id = "content";
	root.appendChild(content);
} 
export function footerRender() {
	const footer = document.createElement("footer");
	footer.id = "footer";
	root.appendChild(footer);
}

export function clearContent() {
	const content = document.getElementById("content");
	content.innerHTML = "";
	return content;
}

	

	
	// const movies = document.createElement("li");
	// menu.appendChild(movies);
	// const moviesLabel = document.createElement("a");
	// moviesLabel.href = "/films";
	// moviesLabel.innerHTML = "<div>Фильмы</div>";
	// moviesLabel.dataset.section = "films";
	// movies.appendChild(moviesLabel);

	// const moviesSubMenu = document.createElement("ul");
	// moviesSubMenu.classList.add("sub-menu");
	// movies.appendChild(moviesSubMenu);
	// const top250 = document.createElement("li");
	// moviesSubMenu.appendChild(top250);
	// top250.innerHTML = "<a href=\"/films\">Топ 250</a>"
	// top250.href = "/films";
	
	// const top500 = document.createElement("li");
	// moviesSubMenu.appendChild(top500);
	// top500.innerHTML = "<a href=\"/films\">Топ 500</a>"
	// const ourChoice = document.createElement("li");
	// moviesSubMenu.appendChild(ourChoice);
	// ourChoice.innerHTML = "<a href=\"/filmsFromUs\">Выбор редакции</a>"

	// const signin = document.createElement("li");
	// menu.appendChild(signin);
	// const signinLabel = document.createElement("a");
	// signinLabel.href = '/login';
	// signinLabel.classList.add("menu");
	// signinLabel.dataset.section = "login";
	// signinLabel.innerHTML = "<div>Войти</div>";
	// signin.appendChild(signinLabel);


	// const signup = document.createElement("li");
	// menu.appendChild(signup);
	// const signupLabel = document.createElement("a");
	// signupLabel.href = '/signup';
	// signupLabel.classList.add("menu");
	// signupLabel.dataset.section = "signup";
	// signupLabel.innerHTML = "<div>Зарегистрироваться</div>";
	// signup.appendChild(signupLabel);

