import {createElementFromHTML} from '../../utils/utils.js';

export function navbarRender() {
  const template = createElementFromHTML(header());
  root.appendChild(template);
}
