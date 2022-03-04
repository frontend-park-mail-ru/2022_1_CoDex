import {createElementFromHTML} from '../../utils/utils.js';

export function createMovie(input) {
  const params = {
    input,
  };

  const template = createElementFromHTML(movie(params));
  return template;
}
