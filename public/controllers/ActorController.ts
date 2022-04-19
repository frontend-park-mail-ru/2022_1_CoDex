import { events } from "@/consts/events";
import { ActorView } from "@/views/ActorView/ActorView";
import { ActorModel } from "@/models/ActorModel";
import { BaseController } from "./BaseController";

/**
 * @description Класс контроллера страницы актёра.
 */
export class ActorController extends BaseController {

    public model: ActorModel;
    public view: ActorView;

    constructor() {
        super()
        this.model = new ActorModel(this.eventBus);
        this.view = new ActorView(this.eventBus);
        this.events.push(
            {
                event: events.actorPage.getContent,
                handler: this.model.getContent,
            },
            {
                event: events.actorPage.render.content,
                handler: this.view.renderContent,
            },
            {
                event: events.actorPage.render.page,
                handler: this.view.render,
            },
        );
    }
}