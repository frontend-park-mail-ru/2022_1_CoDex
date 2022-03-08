import {createElementFromHTML} from '../../utils/utils.js';

/**
 * @description Создаёт и прикрепляет к корню страницы footer, полученный при помощи 
 * pug-шаблона.
 */
export function footerRender() {
  const template = createElementFromHTML(footer());
  root.appendChild(template);
}
