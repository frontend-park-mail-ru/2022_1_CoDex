import baseViewPug from "../views/BaseView/BaseView.pug";
import { headerLinks } from "../consts/header.js";
import { routes } from "../consts/routes.js";


/**
 * @description Создаёт HTML Div с указанным HTML содержанием.
 * @param { string } html HTML содержание создаваемого элемента
 * @return { HTMLDivElement } Созданный HTML Div
 */
export function createElementFromHTML(html) {
  const temp = document.createElement("div");
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
  }).then((response) => {
    if (response && response.status === OK) {
      if (response.parsedBody.status == OK) {
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

export const renderBaseView = () => {
  const userLocalStorage = window.localStorage.getItem("user");
  if (userLocalStorage) {
    const user = JSON.parse(userLocalStorage);
    return baseViewPug({
      headerLinks: headerLinks,
      imgSrc: user.profile_pic,
      userId: user.id,
      profileHref: routes.Profile,
      userFromStorage: true,
    });
  } else {
    return baseViewPug({
      headerLinks: headerLinks,
      userLocalStorage: false,
    });
  }
};
