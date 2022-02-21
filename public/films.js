import { menuPage } from './menu.js';

export function filmsPage() {
	root.innerHTML = '';    
    menuPage();

    // Контейнер для всех фильмов
    const filmsContainer = document.createElement("div");
    filmsContainer.classList.add("container-films");

    //Заголовок для страницы
    const pageLabel = document.createElement("h1");
    pageLabel.innerHTML = "<center>Топ 250</center>";
    root.appendChild(pageLabel);

    // Контейнер для фильма
    const film = document.createElement("div");
    film.classList.add("film");
    filmsContainer.appendChild(film);

    //Порядковый номер фильма
    const filmNumber = document.createElement("div");
    filmNumber.classList.add("filmNumber");
    filmNumber.innerHTML = "<b>1</b>";
    film.appendChild(filmNumber);

    // Изображение фильма
    const filmImage = document.createElement("div");
    filmImage.classList.add("filmImage");
    filmImage.innerHTML = `<img src="iron-man-new-5k-2w-1024x768.jpg" width="200"/>`
    film.appendChild(filmImage);

    //Тело фильма
    const film_body = document.createElement("div");
    film_body.classList.add("film_body");

    // Краткое описание фильма
    const filmBriefDescription = document.createElement("div");
    filmBriefDescription.classList.add("filmBriefDescription");
    
    // Ссылка на страницу фильма
    const filmOverviewLink = document.createElement("a");
    filmOverviewLink.classList.add("filmOverviewLink");
    filmBriefDescription.appendChild(filmOverviewLink);

    // Название фильма на русском
    const filmOverviewName = document.createElement("p");
    filmOverviewName.classList.add("filmOverviewName");
    filmOverviewName.innerHTML = "Железный человек";

    // Название фильма на оригинальном языке
    const filmOverviewNameOriginal = document.createElement("p");
    filmOverviewNameOriginal.classList.add("filmOverviewNameOriginal");
    filmOverviewNameOriginal.innerHTML = "Iron man, 2007";

    // Дополнительная информация о фильме(страна, жанры)
    const filmOverviewAdditional = document.createElement("p");
    filmOverviewAdditional.classList.add("filmOverviewAdditional");
    filmOverviewAdditional.innerHTML = "США * Боевик * Драма";

    filmOverviewLink.appendChild(filmOverviewName);
    filmOverviewLink.appendChild(filmOverviewNameOriginal);
    filmOverviewLink.appendChild(filmOverviewAdditional);

    // Краткое содержание фильма
    const filmDescription = document.createElement("div");
    filmDescription.classList.add("filmDescription");
    filmDescription.innerHTML = "Попав в плен, Тони Старк изобретает суперкостюм и спасает мир. Блокбастер, запустивший киновселенную Marvel";

    // Оценка фильма
    const filmRating = document.createElement("div")
    filmRating.classList.add("filmRating");
    filmRating.innerHTML = "8.5";

    film_body.appendChild(filmBriefDescription);
    film_body.appendChild(filmDescription);
    film_body.appendChild(filmRating);


    film.appendChild(film_body);
    //

    const film2 = document.createElement("div");
    film2.classList.add("film");
    filmsContainer.appendChild(film2);

    const filmNumber2 = document.createElement("div");
    filmNumber2.classList.add("filmNumber");
    filmNumber2.innerHTML = "<b>2</b>";
    film2.appendChild(filmNumber2);

    const filmImage2 = document.createElement("div");
    filmImage2.classList.add("filmImage");
    filmImage2.innerHTML = `<img src="149219-mstiteli-art-supergeroj-bronya-cifrovoe_iskusstvo-1920x1080.jpg" width="200"/>`
    film2.appendChild(filmImage2);

    const filmName2 = document.createElement("div");
    filmName2.classList.add("filmName");
    filmName2.innerHTML = "filmName2";
    film2.appendChild(filmName2);

    const filmDescription2 = document.createElement("div");
    filmDescription2.classList.add("filmDescription");

    filmDescription2.innerHTML = "Film Desckr";
    film2.appendChild(filmDescription2);


	root.appendChild(filmsContainer);
}
