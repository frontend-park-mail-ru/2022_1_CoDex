export const events = {
    pathChanged: "pathChanged",
    redirectBack: "redirectBack",
    redirectForward: "redirectForward",

    app: {
        start: "app:start",
        errorPage: "app:errorPage",
        noAccess: "app:noAccess",
        errorPageText: "app:errorPageText",
    },
    router: {
        go: "router:go",
    },
    header: {
        render: {
            content: "header:renderContent",
            header: "header:renderHeader",
        },
        changeActiveButton: "header:changeActiveButton",
        logout: "header:logout",
    },
    auth: {
        notLoggedIn: "auth:notLoggedIn",
        gotUser: "auth:gotUser",
        changedUser: "auth:changedUser",
    },

    authPage: {
        render: {
            page: "authPage:renderPage",
            content: "authPage:renderContent",
        },
        getContent: "authPage:getContent",
        redirect: "authPage:redirect",
        logRegSuccess: "authPage:logRegSuccess",
        validate: "authPage:validate",
        submitLogin: "authPage:submitLogin",
        submitRegister: "authPage:submitRegister",
        submitError: "authPage:submitError",
        wrongInput: "authPage:wrongInput",
        deleteValidationError: "authPage:deleteValidationError",
        addValidationError: "authPage:addValidationError",
        deleteAllErrors: "authPage:deleteAllErrors",
    },

    collectionsPage: {
        render: {
            content: "collectionsPage:renderContent",
        },
        getContent: "collectionsPage:getContent",
    },

    singleCollectionPage: {
        render: {
            content: "singleCollectionPage:renderContent",
        },
        getContent: "singleCollectionPage:getContent",
    },

    singleBookmarkPage: {
        render: {
            content: "singleBookmarkPage:renderContent",
        },
        getContent: "singleBookmarkPage:getContent",
        changePrivate: "signleBookmarkPage:changePrivate",
        delete: {
            bookmark: "singleBookmarkPage:deleteBookmark",
            movie: "singleBookmarkPage:deleteMovie",
        }
    },

    moviePage: {
        render: {
            content: "moviePage:renderContent",
            page: "moviePage:renderPage",
        },
        getContent: "moviePage:getContent",
        sendReview: "moviePage:sendReview",
        sendRating: "moviePage:sendRating",
        ratingSuccess: "moviePage:ratingSuccess",
        reviewSuccess: "moviePage:reviewSuccess",
        addCollection: "moviePage:addCollection",
        removeCollection: "moviePage:removeCollection",
        createCollection: "moviePage:createCollection",
        askToLog: "moviePage:askToLog",
        createCollectionSuccess: "moviePage:createCollectionSuccess",
    },

    actorPage: {
        render: {
            content: "actorPage:renderContent",
            page: "actorPage:renderPage",
        },
        getContent: "actorPage:getContent",
        getJobContent: "actorPage:getJobContent",
    },

    profilePage: {
        render: {
            content: "profilePage:renderContent",
            bookmarks: "profilePage:renderBookmarks",
            reviews: "profilePage:renderReviews",
            profileInfo: "profilePage:renderProfileInfo",
            changedProfile: "profilePage:renderChangedProfile",
            newBookmark: "profilePage:renderNewBookmark",
        },
        getContent: "profilePage:getContent",
        getReviews: "profilePage:getReviews",
        getBookmarks: "profilePage:getBookmarks",
        getProfileInfo: "profilePage:getProfileInfo",

        sendChanges: "profilePage:sendSettingsChanges",
        createBookmark: "profilePage:createBookmark",
        sendAvatar: "profilePage:sendAvatarChanges",

        validate: "profilePage:validate",
        addValidationError: "profilePage:addValidationError",
        deleteValidationError: "profilePage:deleteValidationError",
        onSuccessSubmit: "profilePage:successSumbit",
        //TODO submit: "profilePage:submit",
        // submitError: "profilePage:submitError",
        // wrongInput: "profilePage:wrongInput",
        // deleteAllErrors: "profilePage:deleteAllErrors",
    },

    genresPage: {
        render: {
            content: "genresPage:renderContent",
        },
        getContent: "genresPage:getContent",
    },

    singleGenrePage: {
        render: {
            content: "singleGenrePage:renderContent",
        },
        getContent: "singleGenrePage:getContent",
    },

    premiersPage: {
        render: {
            content: "premiersPage:renderContent",
        },
        getContent: "premiersPage:getContent",
    },

    announcedPage: {
        render: {
            content: "announcedPage:renderContent",
            page: "announcedPage:renderPage",
        },
        getContent: "announcedPage:getContent",
    },

    searchPage: {
        render: {
            content: "searchPage:renderContent",
            films: "searchPage:renderFilms",
            persons: "searchPage:renderPersons",
            emptyPage: "searchPage:renderEmptyPage",
        },
        getContent: "searchPage:getContent",
    }
};
