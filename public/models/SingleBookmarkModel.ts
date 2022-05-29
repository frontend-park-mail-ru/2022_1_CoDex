import { authModule } from "@/modules/auth";
import EventBus from "@/modules/eventBus";
import { singleBookmark, singleCollectionMovie, singleBookmarkPageData, bookmarkDeleteRequest, bookmarkRequest, bookmarkChangePrivateRequest, bookmarkChangeTitleRequest } from "@/types";
import { sleep } from "@/utils/sleep";
import { events } from "../consts/events";
import { statuses } from "../consts/statuses";
import { getSingleBookmark, deleteBookmark, removeMovieFromBookmark, changePrivateSettings, changeTitle, } from "../modules/connection";
import { BaseModel } from "./BaseModel";

/**
 * @description Класс модели одной закладки.
 */
export class SingleBookmarkModel extends BaseModel {
    /**
     * @description Создаёт экземляр модели одной закладки.
     * @param { EventBus } eventBus Глобальная шина событий
     */
    constructor(eventBus: EventBus) {
        super(eventBus);
    }

    /**
     * @description Получает информацию для контента страницы 
     * одной закладки.
     * @param { object } bookmark Информация о закладке: 
     * название, ID
     */
    getContent = (bookmark: singleBookmark) => {
        if (!bookmark?.ID) {
            this.eventBus.emit(events.app.errorPage);
            return;
        }
        getSingleBookmark(bookmark.ID).then(
            (response) => {
                if (!response) {
                    this.eventBus.emit(events.app.errorPage);
                } if (response?.status === statuses.OK && response.parsedResponse) {
                    const parsed = <singleBookmarkPageData>response.parsedResponse;
                    (async () => {
                        await sleep(500);
                        parsed.isThisUser = authModule.user ? (authModule.user.ID == parsed.userId) : false;
                        this.shortenMoviesDescription(parsed.movielist);
                        this.eventBus.emit(
                            events.singleBookmarkPage.render.content, parsed
                        );
                    })();
                    // parsed.isThisUser = authModule.user ? (authModule.user.ID == parsed.userId) : false;
                    // this.shortenMoviesDescription(parsed.movielist);
                    // console.log(parsed)
                    // this.eventBus.emit(
                    //     events.singleBookmarkPage.render.content, parsed
                    // );
                } else if (response?.status === statuses.NOT_FOUND) {
                    this.eventBus.emit(events.app.errorPageText, "Такой подборки нет :(");
                }
            }
        ).catch((e) => {
            console.log("Unexpected singleCollection error: ", e);
        });
    }

    /**
     * @description Укорачивает, если требуется, переданное описание фильма,
     * согласно максимальной длине краткого описания. В случае укорачивания
     * добавляет в конце описания "..."
     * @param { string } description Описание фильма
     * @return { string } Укороченное описание фильма
     */
    processDescription = (description: string) => {
        const maxMovieShortDescriptionLength = 190;
        if (description.length < maxMovieShortDescriptionLength) {
            return description;
        }
        return description.slice(0, description.slice(
            0, maxMovieShortDescriptionLength).
            lastIndexOf(" ")) + "...";
    }

    /**
     * @description По необходимости укорачивает описания фильмов.
     * @param { Object[] } movielist Массив данных о фильмах
     */
    shortenMoviesDescription = (movielist: singleCollectionMovie[]) => {
        for (const movie of movielist) {
            movie.description = this.processDescription(movie.description);
        }
    }

    deleteBookmark = (bookmarkData: bookmarkDeleteRequest) => {
        deleteBookmark(bookmarkData).then(() => {
            this.eventBus.emit(events.redirectBack);
        }).catch((e) => {
            console.log("Unexpected singleCollection error: ", e);
        });
    }

    deleteMovie = (bookmarkData: bookmarkRequest) => {
        removeMovieFromBookmark(bookmarkData).then(() => {
            const bookmark: singleBookmark = { ID: bookmarkData.bookmarkId };
            this.getContent(bookmark);
        }).catch((e) => {
            console.log("Unexpected singleCollection error: ", e);
        });
    }

    changePrivate = (bookmarkData: bookmarkChangePrivateRequest) => {
        changePrivateSettings(bookmarkData).then((response) => {
            if (!response) {
                this.eventBus.emit(events.app.errorPage);
            }
        });
    }

    changeTitle = (bookmarkData: bookmarkChangeTitleRequest) => {
        changeTitle(bookmarkData).then((response) => {
            if (response?.status === statuses.OK) {
                const parsed = <singleBookmarkPageData>response.parsedResponse;
                parsed.isThisUser = authModule.user ? (authModule.user.ID == parsed.userId) : false;
                this.shortenMoviesDescription(parsed.movielist);
                this.eventBus.emit(
                    events.singleBookmarkPage.render.content, parsed
                );
            }
            if (!response) {
                this.eventBus.emit(events.app.errorPage);
            }
        });
    }
}
