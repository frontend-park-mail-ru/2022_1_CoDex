import { singleCollectionPageData } from '@/types';
import EventBus from '@/modules/eventBus';
import {events} from '@/consts/events';
import {getURLArguments} from '@/modules/router';
import {BaseView} from '../BaseView/BaseView';
import premiersContent from '@/components/premiers/premiers.pug';

/**
 * @description Класс представления страницы одной подборки.
 */
export class PremiersView extends BaseView {
  private moviesData: singleCollectionPageData;
  /**
     * @description Создаёт представление страницы одной подборки.
     * @param { EventBus } eventBus Глобальная шина событий
     * @param { Object } data Данные, необходимые для создания представления
     */
  constructor(eventBus: EventBus, {data={}} = {}) {
    super(eventBus, data);
  }

  /**
     * @description Отправляет на глобальную шину событий событие отрисовки
     * контента страницы.
     */
  emitGetContent = () => {
    const URLArgs = getURLArguments(window.location.pathname, '/collections/:ID');
    this.eventBus.emit(events.premiersPage.getContent, URLArgs);
  };

  /**
     * @description Отрисовывает контент страницы одной подборки.
     * @param { Object } data Данные для отрисовки контента подборки фильмов:
     * название подборки, даннные о фильмах
     */
  renderContent = (data: singleCollectionPageData) => {
    const template = premiersContent(data);
    this.moviesData = data;
    const content = document.querySelector('.content');
    if (content) {
      content.innerHTML = template;
    } else {
      this.eventBus.emit(events.app.errorPage);
    }
  };
}
