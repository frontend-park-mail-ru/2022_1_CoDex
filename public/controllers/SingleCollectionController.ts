import { BaseController } from "./BaseController";
import { SingleCollectionView } from "@/views/SingleCollectionView/SingleCollectionView";
import { SingleCollectionModel } from "@/models/SingleCollectionModel";
import { events } from "@/consts/events";

/**
 * @description Класс контроллера страницы одной подборки.
 */
export class SingleCollectionController extends BaseController {
    
    public model: SingleCollectionModel;
    public view: SingleCollectionView;

    constructor() {
        super()
        this.model = new SingleCollectionModel(this.eventBus);
        this.view = new SingleCollectionView(this.eventBus);
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
