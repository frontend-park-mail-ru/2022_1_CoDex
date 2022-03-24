import { events } from "../consts/events.js";
import { AuthModel } from "../models/AuthModel.js";
import { AuthView } from "../views/AuthView/AuthView.js";
import { BaseController } from "./BaseController.js";

export class AuthController extends BaseController {
    constructor() {
        super(AuthView, AuthModel);
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
                handler: this.view.addErrorMessage },
            { 
                event: events.authPage.deleteValidationError, 
                handler: this.view.deleteErrorMessage 
            },
            // {
            //     event: events.authPage.wrongInput,
            //     handler: TODO Animation?
            // }
            {
                event: events.authPage.getContent,
                handler: this.model.getContent,
            },
            {
                event: events.authPage.validate,
                handler: this.model.validateSingleInput,
            },
            {
                event: events.authPage.submit,
                handler: this.model.submit,
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