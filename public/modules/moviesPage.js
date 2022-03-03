import { clearContent } from "../utils/contentManipulate.js";
import {createMovie} from "../components/movie/movie.js";

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
    
}
