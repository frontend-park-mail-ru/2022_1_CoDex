import {createElementFromHTML} from '../../utils/utils.js';

export function navbarRender() {
  const template = createElementFromHTML(header());
  root.appendChild(template);
}

export function changeNavbarButton() {
  let navbarButton = document.getElementById("navbar-button");
  if (navbarButton.dataset.section === "login") {
    navbarButton.dataset.section = "logout";
    navbarButton.href = "/logout";
    navbarButton.textContent = "Выйти";
  } else {
    navbarButton.dataset.section = "login";
    navbarButton.href = "/login";
    navbarButton.textContent = "Войти";
  }
}
