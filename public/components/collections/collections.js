import {createElementFromHTML} from '../../utils/utils.js';
import {URL} from '../../utils/consts.js';

/**
 * @param { Array } params - Параметры, необходимые для создания
 * @return { div } HTML Div, содержащий данные о подборке фильмов.
 * @description Создаёт карточку поборки фильмов по заданному pug-шаблону.
 */
export function createCollection(params) {
  return createElementFromHTML(collections(params));
}

/**
 * @param { HTMLElement } collectionContainer Контейнер, относительно которого будут создаваться
 * подборки фильмов
 * @description Наполняет заданный HTMLElement подборками фильмов. Делает запрос на сервер,
 * в случае успеха парсит полученные данные, получая подборки фильмов.
 */
export function renderCollections(collectionContainer) {
  Ajax.getFetch({url: `${URL}/api/v1/`})
      .then(({status, parsedBody}) => {
        parsedBody.collectionList.forEach((element) => {
          collectionContainer.appendChild(createCollection(element));
        });
      })
      .catch((status, parsedBody) => {
        console.log('Something got wrong');
      });
}

