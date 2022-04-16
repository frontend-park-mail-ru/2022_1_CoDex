/**
 * @typedef { EventBus } Шина событий
 */

/**
 * @description Класс шины событий, необходимой для MVC моделей.
 */
export default class EventBus {
    private listeners: Map<string, Set<Function> | null>;
    /**
     * @description Создаёт шину событий с пустыми обработчиками.
     */
    constructor() {
        this.listeners = new Map;
    }

    /**
     * @description Подключает событие к шине событий.
     * @param { string } event Имя нового события
     * @param { function } callback Функция-callback для события
     */
    on(event: string, callback: Function) {
        if (this.listeners.get(event))
            this.listeners.get(event)?.add(callback);
        else 
            this.listeners.set(event, (new Set<Function>([callback])));
    }

    /**
     * @description Отключает событие от шины событий.
     * @param { string } event Имя отключаемого события
     * @param { function } callback Функция-callback для события
     */
    off(event: string, callback: Function) {
        this.listeners.get(event)?.delete(callback);
    }

    /**
     * @description Вызывает каждый обработчик, подключённый к конкретному 
     * событию, передавая указанные данные.
     * @param { string } event Имя вызываемого события
     * @param { any } data Данные для вызываемых обработчиков
     */
    emit(event: string, ...data: any) {
        if (!this.listeners.get(event)) {
            return;
        }
        const tmpSet = new Set(this.listeners.get(event));
        tmpSet?.forEach((listener) => listener(...data));
    }
}

export const eventBus = new EventBus();
