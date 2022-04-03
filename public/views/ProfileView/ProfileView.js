import { events } from "../../consts/events.js";
import { BaseView } from "../BaseView/BaseView.js";

/**
 * @description Класс представления страницы профиля.
 */
export class ProfileView extends BaseView {
    /**
     * @description Создаёт представление страницы профиля.
     * @param { EventBus } eventBus Глобальная шина событий
     * @param { Object } data Данные, необходимые для создания представления
    */
     constructor(eventBus, {data={}} = {}) {
        super(eventBus, data);
    }

    render = (routeData) => {
        // TODO
    }

    /**
     * @description Отправляет на глобальную шину событий событие отрисовки
     * контента страницы.
     */
    emitGetContent = () => {
        this.eventBus.emit(events.profilePage.getContent, this.routeData);
    }
    
    renderContent = (user, isOwner) => {
        // TODO
    }

    openSettings = () => {
        // TODO
    }

    closeSettings = () => {
        // TODO
    }

    renderSettings = () => {
        // TODO
    }

    deleteSettings = () => {
        // TODO
    }

    submitChange = () => {
        // TODO
    }

    addValidateListeners = () => {
        // TODO
    }

    addSubmitError = () => {
        // TODO
    }

    deleteSubmitError = () => {
        // TODO
    }

    addSubmitListener = () => {
        // TODO
    }

    addErrorMessage = () => {
        // TODO
    }

    deleteErrorMessage = () => {
        // TODO
    }

    addAvatarListener = () => {
        // TODO
    }

    renderCollections = () => {
        // TODO
    }

    renderActivity = () => {
        // TODO
    }
}