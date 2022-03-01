import {clearContent} from './menu.js';

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



let collection = [
    {
        "movieHref": "/",
        "imgHref": "greenMile.png",
        "title": "Зелёная миля",
        "info": "1999, США. Драма",
        "rating": "9.1",
        "description": "Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.",
    },
    {
        "movieHref": "/",
        "imgHref": "showshenkRedemption.png",
        "title": "Побег из Шоушенка",
        "info": "1994, США. Драма",
        "rating": "8.9",
        "description": "Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по обе стороны решётки. Каждый, кто попадает в эти стены, становится их рабом до конца жизни. Но Энди, обладающий живым умом и доброй душой, находит подход как к заключённым, так и к охранникам, добиваясь их особого к себе расположения.",
    }
];

function createMovie(movieElement) {

    let { movieHref, imgHref, title, info, rating, description} = movieElement;
    const movieContainer = document.createElement("div");
    movieContainer.classList.add("movie_container");
    

    const movie = document.createElement("div");
    movie.classList.add("movie");
    movieContainer.appendChild(movie);

    const imageDiv = document.createElement("div");
    imageDiv.classList.add("movie_image");
    movie.appendChild(imageDiv);

    const imageA = document.createElement("a");
    imageA.classList.add("movie_image");
    imageA.href = `${ movieHref }`;
    imageDiv.appendChild(imageA);

    const image = document.createElement("img");
    image.src = `${ imgHref }`;
    imageA.appendChild(image);

    const movieBody = document.createElement("div");
    movieBody.classList.add("movie_body");
    movie.appendChild(movieBody);

    const movieInfo = document.createElement("div");
    movieInfo.classList.add("movie_info");
    movieBody.appendChild(movieInfo);

    const movieData = document.createElement("div");
    movieData.classList.add("movie_data");
    movieInfo.appendChild(movieData);

    const movieTitle = document.createElement("a");
    movieTitle.classList.add("movie_title");
    movieTitle.href = `${ movieHref }`;
    movieTitle.textContent = `${ title }`;
    movieData.appendChild(movieTitle);

    const movieInfoSeparator = document.createElement("div");
    movieInfoSeparator.classList.add("movie_add_info");
    movieData.appendChild(movieInfoSeparator);

    const movieGenres = document.createElement("div");
    movieGenres.classList.add("movie_add_info");
    movieGenres.textContent = `${ info }`;
    movieData.appendChild(movieGenres);

    const movieRating = document.createElement("div");
    movieRating.classList.add("movie_rating");
    movieInfo.appendChild(movieRating);

    const movieRatingLabel = document.createElement("div");
    movieRatingLabel.classList.add("movie_text");
    movieRatingLabel.textContent = "Рейтинг";
    movieRating.appendChild(movieRatingLabel);

    const movieRatingNumberDiv = document.createElement("div");
    movieRating.appendChild(movieRatingNumberDiv);

    const movieRatingNumber = document.createElement("div");
    movieRatingNumber.classList.add("movie_rating_number");
    movieRatingNumber.textContent = `${ rating }`;
    movieRating.appendChild(movieRatingNumber);

    const movieDescription = document.createElement("div");
    movieDescription.classList.add("movie_description");
    movieDescription.textContent = `${ description }`;
    movieBody.appendChild(movieDescription);

    return movieContainer;
}

