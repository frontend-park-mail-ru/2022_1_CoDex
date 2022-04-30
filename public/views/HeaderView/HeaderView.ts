import { BaseView } from '../BaseView/BaseView';
import EventBus from '@/modules/eventBus';
import { events } from '@/consts/events';
import { routes } from '@/consts/routes';
import { renderBaseView, createElementFromHTML } from '@/utils/utils';
import { authModule } from '@/modules/auth';
import loginButton from '@/components/header/loginButton.pug';
import logoutButton from '@/components/header/logoutButton.pug';
import userBlock from '@/components/header/userBlock/userBlock.pug';

/**
 * @description Класс представления навигационной панели.
 */
export class HeaderView extends BaseView {
  private searchIsClicked: boolean;
  private verticalMenuIsClicked: boolean;
  /**
     * @description Создаёт представление навигационной панели.
     * @param { eventBus } eventBus Глобальная шина событий
     */
  constructor(eventBus: EventBus) {
    super(eventBus);
    this.searchIsClicked = false;
    this.verticalMenuIsClicked = false;
  }

  /**
     * @description Рендерит пустое отображение навигационной панели.
     */
  render = () => {
    const template = renderBaseView();
    const header = this.getHeaderFromDOM();
    if (header) {
      header.innerHTML = template;
    } else {
      this.eventBus.emit(events.app.errorPage);
    }
    this.addEventListenerToVerticalMenu();
  };

  /**
     * @description Делает кнопку навигационной панели с указанной
     * ссылкой активной.
     * @param { string } buttonHref Ссылка кнопки навигационной панели, которую
     * надо сделать активной
     */
  changeActiveButton = (buttonHref: string) => {
    this.unactiveAllButtons();
    if (!buttonHref) {
      return;
    }
    const header = this.getHeaderFromDOM();
    const buttons = header?.querySelectorAll('.navbar__menu-btn');
    if (!buttons?.length) {
      return;
    }
    Object.values(buttons).forEach((button) => {
      if (button.getAttribute('href') === buttonHref) {
        button.classList.add('navbar__menu-btn__active');
      }
    });
  };

  /**
     * @description Делает все кнопки навигационной панели неактивными.
     */
  unactiveAllButtons = () => {
    const activeButtons = document.querySelectorAll('.navbar__menu-btn__active');
    if (!activeButtons) {
      return;
    }
    Object.values(activeButtons).forEach((button) => {
      button.classList.remove('navbar__menu-btn__active');
    });
  };

  /**
     * @description Убирает кнопку выхода с навигационной панели
     */
  removeLogoutButton = () => {
    const logoutBtn = [...Object.values(document.querySelectorAll('.navbar__vertical-menu__btn-container a'))]
      .find((elem) => elem.textContent?.includes('Выйти'));
    if (logoutBtn) {
      logoutBtn.remove();
    }
  };

  /**
     * @description Отрисовывает кнопку авторизации в навигационной панели.
     */
  renderLoginButton = () => {
    const userBlock = document.querySelector('.user-block');
    if (!userBlock) {
      return;
    }
    userBlock.replaceWith(<Node>createElementFromHTML(<string>loginButton()));
  };

  /**
     * @description Отрисовывает блок навигационной панели,
     * предназначенный для информации пользователя: в зависимости от
     * ситуации, отрисовывает приглашение ко выходу или кнопку выхода.
     */
  renderUserBlock = () => {
    const changeBlock = document.querySelector('.navbar__login-btn') ||
      document.querySelector('.user-block');
    if (!authModule.user || !changeBlock) {
      return;
    }
    changeBlock.replaceWith(<Node>createElementFromHTML(<string>userBlock({
      imgsrc: authModule.user.imgsrc,
      userID: authModule.user.ID,
      profileHref: routes.profilePage,
    })));
    const verticalMenu = document.querySelector('.navbar__vertical-menu__btn-container');
    if (verticalMenu) {
      const logouttBtn = document.querySelector('.user-block__logout-btn not-route user-block__submenu__block');
      if (logouttBtn) {
        return;
      }
      verticalMenu.appendChild(<Node>createElementFromHTML(<string>logoutButton()));
    }
    this.addEventListenerToLogoutButton();
  };

  /**
     * @description Добавляет обработчик события для нажатия на
     * кнопку выхода из аккаунта (заменяет на приглашение ко входу).
     */
  addEventListenerToLogoutButton = () => {
    const logoutButton = document.querySelectorAll('.user-block__logout-btn');
    if (!logoutButton || !logoutButton.length) {
      return;
    }
    logoutButton.forEach((button) => {
      button.addEventListener('click', () => {
        this.removeLogoutButton();
        this.renderLoginButton();
        this.eventBus.emit(events.header.logout);
      });
    });
  };


  /**
     * @description Находит и возвращает элемент навигационной панели.
     * @return { HTMLDivElement } Элемент навигационной панели
     */
  getHeaderFromDOM = () => {
    return document.querySelector('.navbar');
  };

  addEventListenerToResize = () => {
    // TODO
  };

  addEventListenerToSearch = () => {
    // TODO
  };

  addEventListenerToVerticalMenu = () => {
    const burgerButton = document.querySelector('.navbar__vertical-menu__main-btn');
    const burgerButtonList = document.querySelectorAll('.navbar__vertical-menu__btn-container');

    if (!burgerButton) { return; }
    const verticalMenu = document.querySelector('.navbar__vertical-menu__btn-container') as HTMLElement;
    if (!verticalMenu) { return; }
    burgerButton.addEventListener("click", (e) => {
      if (burgerButton.classList.contains('open')) {
        burgerButton.classList.remove("open");
        verticalMenu.style.display = "none";
      } else {
        burgerButton.classList.add("open");
        verticalMenu.style.display = "flex";
      }
    });
    burgerButtonList.forEach((button) => {
      button.addEventListener("click", (e) => {
        burgerButton.classList.remove("open");
        verticalMenu.style.display = "none";
      })
    });

  };
}
