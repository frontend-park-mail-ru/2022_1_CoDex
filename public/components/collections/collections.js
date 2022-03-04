import { createElementFromHTML } from "../../utils/utils.js";

export function createCollection(description, img_src, page) {
    let params = {
        input: {
            description: description,
            img_src: img_src,
            page: page
        },
    };

    const collection = createElementFromHTML(collections(params));
    return collection;
}

