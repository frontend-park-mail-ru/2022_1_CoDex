import { SearchModel } from '../models/SearchModel';
import { SearchView } from '../views/SearchView/SearchView';
import { BaseController } from './BaseController';
import { events } from '../consts/events';

/**
 * @description Класс контроллера страницы поиска.
 */
export class SearchController extends BaseController {
    public model: SearchModel;
    public view: SearchView;
    constructor() {
        super();
        this.model = new SearchModel(this.eventBus);
        this.view = new SearchView(this.eventBus);
        this.events.push(
            {
                event: events.searchPage.getContent,
                handler: this.model.getContent,
            },
            {
                event: events.searchPage.render.emptyPage,
                handler: this.view.renderEmptyPage
            },
            {
                event: events.searchPage.render.films,
                handler: this.view.renderFilms,
            },
            {
                event: events.searchPage.render.persons,
                handler: this.view.renderPersons,
            },
        );
    }
}
