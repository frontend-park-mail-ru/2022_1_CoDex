/* eslint-disable @typescript-eslint/no-unused-vars */
import "./index.scss";
import { regularRoutes } from "@/consts/routes";
import { Router } from "@/modules/router";
import { AuthController } from "@/controllers/AuthController";
import { SingleCollectionController } from "@/controllers/SingleCollectionController";
import { SingleBookmarkController } from "@/controllers/SingleBookmarkController";
import { CollectionsController } from "@/controllers/CollectionsController";
import { MovieController } from "@/controllers/MovieController";
import { ProfileController } from "@/controllers/ProfileController";
import { ActorController } from "@/controllers/ActorController";
import { HeaderController } from "./controllers/HeaderController";
import { GenresController } from "./controllers/GenresController";
import { SingleGenreController } from "./controllers/SingleGenreController";
import { PremiersController } from "./controllers/PremiersController";
import { AnnouncedController } from "./controllers/AnnouncedController";
import { SearchController } from "./controllers/SearchController";

import { initializeApp } from 'firebase/app';
import { getMessaging, onMessage, getToken } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyCO0VasuBzGS74ONUmtMKrktKddF58DIS8",
  authDomain: "akino-61bc9.firebaseapp.com",
  projectId: "akino-61bc9",
  storageBucket: "akino-61bc9.appspot.com",
  messagingSenderId: "643793608275",
  appId: "1:643793608275:web:b6dcca5445ef7873e8f0a6",
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging();

// if ('serviceWorker' in navigator) {
//   // navigator.serviceWorker.register('sw.js', { scope: '/' })
//   //   .then((registration) => {
//   //     console.log('SW registered on scope:', registration.scope);
//   //   })
//   //   .catch((err) => {
//   //     console.error("Error", err);
//   //   });

// } else {
//   console.log("smt went wrong, we shouldn't be here");
// }
getToken(messaging, { vapidKey: 'BHXKw1xj-ycTEtyFKFWHnrXTaMnJyqFtBfixVtr8YmgvEYnl17WWj3g_N5B7R0RKxiXS1fMlpzZDpZJ3oOID1QM' }).then((currentToken) => {
  if (currentToken) {
    console.log("SUCCESS")
    fetch('https://park-akino.ru/api/v1/user/subscribePush', {
      method: 'POST',
      body: JSON.stringify({ token: currentToken }),
    }).finally();
  } else {
    console.log('No registration token available. Request permission to generate one.');
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
});

onMessage(messaging, (payload) => {
  console.log("Message received. ", payload);
});

export const root = document.getElementById("root");
const headerController = new HeaderController;
const authController = new AuthController();
const actorController = new ActorController();
const collectionsController = new CollectionsController();
const movieController = new MovieController();
const profileController = new ProfileController();
const singleCollectionController = new SingleCollectionController();
const singleBookmarkController = new SingleBookmarkController();
const genresController = new GenresController();
const singleGenreController = new SingleGenreController();
const premiersController = new PremiersController();
const announcedController = new AnnouncedController();
const searchController = new SearchController();

const router = new Router(root as HTMLElement);

router.register(regularRoutes.homePage, collectionsController)
  .register(regularRoutes.singleGenrePage, singleGenreController)
  .register(regularRoutes.singleCollectionPage, singleCollectionController)
  .register(regularRoutes.singleBookmarkPage, singleBookmarkController)
  .register(regularRoutes.moviePage, movieController)
  .register(regularRoutes.actorPage, actorController)
  .register(regularRoutes.loginPage, authController)
  .register(regularRoutes.registrationPage, authController)
  .register(regularRoutes.collectionsPage, collectionsController)
  .register(regularRoutes.moviePage, movieController)
  .register(regularRoutes.profilePage, profileController)
  .register(regularRoutes.genresPage, genresController)
  .register(regularRoutes.premiersPage, premiersController)
  .register(regularRoutes.announcedPage, announcedController)
  .register(regularRoutes.search, searchController)
  .start();
