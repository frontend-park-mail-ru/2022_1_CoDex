import { BaseController } from "./BaseController";
import { events } from "../consts/events";
import {GenresModel} from "@/models/GenresModel";
import {GenresView} from "../views/GenresView/GenreView";

/**
 * @description Класс контроллера страницы подборок
 */
 export class GenresController extends BaseController {
    public model: GenresModel;
    public view: GenresView;

    constructor() {
        super()
        this.model = new GenresModel(this.eventBus);
        this.view = new GenresView(this.eventBus);
        this.events.push(
            {
                event: events.genresPage.getContent, 
                handler: this.model.getContent,
            },
            {
                event: events.genresPage.render.content,
                handler: this.view.renderContent,
            }
        );
        this.subscribe();
    }
}
