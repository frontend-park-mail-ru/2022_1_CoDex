import { BaseView } from "../BaseView/BaseView.js"
import { events } from "../../consts/events.js";
import collectionsContent from "../../components/collections/collections.pug";

/**
 * @description Класс представления страницы подборок
 */
 export class CollectionsView extends BaseView {
  /**
   * @description Создаёт представление страницы подборок.
   * @param { EventBus } eventBus Глобальная шина событий
   * @param { Object } data Данные, необходимые для создания представления
   */
  constructor(eventBus, {data={}} = {}) {
      super(eventBus, data);
  }

  /**
   * @description Отправляет на глобальную шину событий событие отрисовки 
   * контента страницы. 
   */
  emitGetContent = () => {
      this.eventBus.emit(events.collectionsPage.getContent);
  }

  /**
   * @description Отрисовывает контент страницы подборок.
   * @param { Object } data Данные для отрисовки контента подборок фильмов:
   * массив подборок
   */
  renderContent = (data) => {
      console.log(123);
      const template = collectionsContent(data);
      this.moviesData = data;
      const content = document.querySelector(".content");
      if (content) {
          content.innerHTML = template;
      } else {
          this.eventBus.emit(events.app.errorPage);
      }
  }
}