import { events } from "@/consts/events";
import { MovieModel } from "@/models/MovieModel";
import { MovieView } from "@/views/MovieView/MovieView";
import { BaseController } from "./BaseController";

/**
 * @description Класс контроллера страницы одного фильма.
 */
export class MovieController extends BaseController {
    public model: MovieModel;
    public view: MovieView;

    constructor() {
        super()
        this.model = new MovieModel(this.eventBus);
        this.view = new MovieView(this.eventBus);
        this.events.push(
            {
                event: events.moviePage.getContent,
                handler: this.model.getContent,
            },
            {
                event: events.moviePage.askToLog,
                handler: this.view.askToLog
            },
            {
                event: events.moviePage.sendRating,
                handler: this.model.sendRating,
            },
            {
                event: events.moviePage.ratingSuccess,
                handler: this.view.onRatingSuccess,
            },
            {
                event: events.moviePage.sendReview,
                handler: this.model.sendReview,
            },
            {
                event: events.moviePage.render.content,
                handler: this.view.renderContent,
            },
            {
                event: events.moviePage.render.page,
                handler: this.view.render,
            },
            {
                event: events.moviePage.reviewSuccess,
                handler: this.view.renderReviewSuccess,
            },
            {
                event: events.moviePage.addCollection,
                handler: this.model.addCollection,
            },
            {
                event: events.moviePage.removeCollection,
                handler: this.model.removeCollection,
            },
            {
                event: events.moviePage.createCollection,
                handler: this.model.createCollection,
            },
            {
                event: events.moviePage.createCollectionSuccess,
                handler: this.view.onCreateCollectionSuccess
            },
            {
                event: events.header.logout,
                handler: this.view.onLogout,
            },
            {
                event: events.auth.gotUser,
                handler: this.view.onGotUser,
            },
        );
    }
}
