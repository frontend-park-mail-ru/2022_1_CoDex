import {createElementFromHTML} from '../../utils/utils.js';
import {maxMovieShortDescriptionLength} from '../../utils/consts.js';

/**
 * @param { string } description Описание фильма
 * @return { string } Укороченное описание фильма
 * @description Укорачивает, если требуется, переданное описание фильма,
 * согласно максимальной длине краткого описания. В случае укорачивания
 * добавляет в конце описания "..."
 */
function processDescription(description) {
  if (description.length < maxMovieShortDescriptionLength) {
    return description;
  }
  return description.slice(0, description.slice(
      0, maxMovieShortDescriptionLength).
      lastIndexOf(' ')) + '...';
}

/**
 * @typedef { CollectionParams } - Параметры, необходимые для однозначного задания
 * фильма. Объект, имеющий string поля:
 * movieHref (ссылку на данный фильм),
 * imgHref (путь к афише данного фильма),
 * title (название данного фильма),
 * rating (рейтинг данного фильма),
 * info (информация о фильме, такая как год и страна выпуска, жанры),
 * description (описание данного фильма)
 */

/**
 * @param { CollectionParams } params Данные о фильме
 * @return { HTMLDivElement } Карточка фильма, полученная по переданным данным.
 * @description Создаёт и возвращает карточку фильма, полученную по переданным данным.
 */
export function createMovie(params) {
  params.description = processDescription(params.description);
  return createElementFromHTML(movie(params));
}

/**
 * @param { HTMLElement } movieContainer Контейнер, который будет наполняться карточками
 * фильмов
 * @param { CollectionParams[] } movieList Массив данных о фильмах
 * @description Наполняет переданный контейнер созданными карточками фильмов
 * (согласно полученным данным)
 */
export function renderMovies(movieContainer, movieList) {
  movieList.forEach((element) => {
    movieContainer.appendChild(createMovie(element));
  });
}
