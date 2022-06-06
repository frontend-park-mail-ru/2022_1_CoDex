import { events } from "../consts/events";
import { AuthModel } from "@/models/AuthModel";
import { AuthView } from "@/views/AuthView/AuthView";
import { BaseController } from "./BaseController";

export class AuthController extends BaseController {
    public model: AuthModel;
    public view: AuthView;

    constructor() {
        super();
        this.model = new AuthModel(this.eventBus);
        this.view = new AuthView(this.eventBus);
        this.events.push(
            {
                event: events.authPage.render.page, 
                handler: this.view.render 
            },
            { 
                event: events.authPage.render.content, 
                handler: this.view.renderContent 
            },
            { 
                event: events.authPage.addValidationError, 
                handler: this.view.addErrorMessage 
            },
            { 
                event: events.authPage.deleteValidationError, 
                handler: this.view.deleteErrorMessage 
            },
            {
                event: events.authPage.getContent,
                handler: this.model.getContent,
            },
            {
                event: events.authPage.validate,
                handler: this.model.validateSingleInput,
            },
            {
                event: events.authPage.submitLogin,
                handler: this.model.submitLogin,
            },
            {
                event: events.authPage.submitRegister,
                handler: this.model.submitRegister,
            },
            {
                event: events.authPage.redirect,
                handler: this.model.redirect,
            },
            {
                event: events.authPage.submitError,
                handler: this.view.addSubmitError,
            },
            {
                event: events.authPage.deleteAllErrors,
                handler: this.model.deleteAllErrors,
            },
        );
        this.subscribe();
    }
}