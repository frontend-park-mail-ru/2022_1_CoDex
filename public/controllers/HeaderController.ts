import { events } from "@/consts/events";
import { HeaderModel } from "@/models/HeaderModel";
import { HeaderView } from "@/views/HeaderView/HeaderView";
import { BaseController } from "./BaseController";

export class HeaderController extends BaseController {
    public model: HeaderModel;
    public view: HeaderView;

    constructor() {
        super()
        this.model = new HeaderModel(this.eventBus);
        this.view = new HeaderView(this.eventBus);
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
                event: events.profilePage.render.changedProfile,
                handler: this.view.renderUserBlock,
            },
            { 
                event: events.auth.changedUser, 
                handler: this.view.renderUserBlock 
            },
            { 
                event: events.auth.notLoggedIn, 
                handler: this.view.renderLoginButton 
            },
            { 
                event: events.auth.notLoggedIn, 
                handler: this.view.removeLogoutButton 
            },
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
                handler: this.view.addEventListenerToVerticalMenu 
            },
        );
        this.subscribe();
    }
}
