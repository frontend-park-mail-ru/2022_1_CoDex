import {createElementFromHTML} from '../../utils/utils.js';

/**
 * @param { Array } params Данные о фильме
 * @returns { HTMLElement } Карточка фильма, полученная по переданным данным.
 * @description Создаёт и возвращает карточку фильма, полученную по переданным данным.
 */
export function createMovie(params) {
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