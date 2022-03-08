import { mainPage } from "../modules/mainPage";
import { loginPage } from "../modules/loginPage";
import { URL, OK } from "./consts";
import { changeNavbarButton } from "../components/header/header";
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
      Ajax.getFetch({
        url: `${URL}/api/user/${response.parsedBody.id}`,
      }).then((response) => {
        changeNavbarButton();
        mainPage();
        // collectionsPage(response.parsedBody);
      });
      return;
    } else {
      loginPage();
    }
  });
}