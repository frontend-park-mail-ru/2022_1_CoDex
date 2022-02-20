
import { menuPage } from './menu.js';

export function filmsPage() {
	root.innerHTML = '';    
    menuPage();

    const filmsContainer = document.createElement("div");
    filmsContainer.classList.add("container-films");

    const pageLabel = document.createElement("h1");
    pageLabel.innerHTML = "<center>Топ 250</center>";
    root.appendChild(pageLabel);

    const film = document.createElement("div");
    film.classList.add("film");
    filmsContainer.appendChild(film);

    const filmNumber = document.createElement("div");
    filmNumber.classList.add("filmNumber");
    filmNumber.innerHTML = "<b>1</b>";
    film.appendChild(filmNumber);

    const filmImage = document.createElement("div");
    filmImage.classList.add("filmImage");
    filmImage.innerHTML = `<img src="iron-man-new-5k-2w-1024x768.jpg" width="200"/>`
    film.appendChild(filmImage);

    const filmName = document.createElement("div");
    filmName.classList.add("filmName");
    filmName.innerHTML = "FilmName";
    film.appendChild(filmName);

    const filmDescription = document.createElement("div");
    filmDescription.classList.add("filmDescription");

    filmDescription.innerHTML = "Film Desckr";
    film.appendChild(filmDescription);


    //

    const film2 = document.createElement("div");
    film2.classList.add("film");
    filmsContainer.appendChild(film2);

    const filmNumber2 = document.createElement("div");
    filmNumber2.classList.add("filmNumber");
    filmNumber2.innerHTML = "<b>1</b>";
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
