/* eslint-disable @typescript-eslint/no-unused-vars */
import "./index.scss";
import { regularRoutes } from "@/consts/routes";
import { Router } from "@/modules/router";
import { AuthController } from "@/controllers/AuthController";
import { SingleCollectionController } from "@/controllers/SingleCollectionController";
import { CollectionsController } from "@/controllers/CollectionsController";
import { MovieController } from "@/controllers/MovieController";
import { ProfileController } from "@/controllers/ProfileController";
import { ActorController } from "@/controllers/ActorController";
import { HeaderController } from "./controllers/HeaderController";

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
console.log("aboba");
// let authController;
// (async ()=> {
//   await new AuthController;
// })()
console.log("beforeAuth");
const authController = new AuthController();
console.log("afterAuth");

const actorController = new ActorController();
console.log("afterActor");

const collectionsController = new CollectionsController();
console.log("afterCollections");

const movieController = new MovieController();
console.log("afterMovie");

const profileController = new ProfileController();
console.log("afterProfile");

const singleCollectionController = new SingleCollectionController();
console.log("afterSingleCollections");
const headerController = new HeaderController;

const router = new Router(root as HTMLElement);

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
