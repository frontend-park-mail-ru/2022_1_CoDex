import { HomeModel } from "@/models/HomeModel";
import { HomeView } from "../views/HomeView/HomeView.js";
import { BaseController } from "./BaseController";

/**
 * @description Класс контроллера домашней страницы.
 */
export class HomeController extends BaseController {
    /**
     * @description Создаёт экземляр контроллера домашней страницы.
     */
    constructor() {
        super(HomeView, HomeModel);
        this.subscribe();
    }
    
}