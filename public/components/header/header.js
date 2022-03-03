export function navbarRender() {
	const navbar = document.createElement("header");
	navbar.id = "navbar";
	root.appendChild(navbar);

	const logo = document.createElement("a");
	logo.classList.add("navbar_logo");
	logo.innerHTML = `<img data-section="main" src="logo.svg"/>`;
	logo.href = "/";
    logo.dataset.section = "main";
	navbar.appendChild(logo);

	const menu = document.createElement("div");
	menu.classList.add("navbar_menu");
	navbar.appendChild(menu);

	const collection = document.createElement("a");
	collection.classList.add("navbar_menu_btn");
	menu.appendChild(collection);
	collection.href = "/collections";
	collection.textContent = "Подборки";
	collection.dataset.section = "collections";

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
