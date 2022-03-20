// import {collectionsPage} from "./modules/collectionsPage.js";
// import {mainPage} from "./modules/mainPage.js";
// import {moviesPage} from "./modules/moviesPage.js";
// import {signupPage} from "./modules/signupPage.js";
// import {loginPage} from "./modules/loginPage.js";
// import {changeNavbarButton} from "./components/header/header.js";
// import {checkAuth} from "./utils/utils.js";

// export const root = document.getElementById("root");

// const configApp = {
//   main: {
//     href: "/",
//     openMethod: mainPage,
//   },
//   signup: {
//     href: "/signup",
//     text: "Зарегистрироваться",
//     openMethod: signupPage,
//   },
//   login: {
//     href: "/login",
//     text: "Войти",
//     openMethod: loginPage,
//   },
//   collections: {
//     href: "/collections",
//     text: "Подборки",
//     openMethod: collectionsPage,
//   },
//   movies: {
//     href: "/movies",
//     text: "Фильмы",
//     openMethod: moviesPage,
//   },
//   logout: {
//     href: "/logout",
//     text: "Выйти",
//     openMethod: changeNavbarButton,
//   },
// };

// mainPage();
// checkAuth();

// root.addEventListener("click", (e) => {
//   const {target} = e;
//   if (target instanceof HTMLElement) {
//     e.preventDefault();

//     const {section} = target.dataset;
//     if (section) {
//       if (target.attributes.parameters) {
//         configApp[section].openMethod(target.attributes.parameters.nodeValue);
//       } else {
//         configApp[section].openMethod();
//       }
//     }
//   }
// });
import "./index.scss";
import { regularRoutes } from "./consts/routes.js";
import { Router } from "./modules/router.js";
import { HomeController } from "./controllers/HomeController.js";
import { AuthController } from "./controllers/AuthController.js";

export const root = document.getElementById("root");
const homeController = new HomeController();
const authController = new AuthController();

const router = new Router(root);

router.register(regularRoutes.homePage, homeController)
  .register(regularRoutes.authPage, authController)
  .start();
