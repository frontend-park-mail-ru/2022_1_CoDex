import {clearContent} from "../utils/contentManipulate.js";
import {renderCollections} from "../components/collections/collections.js";

/** @module collectionsPage */

/**
 * @description Создаёт и отрисовывает страницу подборок фильмов.
 * Предварительно очищает содержимое страницы. Поддерживает SPA.
 */
export function collectionsPage() {
  const content = clearContent();

  const collectionsContent = document.createElement("div");
  collectionsContent.classList.add("content_wrapper");
  content.appendChild(collectionsContent);

  const collectionsPage = document.createElement("page");
  collectionsPage.classList.add("page");
  collectionsContent.appendChild(collectionsPage);

  const collectionsPageContainer = document.createElement("div");
  collectionsPageContainer.classList.add("page__container");
  collectionsPageContainer.classList.add("content_container");
  collectionsPage.appendChild(collectionsPageContainer);

  const collectionsTitle = document.createElement("h1");
  collectionsTitle.classList.add("title");
  collectionsTitle.textContent = "Подборки";
  collectionsPageContainer.appendChild(collectionsTitle);

  const collectionsDescription = document.createElement("div");
  collectionsDescription.classList.add("collections__description");
  collectionsDescription.textContent = "Это наши подборочки :)";
  collectionsPageContainer.appendChild(collectionsDescription);

  const collectionsBgContainer = document.createElement("div");
  collectionsBgContainer.classList.add("bg_container");
  collectionsPageContainer.appendChild(collectionsBgContainer);

  const collectionsContainer = document.createElement("div");
  collectionsContainer.classList.add("collections__container");
  collectionsBgContainer.appendChild(collectionsContainer);

  renderCollections(collectionsContainer);
}
