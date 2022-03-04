import { createElementFromHTML } from "../../utils/utils.js";

export function createMovie(input) {
    let params = {
        input,
    };

    const template = createElementFromHTML(movie(params));
    return template;
}
