import { BaseController } from "./BaseController.js";
import { SingleCollectionView } from "../views/SingleCollectionView/SingleCollectionView.js";
import { SingleCollectionModel } from "../models/SingleCollectionModel";
import { events } from "../consts/events";

/**
 * @description Класс контроллера страницы одной подборки.
 */
export class SingleCollectionController extends BaseController {
    /**
     * @description Создаёт экземпляр контроллера страницы одной подборки.
     */
    constructor() {
        super(SingleCollectionView, SingleCollectionModel);
        this.events.push(
            {
                event: events.singleCollectionPage.getContent, 
                handler: this.model.getContent,
            },
            {
                event: events.singleCollectionPage.render.content,
                handler: this.view.renderContent,
            }
        );
        this.subscribe();
    }
}