export function moviesPage() {

    const content = clearContent();

    const moviesContent = document.createElement("div");
    moviesContent.classList.add("content_wrapper");
    content.appendChild(moviesContent);

    const moviesPage = document.createElement("page");
    moviesPage.classList.add("page");
    moviesContent.appendChild(moviesPage);

    const moviesPageContainer = document.createElement("div");
    moviesPageContainer.classList.add("page__container");
    moviesPageContainer.classList.add("_container");
    moviesPage.appendChild(moviesPageContainer);

    const moviesTitle = document.createElement("h1");
    moviesTitle.classList.add("title");
    moviesTitle.textContent = "Подборка";
    const span = document.createElement("span");
    span.textContent = " ";
    const collectionTitle = document.createElement("span");
    collectionTitle.classList.add("color-bright");
    collectionTitle.textContent = "Топ 256";

    moviesTitle.appendChild(span);
    moviesTitle.appendChild(collectionTitle);
    moviesPageContainer.appendChild(moviesTitle);

    const moviesDescription = document.createElement("div");
    moviesDescription.classList.add("collections__description");
    moviesDescription.textContent = "Вот такая вот подборочка :)";
    moviesPageContainer.appendChild(moviesDescription);

    collection.forEach((movie) => {
        let movieContainer = createMovie(movie);
        moviesPageContainer.appendChild(movieContainer);
    })
    
    // Контейнер для всех фильмов
    // const filmsContainer = document.createElement("div");
    // filmsContainer.classList.add("container-films");

    // //Заголовок для страницы
    // const pageLabel = document.createElement("h1");
    // pageLabel.classList.add("top-title");
    // pageLabel.innerHTML = "<center>Топ 250</center>";
    // content.appendChild(pageLabel);

    // // Контейнер для фильма
    // const film = document.createElement("div");
    // film.classList.add("film");
    // filmsContainer.appendChild(film);

    // //Порядковый номер фильма
    // const filmNumber = document.createElement("div");
    // filmNumber.classList.add("filmNumber");
    // filmNumber.innerHTML = "<b>1</b>";
    // film.appendChild(filmNumber);

    // // Изображение фильма
    // const filmImage = document.createElement("div");
    // filmImage.classList.add("filmImage");
    // filmImage.innerHTML = `<img src="iron-man-new-5k-2w-1024x768.jpg" width="200"/>`
    // film.appendChild(filmImage);

    // //Тело фильма
    // const film_body = document.createElement("div");
    // film_body.classList.add("film_body");

    // // Краткое описание фильма
    // const filmBriefDescription = document.createElement("div");
    // filmBriefDescription.classList.add("filmBriefDescription");
    
    // // Ссылка на страницу фильма
    // const filmOverviewLink = document.createElement("a");
    // filmOverviewLink.classList.add("filmOverviewLink");
    // filmBriefDescription.appendChild(filmOverviewLink);

    // // Название фильма на русском
    // const filmOverviewName = document.createElement("p");
    // filmOverviewName.classList.add("filmOverviewName");
    // filmOverviewName.innerHTML = "Железный человек";

    // // Название фильма на оригинальном языке
    // const filmOverviewNameOriginal = document.createElement("p");
    // filmOverviewNameOriginal.classList.add("filmOverviewNameOriginal");
    // filmOverviewNameOriginal.innerHTML = "Iron man, 2007";

    // // Дополнительная информация о фильме(страна, жанры)
    // const filmOverviewAdditional = document.createElement("p");
    // filmOverviewAdditional.classList.add("filmOverviewAdditional");
    // filmOverviewAdditional.innerHTML = "США * Боевик * Драма";

    // filmOverviewLink.appendChild(filmOverviewName);
    // filmOverviewLink.appendChild(filmOverviewNameOriginal);
    // filmOverviewLink.appendChild(filmOverviewAdditional);

    // // Краткое содержание фильма
    // const filmDescription = document.createElement("div");
    // filmDescription.classList.add("filmDescription");
    // filmDescription.innerHTML = "Попав в плен, Тони Старк изобретает суперкостюм и спасает мир. Блокбастер, запустивший киновселенную Marvel";

    // // Оценка фильма
    // const filmRating = document.createElement("div")
    // filmRating.classList.add("filmRating");
    // filmRating.innerHTML = "8.5";

    // film_body.appendChild(filmBriefDescription);
    // film_body.appendChild(filmDescription);
    // film_body.appendChild(filmRating);


    // film.appendChild(film_body);

    // ////////////////////////////////////

    // // Контейнер для фильма
    // const film2 = document.createElement("div");
    // film2.classList.add("film");
    // filmsContainer.appendChild(film2);

    // //Порядковый номер фильма
    // const filmNumber2 = document.createElement("div");
    // filmNumber2.classList.add("filmNumber");
    // filmNumber2.innerHTML = "<b>2</b>";
    // film2.appendChild(filmNumber2);

    // // Изображение фильма
    // const filmImage2 = document.createElement("div");
    // filmImage2.classList.add("filmImage");
    // filmImage2.innerHTML = `<img src="iron-man-new-5k-2w-1024x768.jpg" width="200"/>`
    // film2.appendChild(filmImage2);

    // //Тело фильма
    // const film_body2 = document.createElement("div");
    // film_body2.classList.add("film_body");

    // // Краткое описание фильма
    // const filmBriefDescription2 = document.createElement("div");
    // filmBriefDescription2.classList.add("filmBriefDescription");
    
    // // Ссылка на страницу фильма
    // const filmOverviewLink2 = document.createElement("a");
    // filmOverviewLink2.classList.add("filmOverviewLink");
    // filmBriefDescription2.appendChild(filmOverviewLink2);

    // // Название фильма на русском
    // const filmOverviewName2 = document.createElement("p");
    // filmOverviewName2.classList.add("filmOverviewName");
    // filmOverviewName2.innerHTML = "Железный человек";

    // // Название фильма на оригинальном языке
    // const filmOverviewNameOriginal2 = document.createElement("p");
    // filmOverviewNameOriginal2.classList.add("filmOverviewNameOriginal");
    // filmOverviewNameOriginal2.innerHTML = "Iron man, 2007";

    // // Дополнительная информация о фильме(страна, жанры)
    // const filmOverviewAdditional2 = document.createElement("p");
    // filmOverviewAdditional2.classList.add("filmOverviewAdditional");
    // filmOverviewAdditional2.innerHTML = "США * Боевик * Драма";

    // filmOverviewLink2.appendChild(filmOverviewName2);
    // filmOverviewLink2.appendChild(filmOverviewNameOriginal2);
    // filmOverviewLink2.appendChild(filmOverviewAdditional2);

    // // Краткое содержание фильма
    // const filmDescription2 = document.createElement("div");
    // filmDescription2.classList.add("filmDescription");
    // filmDescription2.innerHTML = "Попав в плен, Тони Старк изобретает суперкостюм и спасает мир. Блокбастер, запустивший киновселенную Marvel";

    // // Оценка фильма
    // const filmRating2 = document.createElement("div")
    // filmRating2.classList.add("filmRating");
    // filmRating2.innerHTML = "8.6";

    // film_body2.appendChild(filmBriefDescription2);
    // film_body2.appendChild(filmDescription2);
    // film_body2.appendChild(filmRating2);


    // film2.appendChild(film_body2);


	// content.appendChild(filmsContainer);

}
