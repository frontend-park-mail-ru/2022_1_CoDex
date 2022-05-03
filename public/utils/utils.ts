import baseViewPug from "../views/BaseView/BaseView.pug";
import { headerLinks } from "../consts/header";
import { routes } from "../consts/routes";
import { baseViewData, routeParameters, routerData, URLData, userData } from "@/types";


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

/**
     * @description Получает параметры из URL-a.
     * @param { string } currentURL URL, на который перешёл пользователь
     * @return { object } Параметры URL-а
     */
const getParameters = (currentURL = "/"): routeParameters => {
  const parsedURL = new URL(window.location.origin + currentURL);
  const URLParameters = null;
  const resultURL = parsedURL.pathname;
  const result: routeParameters = {
      URL: resultURL,
      URLParameters: URLParameters,
      data: null,
  }
  return result;
};

/**
     * @description Получает информацию из URL-a.
     * @param { string } URL URL, на которые перешёл пользователь
     * @return { object } Информация об URL-е
     */
export const getURLData = (URL: string, routes: Set<routerData>) => {
  let targetController;
  const result: routeParameters = getParameters(URL);
  console.log("result", result)
  routes.forEach((route) => {
      const tmpResult = result.URL.match(route.URL);
      if (tmpResult) {
          targetController = route.controller;
      }
  });
  if (!targetController) { return; }
  const URLData: URLData = {
      controller: targetController,
      data: result.data,
      URL: {
          URL: result.URL,
          resourceID: +(result.URLParameters ? result.URLParameters : 0),
      },
  };
  return URLData;
};