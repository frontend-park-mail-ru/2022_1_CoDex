import { BaseController } from "./BaseController";
import { SingleBookmarkView } from "@/views/SingleBookmarkView/SingleBookmarkView";
import { SingleBookmarkModel } from "@/models/SingleBookmarkModel";
import { events } from "@/consts/events";

/**
 * @description Класс контроллера страницы одной закладки.
 */
export class SingleBookmarkController extends BaseController {
    
    public model: SingleBookmarkModel;
    public view: SingleBookmarkView;

    constructor() {
        super()
        this.model = new SingleBookmarkModel(this.eventBus);
        this.view = new SingleBookmarkView(this.eventBus);
        this.events.push(
            {
                event: events.singleBookmarkPage.getContent, 
                handler: this.model.getContent,
            },
            {
                event: events.singleBookmarkPage.render.content,
                handler: this.view.renderContent,
            },
            {
                event: events.singleBookmarkPage.delete.bookmark,
                handler: this.model.deleteBookmark,
            },
            {
                event: events.singleBookmarkPage.delete.movie,
                handler: this.model.deleteMovie,
            },
            {
                event: events.singleBookmarkPage.showNotify,
                handler: this.view.showNotify,
            },
            {
                event: events.singleBookmarkPage.changePrivate,
                handler: this.model.changePrivate,
            },
            {
                event: events.singleBookmarkPage.changeTitle,
                handler: this.model.changeTitle,
            },
            {
                event: events.header.logout,
                handler: this.view.reRenderPage,
            },
        );
        this.subscribe();
    }
}