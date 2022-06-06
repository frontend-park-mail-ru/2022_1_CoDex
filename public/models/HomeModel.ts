import EventBus from "@/modules/eventBus";
import { BaseModel } from "./BaseModel";
/**
 * @description Класс модели домашней страницы.
 */
export class HomeModel extends BaseModel {
    /**
     * @description Создаёт модель домашней страницы.
     */
    constructor(eventBus: EventBus) {
        super(eventBus);
    }
}