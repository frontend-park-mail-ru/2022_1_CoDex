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
        super();
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
            {
                event: events.profilePage.createBookmark,
                handler: this.model.createBookmark,
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
                event: events.profilePage.render.newBookmark,
                handler: this.view.renderNewBookmark,
            },
            {
                event: events.profilePage.render.changedProfile,
                handler: this.view.reRenderPage,
            },
            {
                event: events.header.logout,
                handler: this.view.reRenderPage,
            },
            {
                event: events.profilePage.validate,
                handler: this.model.validateSingleInput,
            },
            {
                event: events.profilePage.addValidationError,
                handler: this.view.addValidationError
            },
            {
                event: events.profilePage.deleteValidationError,
                handler: this.view.deleteValidationError
            },
            {
                event: events.profilePage.onSuccessSubmit,
                handler: this.view.successSumbit
            },

        );
        this.subscribe();
    }
}
