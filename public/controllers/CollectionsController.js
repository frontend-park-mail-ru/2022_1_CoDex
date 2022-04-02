import { BaseController } from "./BaseController.js";
import { events } from "../consts/events";
import {CollectionsModel} from "../models/CollectionsModel.js"
import {CollectionsView} from "../views/CollectionsView/CollectionsView.js"

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
