import {createElementFromHTML} from '../../utils/utils.js';

export function createMovie(params) {

  const template = createElementFromHTML(movie(params));
  return template;
}


export function renderMovies(movieContainer, movieList) {
        movieList.forEach(element => {
          movieContainer.appendChild(createMovie(element))
        });
}