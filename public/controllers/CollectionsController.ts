import { BaseController } from "./BaseController";
import { events } from "../consts/events";
import {CollectionsModel} from "@/models/CollectionsModel"
import {CollectionsView} from "../views/CollectionsView/CollectionsView"

/**
 * @description Класс контроллера страницы подборок
 */
 export class CollectionsController extends BaseController {
    /**
     * @description Создаёт экземпляр контроллера страницы подборок.
     */
    constructor() {
        super(CollectionsView, CollectionsModel);
        this.events.push(
            {
                event: events.collectionsPage.getContent, 
                handler: this.model.getContent,
            },
            {
                event: events.collectionsPage.render.content,
                handler: this.view.renderContent,
            }
        );
        this.subscribe();
    }
}
