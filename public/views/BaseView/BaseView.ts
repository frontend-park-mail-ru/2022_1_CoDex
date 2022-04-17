import { root } from '../../main';
import loader from '../../components/loader/loader.pug';
import { events } from '../../consts/events';
import { renderBaseView } from '../../utils/utils';
import EventBus from '@/modules/eventBus';
import { routerData } from '@/types';


/**
 * @description Абстрактный класс базового представления.
 */
export class BaseView {
  private _data: object;
  eventBus: EventBus;
  routeData: routerData;
  /**
     * @description Создаёт базовое представление.
     * @param { EventBus } eventBus Глобальная шина событий
     * @param { Object } data Данные, необходимые для создания представления
     */
  constructor(eventBus: EventBus, data: object) {
    this._data = data;
    this.eventBus = eventBus;
  }

  /**
     * @description Отправляет на глобальную шину событий событие отрисовки
     * контента страницы. Функция базового класса предназначена для
     * переопределения.
     */
  emitGetContent = () => { };

  /**
   * @description Отрисовывает страницу целиком, вместе с
   * навигационной панелью и нижним колонтитулом.
   * @param { object } routeData Конкретные данные о странице
   */
  render = (routeData : routerData) => {
    this.routeData = routeData;
    const content = document.querySelector('.content');
    if (!content) {
      if (root) {
        root.innerHTML = renderBaseView();
      } else {
        return;
      }
      this.eventBus.emit(events.header.render.header);
    } else {
      content.innerHTML = loader();
    }
    this.emitGetContent();
  };
}
