/**
 * @typedef { EventBus } Шина событий
 */

/**
 * @description Класс шины событий, необходимой для MVC моделей.
 */
class EventBus {
    #listeners;
    /**
     * @description Создаёт шину событий с пустыми обработчиками.
     */
    constructor() {
        this.#listeners = {};
    }

    /**
     * @description Подключает событие к шине событий.
     * @param { string } event Имя нового события
     * @param { function } callback Функция-callback для события
     */
    on(event, callback) {
        (this.#listeners[event] || (this.#listeners[event] = new Set())).add(callback);
    }

    /**
     * @description Отключает событие от шины событий.
     * @param { string } event Имя отключаемого события
     * @param { function } callback Функция-callback для события
     */
    off(event, callback) {
        this.#listeners[event]?.delete(callback);
    }

    /**
     * @description Вызывает каждый обработчик, подключённый к конерктному 
     * событию, передавая указанные данные.
     * @param { string } event Имя вызываемого события
     * @param { any } data Данные для вызываемых обработчиков
     */
    emit(event, ...data) {
        if (!this.#listeners[event]) {
            return;
        }
        const tmpSet = new Set(this.#listeners[event]);
        tmpSet?.forEach((listener) => listener(...data));
    }
}

export const eventBus = new EventBus();