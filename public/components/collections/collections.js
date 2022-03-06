import {createElementFromHTML} from '../../utils/utils.js';

export function createCollection(params) {
  const collection = createElementFromHTML(collections(params));
  return collection;
}

export function renderCollections(collectionContainer) {
  Ajax.getFetch({url: '/api/collections'}) // TODO 
      .then(({status, parsedBody}) => {
        parsedBody.collectionsList.forEach(element => {
          collectionContainer.appendChild(createCollection(element))
        });
      })
      .catch((status, parsedBody) => {
        console.log("Something got wrong"); // TODO error page
      });
}

