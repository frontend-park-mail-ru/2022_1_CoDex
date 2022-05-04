import { authPageData, loginData, registerData } from '@/types';
import { events } from '@/consts/events';
import { BaseView } from '../BaseView/BaseView';
import EventBus from '@/modules/eventBus';
import { authFormName, authConfig } from '@/consts/authConfig';
import authContent from '@/components/auth/auth.pug';

/**
 * @description Класс представления страницы авторизации / регистрации.
 */
export class AuthView extends BaseView {
  /**
     * @description Создаёт представление страницы
     * авторизации / регистрации.
     * @param { EventBus } eventBus Глобальная шина событий
     * @param { Object } data Данные, необходимые для создания представления
     */
  constructor(eventBus: EventBus, { data = {} } = {}) {
    super(eventBus, data);
  }

  /**
     * @description Отправляет на глобальную шину событий событие отрисовки
     * контента страницы.
     */
  emitGetContent = () => {
    this.eventBus.emit(events.authPage.getContent, this.routeData);
  };

  /**
     * @description Отрисовывает контент страницы авторизации / регистрации.
     * @param { Object } data Данные для формы авторизации / регистрации:
     * количество полей ввода и их названия
     */
  renderContent = (data: authPageData) => {
    this.data = data;
    const template = authContent(this.data);
    const content = document.querySelector('.content');
    if (content) {
      content.innerHTML = template;
      this.addValidateListeners();
      this.addSubmitListener();
    } else {
      this.eventBus.emit(events.app.errorPage);
    }
  };

  /**
     * @description Устанавливает обработчики событий на поля ввода
     * в форме авторизации / регистрации (на снятие ошибок, на валидацию
     * и на анимацию).
     */
  addValidateListeners = () => {
    const authForm = this.getAuthDOMForm();
    const textInputs = authForm?.querySelectorAll('.text-input');
    if (!authForm || !textInputs?.length) {
      return;
    }
    Object.values(textInputs).forEach((input, i) => {

      const formInput = <HTMLFormElement>input;
      if (i == 0) {
        formInput.focus();
      }
      input.addEventListener('input', () => {
        this.eventBus.emit(events.authPage.deleteAllErrors, formInput.name);
        this.deleteSubmitError();
      });
      input.addEventListener('change', () => {
        if (formInput.name === authConfig.repeatePasswordInput.name) {
          const passwordInput = <HTMLFormElement>this.getAuthDOMForm()?.[authConfig.passwordInput.name];
          this.eventBus.emit(events.authPage.validate, formInput.name,
            formInput.value, passwordInput.value);
        } else {
          this.eventBus.emit(events.authPage.validate, formInput.name,
            formInput.value, "");
        }
      });
      this.eventBus.emit(events.authPage.deleteAllErrors, formInput.name);
    });
  };

  /**
     * @description Получает форму авторизации / регистрации из DOM.
     * @return { HTMLFormElement } Форма авторизации / регистрации.
     */
  getAuthDOMForm = () => {
    return document.forms.namedItem(authFormName);
  };

  /**
   * @description Добавляет сообщение об ошибке ко всей форме.
   * @param { string } message Сообщение об ошибке
   */
  addSubmitError = (message: string) => {
    this.deleteSubmitError();
    const error = document.querySelector('.auth__btn__error');
    if (error) {
      error.textContent = message;
    }
  };

  /**
     * @description Очищает ошибку входа / регистрации
     * (над кнопкой отправления формы).
     */
  deleteSubmitError = () => {
    const error = document.querySelector('.auth__btn__error');
    if (error) {
      error.textContent = '';
    }
  };

  /**
     * @description Добавляет обработчик событий (нажатия) на
     * кнопку отправки данных в форме авторизации / регистрации.
     */
  addSubmitListener = () => {
    const authForm = this.getAuthDOMForm();
    const submitBtn = document.querySelector('.auth__btn__input') as HTMLInputElement;
    if (!authForm || !submitBtn) {
      return;
    }
    authForm.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
       submitBtn.click();
      } 
    });
    submitBtn.addEventListener('click', () => {
      const textInputs = authForm.querySelectorAll('.text-input');
      if (!textInputs?.length) {
        return;
      }
      const regData: registerData = {
        email: "",
        username: "",
        password: "",
        repeatpassword: ""
      };
      const logData: loginData = {
        email: "",
        password: "",
      };
      let isLogin = true;
      const inputs = Object.values(textInputs);
      inputs.forEach((currentInput) => {
        const formInput = <HTMLFormElement>currentInput;
        if (formInput.name === authConfig.repeatePasswordInput.name) {
          isLogin = false;
        }
      });
      Object.values(textInputs).forEach((input) => {
        const formInput = <HTMLFormElement>input;
        if (formInput.name === authConfig.emailInput.name) {
          logData.email = formInput.value;
          regData.email = formInput.value;
        } else if (formInput.name === authConfig.nameInput.name) {
          regData.username = formInput.value;
        } else if (formInput.name === authConfig.passwordInput.name) {
          logData.password = formInput.value;
          regData.password = formInput.value;
        } else if (formInput.name === authConfig.repeatePasswordInput.name) {
          regData.repeatpassword = formInput.value;
        }
      });
      if (isLogin) {
        this.eventBus.emit(events.authPage.submitLogin, logData);
      } else {
        this.eventBus.emit(events.authPage.submitRegister, regData);
      }
    });
  };

  /**
     * @description Добавляет сообщение об ошибке для конкретного поля ввода.
     * @param { string } inputName Название поля ввода
     * @param { string } errorMessage Сообщение об ошибке
     */
  addErrorMessage = (inputName: string, errorMessage: string) => {
    const authForm = this.getAuthDOMForm();
    const errorField = document.getElementsByClassName(`auth-input__head__error ${inputName}`)[0];
    if (!inputName || !errorMessage || !authForm || !errorField) {
      return;
    }
    const errorInput = authForm[inputName] as HTMLFormElement;
    errorInput.classList.add('error');
    errorField.textContent = errorMessage;
  };

  /**
     * @description Удаляет сообщение об ошибке для конкретного поля ввода.
     * @param { string } inputName Название поля ввода
     */
  deleteErrorMessage = (inputName: string) => {
    const authForm = this.getAuthDOMForm();
    const errorField = document.getElementsByClassName(`auth-input__head__error ${inputName}`)[0];
    if (!inputName || !authForm || !errorField) {
      return;
    }
    const errorInput = authForm[inputName] as HTMLFormElement;
    errorInput.classList.remove('error');
    errorField.textContent = '';
  };
}
