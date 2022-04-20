import baseViewPug from "../views/BaseView/BaseView.pug";
import { headerLinks } from "../consts/header";
import { routes } from "../consts/routes";
import { baseViewData, userData } from "@/types";


/**
 * @description Создаёт HTML Div с указанным HTML содержанием.
 * @param { string } html HTML содержание создаваемого элемента
 * @return { HTMLDivElement } Созданный HTML Div
 */
export function createElementFromHTML(html: string | null) {
  const temp = document.createElement("div");
  temp.innerHTML = html ? html : "";
  return temp.firstElementChild;
}

export const renderBaseView = () => {
  const userLocalStorage = window.localStorage.getItem("user");
  if (userLocalStorage) {
    const user: userData = JSON.parse(userLocalStorage);
    const baseViewData: baseViewData = {
      headerLinks: headerLinks,
      imgsrc: user.imgsrc,
      userId: user.ID,
      profileHref: routes.profilePage,
      userFromStorage: true,
    }
    return <string> baseViewPug(baseViewData);
  } else {
    const baseViewData: baseViewData = {
      headerLinks: headerLinks,
      imgsrc: "",
      userId: "",
      profileHref: "",
      userFromStorage: false,
    }
    return <string> baseViewPug(baseViewData);
  }
};
