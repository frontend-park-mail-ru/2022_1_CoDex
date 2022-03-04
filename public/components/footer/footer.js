import { createElementFromHTML } from "../../utils/utils.js";

export function footerRender() {
	const template = createElementFromHTML(footer());
	root.appendChild(template);
}
