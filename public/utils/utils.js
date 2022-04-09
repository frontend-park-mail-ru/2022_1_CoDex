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

export const renderBaseView = () => {
  const userLocalStorage = window.localStorage.getItem("user");
  if (userLocalStorage) {
    const user = JSON.parse(userLocalStorage);
    return baseViewPug({
      headerLinks: headerLinks,
      imrsrc: user.profile_pic,
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

export const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("http://localhost:3000/sw.js")
    .then(() => {
      console.log("SW registered");
      navigator.serviceWorker.ready.then((worker) => {
        worker.sync.register('syncdata');
      });
    })
    .catch((err) => console.log(err));
  }
}