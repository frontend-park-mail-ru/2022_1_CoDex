import { events } from "../consts/events.js";
import { HeaderModel } from "../models/HeaderModel.js";
import { HeaderView } from "../views/HeaderView/HeaderView.js";
import { BaseController } from "./BaseController.js";

export class HeaderController extends BaseController {
    constructor() {
        super(HeaderView, HeaderModel);
        this.events.push(
            { 
                event: events.header.changeActiveButton, 
                handler: this.view.changeActiveButton 
            },
            { 
                event: events.auth.gotUser, 
                handler: this.view.renderUserBlock 
            },
            { 
                event: events.auth.changedUser, 
                handler: this.view.renderUserBlock 
            },
            { 
                event: events.auth.notLoggedIn, 
                handler: this.view.renderLoginButton 
            },
            // TODO Адаптивность
            { 
                event: events.router.go, 
                handler: this.model.compareURLWithPath 
            },
            { 
                event: events.header.render.header, 
                handler: this.view.addEventListenerToSearch 
            },
            { 
                event: events.header.render.header, 
                handler: this.view.addEventListenerToResize 
            },
            { 
                event: events.header.render.header, 
                handler: this.view.addEventListenerToVerticalMenu 
            },
        );
        this.subscribe();
    }
}
