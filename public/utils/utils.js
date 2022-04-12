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
  console.log("Inside createElement");
  console.log("HTML: ", html);
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
