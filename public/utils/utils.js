import baseViewPug from "../views/BaseView/BaseView.pug";
import { headerLinks } from "../consts/header";
import { routes } from "../consts/routes";


/**
 * @description Создаёт HTML Div с указанным HTML содержанием.
 * @param { string } html HTML содержание создаваемого элемента
 * @return { HTMLDivElement } Созданный HTML Div
 */
export function createElementFromHTML(html) {
  const temp = document.createElement("div");
  temp.innerHTML = html;
  return temp.firstElementChild;
}

export const renderBaseView = () => {
  const userLocalStorage = window.localStorage.getItem("user");
  if (userLocalStorage) {
    const user = JSON.parse(userLocalStorage);
    return baseViewPug({
      headerLinks: headerLinks,
      imgsrc: user.profile_pic,
      userId: user.ID,
      profileHref: routes.profilePage,
      userFromStorage: true,
    });
  } else {
    return baseViewPug({
      headerLinks: headerLinks,
      userLocalStorage: false,
    });
  }
};
