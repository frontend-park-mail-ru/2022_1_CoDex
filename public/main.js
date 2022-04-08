import "./index.scss";
import { regularRoutes } from "./consts/routes.js";
import { Router } from "./modules/router.js";
import { authModule } from "./modules/auth.js";
import { HeaderController } from "./controllers/HeaderController.js";
import { HomeController } from "./controllers/HomeController.js";
import { AuthController } from "./controllers/AuthController.js";
import { SingleCollectionController } from "./controllers/SingleCollectionController.js";
import { CollectionsController } from "./controllers/CollectionsController.js";
import { MovieController } from "./controllers/MovieController.js";
import { ActorController } from "./controllers/ActorController.js";

export const root = document.getElementById("root");

const AuthModule = authModule;

const headerController = new HeaderController();
const homeController = new HomeController();
const authController = new AuthController();
const singleCollectionController = new SingleCollectionController();
const collectionsController = new CollectionsController();
const movieController = new MovieController();
const actorController = new ActorController();

const router = new Router(root);

router.register(regularRoutes.homePage, homeController)
  .register(regularRoutes.loginPage, authController)
  .register(regularRoutes.registrationPage, authController)
  .register(regularRoutes.singleCollectionPage, singleCollectionController)
  .register(regularRoutes.collectionsPage, collectionsController)
  .register(regularRoutes.moviePage, movieController)
  .register(regularRoutes.actorPage, actorController)
  .start();
