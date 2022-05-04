import { BaseView } from '../BaseView/BaseView';
import searchPug from '../../components/search/search.pug';
import filmsBlock from '../../components/search/filmsBlock/filmsBlock.pug'
import personsBlock from '../../components/search/personsBlock/personsBlock.pug'
import emptyPagePug from '../../components/search/emptySearch.pug';
import { events } from '@/consts/events';
import eventBus from '@/modules/eventBus';
import { getURLArguments } from '@/modules/router';
import { actorsSearchData, filmsSearchData } from '@/types';


export class SearchView extends BaseView {
    constructor(eventBus: eventBus, { data = {} } = {}) {
        super(eventBus, data);

    }

    emitGetContent = () => {
        this.renderContent();
        this.eventBus.emit(events.searchPage.getContent);
    }

    renderContent = () => {
        const query = getURLArguments(window.location.pathname, '/search/:Query');
        if (!query.Query) {
            this.eventBus.emit(events.searchPage.render.emptyPage);
            return;
        }
        const content = document.querySelector('.content');
        if (!content) {
            return;
        }
        content.innerHTML = searchPug({ value: decodeURI(query.Query)});
    }

    renderFilms = (data: filmsSearchData) => {
        const filmsContainer = document.querySelector('.search-block__films-container');
        if (!filmsContainer) {
            return;
        }
        filmsContainer.innerHTML = filmsBlock(data);
    }

    renderPersons = (data: actorsSearchData) => {
        const personsContainer = document.querySelector('.search-block__persons-container');
        if (!personsContainer) {
            return;
        }
        personsContainer.innerHTML = personsBlock(data);
    }

    renderEmptyPage = () => {
        const content = document.querySelector('.content');
        if (!content) {
            return;
        }
        content.innerHTML = emptyPagePug();
    }
}
