import {createElementFromHTML} from '../../utils/utils.js';
import {URL} from '../../utils/consts.js';

/**
 * @typedef { CollectionParams } - Параметры, необходимые для однозначного задания
 * подборки фильмов. Объект, имеющий string поля:
 * page (имя данной подборки на стороне клиента),
 * number (номер данной подборки на сервере),
 * imgSrc (путь к афише данной подборки).
 */

/**
 * @param { CollectionParams } params - Параметры, необходимые для создания
 * @return { HTMLDivElement } HTML Div, содержащий данные о подборке фильмов.
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
  Ajax.getFetch({url: `${URL}/api/v1/collections`})
      .then(({status, parsedBody}) => {
        parsedBody.collectionList.forEach((element) => {
          collectionContainer.appendChild(createCollection(element));
        });
      })
      .catch((status, parsedBody) => {
      });
}

