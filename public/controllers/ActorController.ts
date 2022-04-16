import { events } from "@/consts/events";
import { ActorView } from "../views/ActorView/ActorView.js";
import { ActorModel } from "@/models/ActorModel";
import { BaseController } from "./BaseController";

/**
 * @description Класс контроллера страницы актёра.
 */
export class ActorController extends BaseController {

    constructor() {
        super(ActorView, ActorModel);
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