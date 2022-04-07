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
        submit: "authPage:submit",
        submitError: "authPage:submitError",
        wrongInput: "authPage:wrongInput",
        deleteValidationError: "authPage:deleteValidationError",
        addValidationError: "authPage:addValidationError",
        deleteAllErrors: "authPage:deleteAllErrors",
    },
    profilePage: {
        changedProfile: "profilePage:changedProfile",
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
        askToLog: "moviePage:askToLog",
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
            collections: "profilePage:renderCollections",
            activity: "profilePage:renderActivity",
        },
        getContent: "profilePage:getContent",
        validate: "profilePage:validate",
        sendChanges: "profilePage:sendChanges",
        submit: "profilePage:submit",
        submitError: "profilePage:submitError",
        wrongInput: "profilePage:wrongInput",
        deleteValidationError: "profilePage:deleteValidationError",
        addValidationError: "profilePage:addValidationError",
        deleteAllErrors: "profilePage:deleteAllErrors",
    }
};
