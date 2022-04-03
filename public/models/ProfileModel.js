import { BaseModel } from "./BaseModel.js";

/**
 * @description Класс модели страницы профиля.
 */
 export class ProfileModel extends BaseModel {
    /**
     * @description Создаёт модель страницы одного фильма.
     * @param { EventBus } eventBus Глобальная шина событий
     */
    constructor(eventBus) {
        super(eventBus);
        this.errorMessages = new Map();
    }

    getIDFromURL = (url) => {
        // TODO
    }

    getContent = (URLData) => {
        // TODO
    }

    changeProfile = async (inputsData={}, formData) => {
        // TODO
    }

    changeAvatar = async (avatar) => {
        // TODO
    }
    
    getChangeContent = () => {
        // TODO
    }

    initErrorMessages = () => {
        // TODO
    }

    addError = () => {
        // TODO
    }

    deleteError = () => {
        // TODO
    }

    deleteAllErrors = () => {
        // TODO
    }

    sendChanges = (inputsData) => {
        // TODO
    }

    submitChanges = (inputsData) => {
        // TODO
    }

    hasErrors = (inputsData) => {
        // TODO
    }

    validateSingleInput = (inputName, inputValue) => {
        // TODO ?
    }
}