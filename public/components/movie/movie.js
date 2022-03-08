import {createElementFromHTML} from '../../utils/utils.js';

function processDescription(description) {
  if (description.length < 190) 
    return description;
  return description.slice(0, description.slice(0, 190).lastIndexOf(' ')) + "...";
}

/**
 * @param { Array } params Данные о фильме
 * @returns { HTMLElement } Карточка фильма, полученная по переданным данным.
 * @description Создаёт и возвращает карточку фильма, полученную по переданным данным.
 */
export function createMovie(params) {
  params.description = processDescription(params.description);
  const template = createElementFromHTML(movie(params));
  return template;
}

/**
 * @param { HTMLElement } movieContainer Контейнер, который будет наполняться карточками 
 * фильмов
 * @param { Array } movieList Массив данных о фильмах
 * @description Наполняет переданный контейнер созданными карточками фильмов 
 * (согласно полученным данным)
 */
export function renderMovies(movieContainer, movieList) {
  movieList.forEach(element => {
    movieContainer.appendChild(createMovie(element))
  });
}