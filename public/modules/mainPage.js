import { navbarRender } from "../components/header/header.js";
import { footerRender } from "../components/footer/footer.js";
import { contentRender } from "../utils/contentManipulate.js";
import { root } from "../main.js";

export function mainPage() {
    root.innerHTML = ""
	navbarRender();
	contentRender();
	footerRender();
}
