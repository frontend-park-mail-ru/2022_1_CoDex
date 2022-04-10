import { events } from "../consts/events.js";
import { ProfileModel } from "../models/ProfileModel.js";
import { ProfileView } from "../views/ProfileView/ProfileView.js";
import { BaseController } from "./BaseController.js";

/**
 * @description Класс контроллера страницы профиля пользователя.
 */
export class ProfileController extends BaseController {

    constructor() {
        super(ProfileView, ProfileModel);
        this.events.push(

            {
                event: events.profilePage.getProfileInfo,
                handler: this.model.getProfileInfo,
            },
            {
                event: events.profilePage.getBookmarks,
                handler: this.model.getBookmarks,
            },
            {
                event: events.profilePage.getReviews,
                handler: this.model.getReviews,
            },
            {
                event: events.profilePage.getContent,
                handler: this.model.getContent,
            },
            {
                event: events.profilePage.render.content,
                handler: this.view.renderContent,
            },
            {
                event: events.profilePage.render.profileInfo,
                handler: this.view.renderProfileInfo,
            },
            {
                event: events.profilePage.render.reviews,
                handler: this.view.renderReviews,
            },
            {
                event: events.profilePage.render.bookmarks,
                handler: this.view.renderBookmarks,
            },
            // {
            //     event: events.header.logout,
            //     handler: this.view.deleteSettings,
            // },
            // {
            //     event: events.auth.gotUser,
            //     handler: this.view.renderSettings,
            // },
            
            // {
            //     event: events.auth.notLoggedIn,
            //     handler: this.view.deleteSettings,
            // },
            // {
            //     event: events.profilePage.addValidationError,
            //     handler: this.view.addErrorMessage,
            // },
            // {
            //     event: events.profilePage.render,
            //     handler: this.view.render,
            // },
            // {
            //     event: events.profilePage.sendChanges,
            //     handler: this.model.sendChanges,
            // },
            // {
            //     event: events.profilePage.submit,
            //     handler: this.model.submitChanges,
            // },
            // {
            //     event: events.profilePage.submitError,
            //     handler: this.view.addSubmitError,
            // },
            // {
            //     event: events.profilePage.validate,
            //     hanlder: this.view.validateSingleInput,
            // },
            // {
            //     event: events.profilePage.wrongInput,
            //     hanlder: TODO animation?
            // }
        );
        this.subscribe();
    }
}