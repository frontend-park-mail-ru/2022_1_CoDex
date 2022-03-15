import {mainPage} from '../modules/mainPage.js';
import {loginPage} from '../modules/loginPage.js';
import {URL, OK} from './consts.js';
import {changeNavbarButton} from '../components/header/header.js';

/**
 * @description Создаёт HTML Div с указанным HTML содержанием.
 * @param { string } html HTML содержание создаваемого элемента
 * @return { HTMLDivElement } Созданный HTML Div
 */
export function createElementFromHTML(html) {
  const temp = document.createElement('div');
  temp.innerHTML = html;
  return temp.firstChild;
}

/**
 * Проверяет, авторизован ли пользователь в системе. Если
 * авторизован, то заменяет кнопку "Войти" в навигационной
 * панели кнопкой "Выйти" и перенаправляет на главную страницу.
 * Иначе перенаправляет на страницу авторизации.
 */
export function checkAuth() {
  Ajax.getFetch({
    url: `${URL}/api/v1/checkAuth`,
  }).then((response, parsedBody) => {
    if (response && response.status === OK) {
      if (parsedBody.status == OK) {
        mainPage();
        changeNavbarButton();
        return;
      } else {
        mainPage();
      }
    } else {
      loginPage();
    }
  });
}
