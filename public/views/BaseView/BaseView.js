import {root} from '../../main.js';
import loader from '../../components/loader/loader.pug';
import {events} from '../../consts/events';
import {renderBaseView} from '../../utils/utils.js';

/**
 * @description Абстрактный класс базового представления.
 */
export class BaseView {
  /**
     * @description Создаёт базовое представление.
     * @param { EventBus } eventBus Глобальная шина событий
     * @param { Object } data Данные, необходимые для создания представления
     */
  constructor(eventBus, {data = {}} = {}) {
    this._data = data;
    this.eventBus = eventBus;
  }

  /**
     * @description Отправляет на глобальную шину событий событие отрисовки
     * контента страницы. Функция базового класса предназначена для
     * переопределения.
     */
  emitGetContent = () => {};

  /**
   * @description Отрисовывает страницу целиком, вместе с
   * навигационной панелью и нижним колонтитулом.
   * @param { object } routeData Конкретные данные о странице
   */
  render = (routeData) => {
    console.log("Rendering...");
    this.routeData = routeData;
    const content = document.querySelector('.content');
    if (!content) {
      root.innerHTML = renderBaseView();
      this.eventBus.emit(events.header.render.header);
    } else {
      content.innerHTML = loader();
    }
    this.emitGetContent();
  };
}
