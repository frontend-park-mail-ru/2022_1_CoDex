import {clearContent} from '../utils/contentManipulate.js';
import {renderMovies} from '../components/movie/movie.js';

/**
 * @param { string } collectionNumber Номер подборки на сервере
 * @description Создаёт и отрисовывает страницу конкретной подборки фильмов, полученной
 * как ответ на запрос от сервера.
 * Предварительно очищает содержимое страницы. Поддерживает SPA.
 */
export function moviesPage(collectionNumber) {
  const content = clearContent();

  const moviesContent = document.createElement('div');
  moviesContent.classList.add('content_wrapper');
  content.appendChild(moviesContent);

  const moviesPage = document.createElement('page');
  moviesPage.classList.add('page');
  moviesContent.appendChild(moviesPage);

  const moviesPageContainer = document.createElement('div');
  moviesPageContainer.classList.add('page__container');
  moviesPageContainer.classList.add('_container');
  moviesPage.appendChild(moviesPageContainer);

  const moviesTitle = document.createElement('h1');
  moviesTitle.classList.add('title');
  moviesTitle.textContent = 'Подборка';
  const span = document.createElement('span');
  span.textContent = ' ';
  const collectionTitle = document.createElement('span');
  collectionTitle.classList.add('color-bright');

  moviesTitle.appendChild(span);
  moviesTitle.appendChild(collectionTitle);
  moviesPageContainer.appendChild(moviesTitle);

  const moviesDescription = document.createElement('div');
  moviesDescription.classList.add('collections__description');
  moviesPageContainer.appendChild(moviesDescription);
  
  Ajax.getFetch({url: `https://tphwgocodex.herokuapp.com/api/v1/collections/collection/${collectionNumber}`}) // TODO 
      .then(({status, parsedBody}) => {
        collectionTitle.textContent = parsedBody.title;
        moviesDescription.textContent = parsedBody.description;
        renderMovies(moviesPageContainer, parsedBody.movieList);
      })
      .catch((status, parsedBody) => {
        console.log("Something got wrong"); // TODO error page
      });
}
