import {createElementFromHTML} from '../../utils/utils.js';

export function createCollection(description, imgSrc, page) {
  const params = {
    input: {
      description: description,
      imgSrc: imgSrc,
      page: page,
    },
  };

  const collection = createElementFromHTML(collections(params));
  return collection;
}

