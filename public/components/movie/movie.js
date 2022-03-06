import {createElementFromHTML} from '../../utils/utils.js';

export function createMovie(params) {

  const template = createElementFromHTML(movie(params));
  return template;
}


export function renderMovies(movieContainer) {
  Ajax.getFetch({url: '/api/collections/1'}) // TODO 
      .then(({status, parsedBody}) => {
        parsedBody.movieList.forEach(element => {
          movieContainer.appendChild(createMovie(element))
        });
      })
      .catch((status, parsedBody) => {
        console.log("Something got wrong"); // TODO error page
      });
}