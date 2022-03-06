import {clearContent} from '../utils/contentManipulate.js';
import {renderMovies} from '../components/movie/movie.js';

export function moviesPage() {
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
  collectionTitle.textContent = 'Топ 256';

  moviesTitle.appendChild(span);
  moviesTitle.appendChild(collectionTitle);
  moviesPageContainer.appendChild(moviesTitle);

  const moviesDescription = document.createElement('div');
  moviesDescription.classList.add('collections__description');
  moviesDescription.textContent = 'Вот такая вот подборочка :)';
  moviesPageContainer.appendChild(moviesDescription);

  renderMovies(moviesPageContainer);
}
