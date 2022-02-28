import { createInput } from './signup.js';
import { ajax } from './main.js';
import { clearContent } from './menu.js';

export function collectionsPage() {
    const content = clearContent();

    const collectionsContent = document.createElement("div");
    collectionsContent.classList.add("collections__content");
    content.appendChild(collectionsContent);

    const collectionsPage = document.createElement("page");
    collectionsPage.classList.add("page");
    collectionsContent.appendChild(collectionsPage);

    const collectionsPageContainer = document.createElement("div");
    collectionsPageContainer.classList.add("page__container");
    collectionsPageContainer.classList.add("_container");
    collectionsPage.appendChild(collectionsPageContainer);

    const collectionsTitle = document.createElement("h1");
    collectionsTitle.classList.add("collections__main_title");
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
    
}