import "./index.scss";
import { regularRoutes } from "./consts/routes";
import { Router } from "./modules/router";
import { authModule } from "./modules/auth";
import { HeaderController } from "./controllers/HeaderController";
import { HomeController } from "./controllers/HomeController";
import { AuthController } from "./controllers/AuthController";
import { SingleCollectionController } from "./controllers/SingleCollectionController";
import { CollectionsController } from "./controllers/CollectionsController";
import { MovieController } from "./controllers/MovieController";
import { ProfileController } from "./controllers/ProfileController";
import { ActorController } from "./controllers/ActorController";

//Выключили сервис воркер if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/sw.js', {scope: '/'})
//       .then((registration) => {
//         console.log('SW registered on scope:', registration.scope);
//       })
//       .catch((err) => {
//         console.error("Error", err);
//   });
// } else {
//   console.log("smt went wrong, we shouldn't be here");
// }

export const root = document.getElementById("root");

const AuthModule = authModule;

const headerController = new HeaderController();
const homeController = new HomeController();
const authController = new AuthController();
const singleCollectionController = new SingleCollectionController();
const collectionsController = new CollectionsController();
const movieController = new MovieController();
const profileController = new ProfileController();
const actorController = new ActorController();

const router = new Router(root);

router.register(regularRoutes.homePage, collectionsController)
  .register(regularRoutes.singleCollectionPage, singleCollectionController)
  .register(regularRoutes.moviePage, movieController)
  .register(regularRoutes.actorPage, actorController)
  .register(regularRoutes.loginPage, authController)
  .register(regularRoutes.registrationPage, authController)
  .register(regularRoutes.collectionsPage, collectionsController)
  .register(regularRoutes.moviePage, movieController)
  .register(regularRoutes.profilePage, profileController)
  .start();
