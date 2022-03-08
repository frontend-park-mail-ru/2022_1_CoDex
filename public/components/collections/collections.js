import {createElementFromHTML} from '../../utils/utils.js';

/**
 * @param { Array } params - Параметры, необходимые для создания 
 * @returns { div } HTML Div, содержащий данные о подборке фильмов.
 * @description Создаёт карточку поборки фильмов по заданному pug-шаблону.
 */
export function createCollection(params) {
  const collection = createElementFromHTML(collections(params));
  return collection;
}

/**
 * @param { HTMLElement } collectionContainer Контейнер, относительно которого будут создаваться
 * подборки фильмов
 * @description Наполняет заданный HTMLElement подборками фильмов. Делает запрос на сервер,
 * в случае успеха парсит полученные данные, получая подборки фильмов.
 */
export function renderCollections(collectionContainer) {
  // Ajax.getFetch({url: 'https://tphwgocodex.herokuapp.com/api/v1/'}) // TODO 
  Ajax.getFetch({url: '/api/collections'}) // TODO 
      .then(({status, parsedBody}) => {
        parsedBody.collectionList.forEach(element => {
          collectionContainer.appendChild(createCollection(element))
        });
      })
      .catch((status, parsedBody) => {
        console.log("Something got wrong"); // TODO error page
      });
}

