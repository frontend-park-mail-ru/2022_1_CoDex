import { menuPage } from './menu.js';

const configFilm = {
    film1: {
        filmName:"",
        filmNameOriginal:"",
        filmRating: 0,
        filmImage: ``,
        filmOverviewAdditional: "",
        filmDescription: "",
        filmAgeLimit: "",
        filmCast: [""],
    }
};

export function filmsPage() {
	root.innerHTML = '';    
    menuPage();

    // Контейнер для всех фильмов
    const filmsContainer = document.createElement("div");
    filmsContainer.classList.add("container-films");

    //Заголовок для страницы
    const pageLabel = document.createElement("h1");
    pageLabel.classList.add("top-title");
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

    ////////////////////////////////////

    // Контейнер для фильма
    const film2 = document.createElement("div");
    film2.classList.add("film");
    filmsContainer.appendChild(film2);

    //Порядковый номер фильма
    const filmNumber2 = document.createElement("div");
    filmNumber2.classList.add("filmNumber");
    filmNumber2.innerHTML = "<b>2</b>";
    film2.appendChild(filmNumber2);

    // Изображение фильма
    const filmImage2 = document.createElement("div");
    filmImage2.classList.add("filmImage");
    filmImage2.innerHTML = `<img src="iron-man-new-5k-2w-1024x768.jpg" width="200"/>`
    film2.appendChild(filmImage2);

    //Тело фильма
    const film_body2 = document.createElement("div");
    film_body2.classList.add("film_body");

    // Краткое описание фильма
    const filmBriefDescription2 = document.createElement("div");
    filmBriefDescription2.classList.add("filmBriefDescription");
    
    // Ссылка на страницу фильма
    const filmOverviewLink2 = document.createElement("a");
    filmOverviewLink2.classList.add("filmOverviewLink");
    filmBriefDescription2.appendChild(filmOverviewLink2);

    // Название фильма на русском
    const filmOverviewName2 = document.createElement("p");
    filmOverviewName2.classList.add("filmOverviewName");
    filmOverviewName2.innerHTML = "Железный человек";

    // Название фильма на оригинальном языке
    const filmOverviewNameOriginal2 = document.createElement("p");
    filmOverviewNameOriginal2.classList.add("filmOverviewNameOriginal");
    filmOverviewNameOriginal2.innerHTML = "Iron man, 2007";

    // Дополнительная информация о фильме(страна, жанры)
    const filmOverviewAdditional2 = document.createElement("p");
    filmOverviewAdditional2.classList.add("filmOverviewAdditional");
    filmOverviewAdditional2.innerHTML = "США * Боевик * Драма";

    filmOverviewLink2.appendChild(filmOverviewName2);
    filmOverviewLink2.appendChild(filmOverviewNameOriginal2);
    filmOverviewLink2.appendChild(filmOverviewAdditional2);

    // Краткое содержание фильма
    const filmDescription2 = document.createElement("div");
    filmDescription2.classList.add("filmDescription");
    filmDescription2.innerHTML = "Попав в плен, Тони Старк изобретает суперкостюм и спасает мир. Блокбастер, запустивший киновселенную Marvel";

    // Оценка фильма
    const filmRating2 = document.createElement("div")
    filmRating2.classList.add("filmRating");
    filmRating2.innerHTML = "8.6";

    film_body2.appendChild(filmBriefDescription2);
    film_body2.appendChild(filmDescription2);
    film_body2.appendChild(filmRating2);


    film2.appendChild(film_body2);


	root.appendChild(filmsContainer);
}
