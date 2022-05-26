import { BaseModel } from './BaseModel';
import { events } from '../consts/events';
import eventBus from '@/modules/eventBus';
import { getSearch } from '@/modules/connection';
import { statuses } from "../consts/statuses";
import { getURLArguments } from '@/modules/router';
import { searchResponse } from '@/types';

export class SearchModel extends BaseModel {
    constructor(eventBus: eventBus) {
        super(eventBus);
    }

    getContent = () => {
        const query = getURLArguments(window.location.pathname, '/search/:Query');
        if (!query.Query) {
            this.eventBus.emit(events.searchPage.render.emptyPage);
            return;
        }
        getSearch(query.Query)
            .then((response) => {
                if (!response) {
                    return;
                }
                if (response?.status === statuses.OK) {
                    const parsedBody : searchResponse = response.parsedResponse;
                    if (!parsedBody || !parsedBody.actors || !parsedBody.movies) {
                        return;
                    }
                    this.eventBus.emit(events.searchPage.render.persons, parsedBody.actors);
                    this.eventBus.emit(events.searchPage.render.films, parsedBody.movies);
                } 
            }).catch((e) => {
                console.log("Unexpected searchModel error: ", e);
            });
    }
}
