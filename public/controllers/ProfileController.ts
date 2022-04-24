import { authConfig } from "@/consts/authConfig";
import { events } from "../consts/events";
import { ProfileModel } from "../models/ProfileModel";
import { ProfileView } from "../views/ProfileView/ProfileView";
import { BaseController } from "./BaseController";

/**
 * @description Класс контроллера страницы профиля пользователя.
 */
export class ProfileController extends BaseController {

    public model: ProfileModel;
    public view: ProfileView;

    constructor() {
        super()
        this.model = new ProfileModel(this.eventBus);
        this.view = new ProfileView(this.eventBus);
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
            // {
            //     event: events.profilePage.render.content,
            //     handler: this.view.renderContent,
            // },
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
                handler: this.view.reRenderProfileInfo,
            },
            {
                event: events.auth.gotUser,
                handler: this.view.reRenderProfileInfo,
            },
            //TODO{
            //     event: events.profilePage.render.changedAvatar,
            //     handler: this.view.renderChangedProfile,
            // },
            {
                event: events.header.logout,
                handler: this.view.reRenderPage,
            },
        );
        this.subscribe();
    }
}
