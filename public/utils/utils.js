import { mainPage } from "../modules/mainPage";
import { URL, OK } from "./consts";
export function createElementFromHTML(html) {
  const temp = document.createElement('div');
  temp.innerHTML = html;
  return temp.firstChild;
}

export function checkAuth() {
  Ajax.getFetch({
    url: `${URL}/api/user/checkAuth`,
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