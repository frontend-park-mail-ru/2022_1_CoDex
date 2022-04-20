import { HomeModel } from "@/models/HomeModel";
import { HomeView } from "@/views/HomeView/HomeView";
import { BaseController } from "./BaseController";

/**
 * @description Класс контроллера домашней страницы.
 */
export class HomeController extends BaseController {
    public model: HomeModel;
    public view: HomeView;

    constructor() {
        super()
        this.model = new HomeModel(this.eventBus);
        this.view = new HomeView(this.eventBus);
        this.subscribe();
    }
    
}