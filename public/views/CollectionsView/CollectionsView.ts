import {BaseView} from '../BaseView/BaseView';
import {events} from '../../consts/events';
import collectionsContent from '../../components/collections/collections.pug';
import EventBus from '@/modules/eventBus.js';

/**
 * @description Класс представления страницы подборок
 */
export class CollectionsView extends BaseView {
  moviesData: object;
  /**
   * @description Создаёт представление страницы подборок.
   * @param { EventBus } eventBus Глобальная шина событий
   * @param { Object } data Данные, необходимые для создания представления
   */
  constructor(eventBus: EventBus, data : object) {
    super(eventBus, data);
  }

  /**
   * @description Отправляет на глобальную шину событий событие отрисовки
   * контента страницы.
   */
  emitGetContent = () => {
    this.eventBus.emit(events.collectionsPage.getContent);
  };

  /**
   * @description Отрисовывает контент страницы подборок.
   * @param { Object } data Данные для отрисовки контента подборок фильмов:
   * массив подборок
   */
  renderContent = (data: object) => {
    const template = collectionsContent(data);
    this.moviesData = data;
    const content = document.querySelector('.content');
    if (content) {
      content.innerHTML = template;
    } else {
      this.eventBus.emit(events.app.errorPage);
    }
  };
}
