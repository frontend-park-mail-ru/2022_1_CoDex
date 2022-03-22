import { BaseView } from "../BaseView/BaseView.js"
import { events } from "../../consts/events.js";
import collectionsRender from "../../components/collections/collections.pug";

export class CollectionView extends BaseView {

    constructor(eventBus, {data = {}} = {}) {
      super(eventBus, data);
    }
  
    emitGetContent = () => {
      
    }
  
    renderContent = (data) => {
      
    }
  }