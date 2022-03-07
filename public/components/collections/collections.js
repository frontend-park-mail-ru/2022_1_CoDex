import {createElementFromHTML} from '../../utils/utils.js';

export function createCollection(params) {
  const collection = createElementFromHTML(collections(params));
  return collection;
}

export function renderCollections(collectionContainer) {
  Ajax.getFetch({url: 'https://tphwgocodex.herokuapp.com/api/v1/'}) // TODO 
      .then(({status, parsedBody}) => {
        parsedBody.collectionList.forEach(element => {
          collectionContainer.appendChild(createCollection(element))
        });
      })
      .catch((status, parsedBody) => {
        console.log("Something got wrong"); // TODO error page
      });
}

