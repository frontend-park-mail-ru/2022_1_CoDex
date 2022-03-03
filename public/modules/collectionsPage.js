import { clearContent } from "../utils/contentManipulate.js";
import { createCollection } from "../components/collections/collections.js";

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
    collectionsPageContainer.classList.add("_container");
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

    const top256 = createCollection("Топ 256", "top.png", "movies");
    collectionsContainer.appendChild(top256);

    const adventures = createCollection("Приключения", "adventures.png", "");
    collectionsContainer.appendChild(adventures);

    const family = createCollection("Для всей семьи", "family.png", "");
    collectionsContainer.appendChild(family);

    const romantic = createCollection("Романтичное", "romantic.png", "");
    collectionsContainer.appendChild(romantic);

    const drams = createCollection("Лучшие драмы", "drama.png", "");
    collectionsContainer.appendChild(drams);

    const childish = createCollection("Детское", "childish.png", "");
    collectionsContainer.appendChild(childish);

    const comedy = createCollection("Комедии", "comedy.png", "");
    collectionsContainer.appendChild(comedy);

    const saveTheWorld = createCollection("Спасение мира", "saveTheWorld.png", "");
    collectionsContainer.appendChild(saveTheWorld);

    const comics = createCollection("Кинокомиксы", "comics.png", "");
    collectionsContainer.appendChild(comics);

    const soviet = createCollection("Советская классика", "soviet.png", "");
    collectionsContainer.appendChild(soviet);

    const spy = createCollection("Шпионские фильмы", "spy.png", "");
    collectionsContainer.appendChild(spy);

    const ourTop = createCollection("Выбор редакции", "ourTop.png", "");
    collectionsContainer.appendChild(ourTop);

}
