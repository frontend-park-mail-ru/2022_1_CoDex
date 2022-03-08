import { mainPage } from "../modules/mainPage.js";
import { loginPage } from "../modules/loginPage.js";
import { URL, OK } from "./consts.js";
import { changeNavbarButton } from "../components/header/header.js";

export function createElementFromHTML(html) {
  const temp = document.createElement('div');
  temp.innerHTML = html;
  return temp.firstChild;
}

export function checkAuth() {
  Ajax.getFetch({
    url: `${URL}/api/v1/user/checkAuth`,
  }).then((response) => {
    if (response && response.status === OK) {
      mainPage();
      changeNavbarButton();
      return;
    } else {
      loginPage();
    }
  });
}