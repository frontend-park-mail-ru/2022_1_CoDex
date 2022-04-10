import { events } from "../consts/events.js";
import { MovieModel } from "../models/MovieModel.js";
import { MovieView } from "../views/MovieView/MovieView.js";
import { BaseController } from "./BaseController.js";

/**
 * @description Класс контроллера страницы одного фильма.
 */
export class MovieController extends BaseController {

    constructor() {
        super(MovieView, MovieModel);
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
        );
    }
}
