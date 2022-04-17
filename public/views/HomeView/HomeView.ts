import EventBus from '@/modules/eventBus';
import {BaseView} from '../BaseView/BaseView';

/**
 * @description Класс представления домашней страницы.
 */
export class HomeView extends BaseView {
  /**
     * @description Создаёт объект представления
     * домашней страницы.
     * @param { EventBus } eventBus Глобальная шина событий
     * @param { object } data Данные для представления.
     */
  constructor(eventBus: EventBus, {data = {}} = {}) {
    super(eventBus, data);
  }
}
