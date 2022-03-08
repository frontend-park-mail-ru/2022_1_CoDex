import {navbarRender} from '../components/header/header.js';
import {footerRender} from '../components/footer/footer.js';
import {contentRender} from '../utils/contentManipulate.js';
import {root} from '../main.js';
import { collectionsPage } from './collectionsPage.js';

/**
 * @description Создаёт и отрисовывает страницу главную страницу.
 * Создаёт навигационную панель, footer. Поддерживает SPA.
 */
export function mainPage() {
  root.innerHTML = '';
  navbarRender();
  contentRender();
  collectionsPage();
  footerRender();
}
