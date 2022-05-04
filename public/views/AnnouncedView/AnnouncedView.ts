import { moviePageData } from '@/types';
import EventBus from '@/modules/eventBus';
import {BaseView} from '../BaseView/BaseView';
import {events} from '@/consts/events';
import {getURLArguments} from '@/modules/router';
import {slider} from '@/utils/slider';
import announcedPageContent from '@/components/announced/announced.pug';

/**
 * @description Класс представления страницы одного фильма
 */
export class AnnouncedView extends BaseView {
  private movieID: string;
  /**
     * @description Создаёт представление страницы одного фильма.
     * @param { EventBus } eventBus Глобальная шина событий
     * @param { Object } data Данные, необходимые для создания представления
    */
  constructor(eventBus: EventBus, {data = {}} = {}) {
    super(eventBus, data);
  }

  /**
     * @description Отправляет на глобальную шину событий событие отрисовки
     * контента страницы.
     */
  emitGetContent = () => {
    const URLArgs = getURLArguments(window.location.pathname, '/announced/:ID');
    this.eventBus.emit(events.announcedPage.getContent, URLArgs);
  };

  /**
     * @description Отрисовывает контент страницы фильма.
     * @param { Object } data Информация о фильме (от названия до отзывов)
     */
  renderContent = (data: moviePageData) => {
    if (!data) {
      return;
    }
    this.movieID = data.movie.ID;
    const template = announcedPageContent(data);
    const content = document.querySelector('.content');
    if (content) {
      content.innerHTML = template;
      slider('#related-slider');
    } else {
      this.eventBus.emit(events.app.errorPage);
    }
  };

}
