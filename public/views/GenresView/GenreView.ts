import {BaseView} from '../BaseView/BaseView';
import {events} from '../../consts/events';
import genresContent from '../../components/genres/genres.pug';
import EventBus from '@/modules/eventBus.js';

export class GenresView extends BaseView {
  moviesData: object;

  constructor(eventBus: EventBus, data : object = {}) {
    super(eventBus, data);
  }

  emitGetContent = () => {
    this.eventBus.emit(events.genresPage.getContent);
  };
  
  renderContent = (data: object) => {
    const template = genresContent({genresList: data});
    this.moviesData = data;
    const content = document.querySelector('.content');
    if (content) {
      content.innerHTML = template;
    } else {
      this.eventBus.emit(events.app.errorPage);
    }
  };
}
