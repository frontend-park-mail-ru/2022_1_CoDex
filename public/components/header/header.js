import {createElementFromHTML} from '../../utils/utils.js';


/**
 * @description Создаёт и прикрепляет к корню страницы навигационную панель, полученную при 
 * помощи pug-шаблона.
 */
export function navbarRender() {
  const template = createElementFromHTML(header());
  root.appendChild(template);
}

/**
 * @description Меняет кнопку приглашения к авторизации на кнопку выхода из аккаунта.
 */
export function changeNavbarButton() {
  let navbarButton = document.getElementById("navbar-button");
  if (navbarButton.dataset.section === "login") {
    navbarButton.dataset.section = "logout";
    navbarButton.href = "/logout";
    navbarButton.textContent = "Выйти";
  } else {
    Ajax.getFetch({
      url: `${URL}/api/v1/logout`,
    });
    navbarButton.dataset.section = "login";
    navbarButton.href = "/login";
    navbarButton.textContent = "Войти";
  }
}
