import { events } from "@/consts/events";
import { AnnouncedModel } from "@/models/AnnouncedModel";
import { AnnouncedView } from "@/views/AnnouncedView/AnnouncedView";
import { BaseController } from "./BaseController";

/**
 * @description Класс контроллера страницы одного фильма.
 */
export class AnnouncedController extends BaseController {
    public model: AnnouncedModel;
    public view: AnnouncedView;

    constructor() {
        super()
        this.model = new AnnouncedModel(this.eventBus);
        this.view = new AnnouncedView(this.eventBus);
        this.events.push(
            {
                event: events.announcedPage.getContent,
                handler: this.model.getContent,
            },
            {
                event: events.announcedPage.render.content,
                handler: this.view.renderContent,
            },
            {
                event: events.announcedPage.render.page,
                handler: this.view.render,
            },
        );
    }
}
