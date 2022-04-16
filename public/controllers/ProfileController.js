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
                event: events.profilePage.sendChanges,
                handler: this.model.sendSettingsCnanges,
            },
            {
                event: events.profilePage.sendAvatar,
                handler: this.model.sendSettingsAvatar,
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
            {
                event: events.profilePage.render.changedProfile,
                handler: this.view.reRenderPage,
            },
            {
                event: events.profilePage.render.changedAvatar,
                handler: this.view.renderChangedProfile,
            },
            {
                event: events.header.logout,
                handler: this.view.reRenderPage,
            },
        );
        this.subscribe();
    }
}