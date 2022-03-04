import { createElementFromHTML } from "../../utils/utils.js";

export function createAuth(isLogin) {
    let params = {
        input: {
            isLogin: isLogin,
        },
    };
    const template = createElementFromHTML(auth(params));
    return template;
}