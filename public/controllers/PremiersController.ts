import { BaseController } from "./BaseController";
import { PremiersView } from "@/views/PremiersView/PremiersView";
import { PremiersModel } from "@/models/PremiersModel";
import { events } from "@/consts/events";

/**
 * @description Класс контроллера страницы одной подборки.
 */
export class PremiersController extends BaseController {
    
    public model: PremiersModel;
    public view: PremiersView;

    constructor() {
        super()
        this.model = new PremiersModel(this.eventBus);
        this.view = new PremiersView(this.eventBus);
        this.events.push(
            {
                event: events.premiersPage.getContent, 
                handler: this.model.getContent,
            },
            {
                event: events.premiersPage.render.content,
                handler: this.view.renderContent,
            }
        );
        this.subscribe();
    }
}