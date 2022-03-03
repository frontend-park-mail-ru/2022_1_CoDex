export function createCollection(description, src, page) {
    const collection = document.createElement("a");
    collection.href = `/${ page }`;
    collection.dataset.section = page;
    collection.classList.add("collection");
    const collectionImg = document.createElement("div");
    collectionImg.classList.add("collection__wrapper");
    const img = document.createElement("img");
    img.dataset.section = page;
    img.classList.add("collection_img");
    img.src = src;
    collectionImg.appendChild(img);
    const collectionDesription = document.createElement("div");
    collectionDesription.classList.add("collection__description");
    collectionDesription.dataset.section = page;
    collectionDesription.textContent = description;

    collection.appendChild(collectionImg);
    collection.appendChild(collectionDesription);

    return collection;
}

