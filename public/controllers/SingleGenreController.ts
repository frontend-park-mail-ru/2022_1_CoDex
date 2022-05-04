import { BaseController } from "./BaseController";
import { SingleGenreView } from "@/views/SingleGenreView/SingleGenreView";
import { SingleGenreModel } from "@/models/SingleGenreModel";
import { events } from "@/consts/events";

/**
 * @description Класс контроллера страницы одной подборки.
 */
export class SingleGenreController extends BaseController {
    
    public model: SingleGenreModel;
    public view: SingleGenreView;

    constructor() {
        super()
        this.model = new SingleGenreModel(this.eventBus);
        this.view = new SingleGenreView(this.eventBus);
        this.events.push(
            {
                event: events.singleGenrePage.getContent, 
                handler: this.model.getContent,
            },
            {
                event: events.singleGenrePage.render.content,
                handler: this.view.renderContent,
            }
        );
        this.subscribe();
    }
}