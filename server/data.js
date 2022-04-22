const { v4: uuid } = require('uuid');
const path = require('path');

const startServer = (app) => {
  app.get("/api/v1/collections/feed", function (req, res) {
    res.json(Collections);
  });

  app.get("/api/v1/collections/1", function (req, res) {
    res.json(top256);
  });

  app.get("/api/v1/collections/2", function (req, res) {
    res.json(adventures);
  });

  app.get("/api/v1/user/1", function (req, res) {
    res.status(200).json({
      ID: 1,
      imgsrc: "/server/images/adventures.webp",
      username: users['a@a.ru'].name,
      email: 'a@a.ru',
    });
  });

  app.get("/api/v1/user/getBookmarks/1", function (req, res) {
    res.status(200).json({
      ID: 1,
      bookmarksList: users['a@a.ru'].bookmarksList,
    });
  });

  app.get("/api/v1/user/reviews/1", function (req, res) {
    res.status(200).json({
      ID: 1,
      reviewsList: users['a@a.ru'].reviewsList,
    });
  });

  app.get("/api/v1/actors/1", function (req, res) {
    res.json(actors[0]);
  });
  
  app.get("/api/v1/actors/2", function (req, res) {
    res.json(actors[1]);
  });

  app.post("/api/v1/createBookmark", function (req, res) {
    res.json({
      ID: "777",
      title: "new title",
    });
  });


  app.get("/api/v1/movies/1", function (req, res) {
    res.json({
      movie: top256.movielist[0],
      reviewex: "",
      userrating: "",
      collectionsInfo: [
        {
          collection: "Мне нравится",
          hasMovie: false,
          bookmarkId: 1,
        },
        {
          collection: "Пример",
          hasMovie: true,
          bookmarkId: 2
        }
      ],
      related: [
        {
          "href": "/movies/2",
          "poster": "greenMile.webp",
          "title": "Зелёная миля",
        },
        {
          "href": "/movies/2",
          "poster": "greenMile.webp",
          "title": "Зелёная миля",
        },
        {
          "href": "/movies/2",
          "poster": "greenMile.webp",
          "title": "Зелёная миля",
        },
        {
          "href": "/movies/2",
          "poster": "greenMile.webp",
          "title": "Зелёная миля",
        },
        {
          "href": "/movies/2",
          "poster": "greenMile.webp",
          "title": "Зелёная миля",
        },
        {
          "href": "/movies/2",
          "poster": "greenMile.webp",
          "title": "Зелёная миля",
        },
        {
          "href": "/movies/2",
          "poster": "greenMile.webp",
          "title": "Зелёная миля",
        },
        {
          "href": "/movies/2",
          "poster": "greenMile.webp",
          "title": "Зелёная миля",
        },
        {
          "href": "/movies/2",
          "poster": "greenMile.webp",
          "title": "Зелёная миля",
        },
        {
          "href": "/movies/2",
          "poster": "greenMile.webp",
          "title": "Зелёная миля",
        },
        {
          "href": "/movies/2",
          "poster": "greenMile.webp",
          "title": "Зелёная миля",
        },
      ],
      reviews: [
        {
          avatarSrc: "/romantic.webp",
          username: "Пётр Калашников",
          userID: "",
          rating: "9 / 10",
          date: "28.03.2022",
          content: "Понравилось, только хочется продолжения",
          type: "good",
        },
        {
          avatarSrc: "/comics.webp",
          username: "Анатолий Мужиков",
          userID: "",
          rating: "10 / 10",
          date: "28.03.2022",
          content: "Просто огонь! Ребят, это надо смотреть просто всем!",
          type: "good",
        },
        {
          avatarSrc: "/spy.webp",
          username: "Костя Костяной",
          userID: "",
          rating: "7 / 10",
          date: "28.03.2022",
          content: "Средненько, книга интереснее",
          type: "neutral",
        },
        {
          avatarSrc: "/ourTop.webp",
          username: "Виктория Киселёва",
          userID: "",
          rating: "8 / 10",
          date: "28.03.2022",
          content: "Не зашло.",
          type: "bad",
        },
        {
          avatarSrc: "/tales.webp",
          username: "Баба Яга",
          userID: "",
          rating: "8 / 10",
          date: "28.03.2022",
          content: "Ох, ребят, молодцы, порадовали старушку... Давно я таких хороших фильмов не смотрела.",
          type: "good",
        },
      ],
    });
  });

  app.get("/api/v1/movies/2", function (req, res) {
    res.json({
      movie: top256.movielist[1],
      reviewex: "",
      userrating: "",
      related: [
        {
          "href": "/movies/1",
          "poster": "showshenkRedemption.webp",
          "title": "Побег из Шоушенка",
        },
        {
          "href": "/movies/1",
          "poster": "showshenkRedemption.webp",
          "title": "Побег из Шоушенка",
        },
        {
          "href": "/movies/1",
          "poster": "showshenkRedemption.webp",
          "title": "Побег из Шоушенка",
        },
        {
          "href": "/movies/1",
          "poster": "showshenkRedemption.webp",
          "title": "Побег из Шоушенка",
        },
        {
          "href": "/movies/1",
          "poster": "showshenkRedemption.webp",
          "title": "Побег из Шоушенка",
        },
        {
          "href": "/movies/1",
          "poster": "showshenkRedemption.webp",
          "title": "Побег из Шоушенка",
        },
        {
          "href": "/movies/1",
          "poster": "showshenkRedemption.webp",
          "title": "Побег из Шоушенка",
        },
        {
          "href": "/movies/1",
          "poster": "showshenkRedemption.webp",
          "title": "Побег из Шоушенка",
        },
        {
          "href": "/movies/1",
          "poster": "showshenkRedemption.webp",
          "title": "Побег из Шоушенка",
        },
        {
          "href": "/movies/1",
          "poster": "showshenkRedemption.webp",
          "title": "Побег из Шоушенка",
        },
        {
          "href": "/movies/1",
          "poster": "showshenkRedemption.webp",
          "title": "Побег из Шоушенка",
        },
      ],
      reviews: [
        {
          avatarSrc: "/romantic.webp",
          username: "Пётр Калашников",
          userID: "",
          rating: "",
          date: "28.03.2022",
          content: "Понравилось, только хочется продолжения",
          type: "good",
        },
        {
          avatarSrc: "/comics.webp",
          username: "Анатолий Мужиков",
          userID: "",
          rating: "10 / 10",
          date: "28.03.2022",
          content: "Просто огонь! Ребят, это надо смотреть просто всем!",
          type: "good",
        },
        {
          avatarSrc: "/spy.webp",
          username: "Костя Костяной",
          userID: "",
          rating: "7 / 10",
          date: "28.03.2022",
          content: "Средненько, книга интереснее",
          type: "neutral",
        },
        {
          avatarSrc: "/ourTop.webp",
          username: "Виктория Киселёва",
          userID: "",
          rating: "8 / 10",
          date: "28.03.2022",
          content: "Не зашло.",
          type: "bad",
        },  
      ],
    });
  });

  app.post("/api/v1/signup", function (req, res) {
    const name = req.body.name;
    const password = req.body.password;
    const email = req.body.email;
    if (
      !password || !email ||
      !password.match(/^\S{4,}$/) ||
      !email.match(/@/)
    ) {
      return res.status(400).json({ error: 'Невалидные данные пользователя' });
    }
    if (users[email]) {
      return res.status(400).json({ error: 'Пользователь уже существует' });
    }

    const id = uuid();
    const user = { name, email, password };
    ids[id] = email;
    users[email] = user;

    res.cookie('podvorot', id, { expires: new Date(Date.now() + 1000 * 60 * 10) });
    res.status(201).json({
      ID: id,
      imgsrc: "server/images/adventures.webp",
      username: users[email].name,
      email: email,
    });
  });

  app.post("/api/v1/user/login", function (req, res) {
    const password = req.body.password;
    const email = req.body.email;
    if (!password || !email) {
      return res.status(400).json({ error: 'Не указан E-Mail или пароль' });
    }
    if (!users[email] || users[email].password !== password) {
      return res.status(400).json({ error: 'Не верный E-Mail и/или пароль' });
    }

    const ID = uuid();
    ids[ID] = email;

    res.cookie('podvorot', ID, { expires: new Date(Date.now() + 1000 * 60 * 10) });
    res.status(200).json({
      ID: 1,
      imgsrc: "server/images/adventures.webp",
      username: users[email].name,
      email: email,
    });
  });

  app.post("/api/v1/user/logout", function (req, res) {
    res.status(200).json({
      status:200,
    });
  });


  app.post("/api/v1/user/update/1", function (req, res) {
    const name = req.body.name;
    users["a@a.ru"].name = name;
    res.status(200).json({
      ID: 1,
      avatarSrc: "/server/images/adventures.webp",
      username: users["a@a.ru"].name,
      email: "a@a.ru",
    });
  });

  app.post("/api/v1/user/changeProfile", function (req, res) {
    const name = req.body.name;
    users["a@a.ru"].name = name;

    //res.cookie('podvorot', 1, { expires: new Date(Date.now() + 1000 * 60 * 10) });
    res.cookie('podvorot', 1, { expires: new Date(Date.now() + 1000 * 60 * 10) });
    res.status(200).json({
      ID: 1,
      avatarSrc: "/server/images/adventures.webp",
      username: users["a@a.ru"].name,
      email: "a@a.ru",
    });
  });

  app.get('/api/v1/user/authcheck', (req, res) => {
    res.json({
      "status": 400,
    });
  });


  const ids = {};

  const Bookmarks = {
    bookmarksList: [
      { description: "Подборка №1", imgSrc: "top.webp", page: "profile", number: "1" },
      { description: "Подборка №2", imgSrc: "top.webp", page: "profile", number: "2" },
    ]
  };

  const Reviews = {
    reviewsList: [
      { type: "Оценка", text: "10", date: "01.01.2001", number: "1" },
      { type: "Отзыв", feedbacktype: "1", date: "01.01.2001", number: "2", movieTitle: "Вечное сияние чистого разума"},
      { type: "Отзыв", feedbacktype: "2", date: "01.01.2001", number: "3", movieTitle: "Вечное сияние чистого разума"},
      { type: "Отзыв", feedbacktype: "3", date: "01.01.2001", number: "4", movieTitle: "Вечное сияние чистого разума"},
    ]
  };

  const users = {
    "a@a.ru": {
      name: "aaaaaa",
      email: "a@a.ru",
      password: 'password1',
      avatarSrc: "server/images/adventures.webp",
      bookmarksList: Bookmarks.bookmarksList,
      reviewsList: Reviews.reviewsList,
    },
  };
  const id = uuid();
  ids[id] = "a@a.ru";

  const Collections = {
    collectionlist: [
      { description: "Топ 256", imgsrc: "top.webp", page: "collections", number: "1" },
      { description: "Приключения", imgsrc: "adventures.webp", page: "collections", number: "2" },
      { description: "Для всей семьи", imgsrc: "family.webp", page: "collections", number: "3" },
      { description: "Романтичное", imgsrc: "romantic.webp", page: "collections", number: "4" },
      { description: "Лучшие драмы", imgsrc: "drama.webp", page: "collections", number: "5" },
      { description: "Детское", imgsrc: "childish.webp", page: "collections", number: "6" },
      { description: "Комедии", imgsrc: "comedy.webp", page: "collections", number: "7" },
      { description: "Спасение мира", imgsrc: "saveTheWorld.webp", page: "collections", number: "8" },
      { description: "Кинокомиксы", imgsrc: "comics.webp", page: "collections", number: "9" },
      { description: "Советская классика", imgsrc: "soviet.webp", page: "collections", number: "10" },
      { description: "Шпионские фильмы", imgsrc: "spy.webp", page: "collections", number: "11" },
      { description: "Выбор редакции", imgsrc: "ourTop.webp", page: "collections", number: "12" },
    ]
  };

  const   top256 = {
    title: "Топ 256",
    description: "Вот такая вот подборочка :)",
    movielist: [
      {
        "ID": "1",
        "poster": "showshenkRedemption.webp",
        "trailerHref": "https://www.youtube.com/watch?v=PLl99DlL6b4",
        "title": "Побег из Шоушенка",
        "originalTitle": "The Shawshank Redemption",
        "year": "1994",
        "country": "США",
        "genre": "Драма",
        "motto": "Страх - это кандалы. Надежда - это свобода",
        "director": "Франк Дарабонт",
        "budget": "25 000 000 $",
        "gross": "28 418 687 $",
        "duration": "142 минуты",
        "cast": [
          {
            "name": "Баба Яга",
            "href": "/actors/2",
          },
          {
            "name": "Боб Гантон",
            "href": "/collections",
          },
          {
            "name": "Уильям Сэдлер",
            "href": "/collections",
          },
          {
            "name": "Клэнси Браун",
            "href": "/collections",
          },
          {
            "name": "Гил Беллоуз",
            "href": "/collections",
          },
        ],
        "info": "1994, США. Драма",
        "rating": "8.9",
        "description": "Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по обе стороны решётки. Каждый, кто попадает в эти стены, становится их рабом до конца жизни. Но Энди, обладающий живым умом и доброй душой, находит подход как к заключённым, так и к охранникам, добиваясь их особого к себе расположения.",
      },
      {
        "ID": "2",
        "poster": "greenMile.webp",
        "trailerHref": "https://www.youtube.com/watch?v=Bg7epsq0OIQ",
        "title": "Зелёная миля",
        "originalTitle": "The Green Mile",
        "year": "1999",
        "country": "США",
        "genre": "Драма, Криминал",
        "motto": "Пол Эджкомб не верил в чудеса. Пока не столкнулся с одним из них",
        "director": "Франк Дарабонт",
        "budget": "60 000 000 $",
        "gross": "300 000 000 $",
        "duration": "189 минут",
        "mainCast": "Том Хэнкс, Дэвид Морс, Бонни Хант, Майкл Клакр Дункан, Джеймс Кромуэлл, Майкл Джитер, Грэм Грин, Даг Хатчисон",
        "cast": [
          {
            "name": "Том Хэнкс",
            "href": "/actors/1",
          },
          {
            "name": "Дэвид Морс",
            "href": "/collections",
          },
          {
            "name": "Бонни Хант",
            "href": "/collections",
          },
          {
            "name": "Майкл Кларк Дункан",
            "href": "/collections",
          },
          {
            "name": "Джеймс Кромуэлл",
            "href": "/collections",
          },
          {
            "name": "Майкл Джиттер",
            "href": "/collections",
          },
        ],
        "info": "1999, США. Драма",
        "rating": "9.1",
        "description": "Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.",
      },
      {
        "ID": "1",
        "poster": "showshenkRedemption.webp",
        "trailerHref": "https://www.youtube.com/watch?v=PLl99DlL6b4",
        "title": "Побег из Шоушенка",
        "originalTitle": "The Shawshank Redemption",
        "year": "1994",
        "country": "США",
        "genre": "Драма",
        "motto": "Страх - это кандалы. Надежда - это свобода",
        "director": "Франк Дарабонт",
        "budget": "25 000 000 $",
        "gross": "28 418 687 $",
        "duration": "142 минуты",
        "cast": [
          {
            "name": "Тим Роббинс",
            "href": "/collections",
          },
          {
            "name": "Боб Гантон",
            "href": "/collections",
          },
          {
            "name": "Уильям Сэдлер",
            "href": "/collections",
          },
          {
            "name": "Клэнси Браун",
            "href": "/collections",
          },
          {
            "name": "Гил Беллоуз",
            "href": "/collections",
          },
        ],
        "info": "1994, США. Драма",
        "rating": "8.9",
        "description": "Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по обе стороны решётки. Каждый, кто попадает в эти стены, становится их рабом до конца жизни. Но Энди, обладающий живым умом и доброй душой, находит подход как к заключённым, так и к охранникам, добиваясь их особого к себе расположения.",
      },
      {
        "ID": "2",
        "poster": "greenMile.webp",
        "trailerHref": "https://www.youtube.com/watch?v=Bg7epsq0OIQ",
        "title": "Зелёная миля",
        "originalTitle": "The Green Mile",
        "year": "1999",
        "country": "США",
        "genre": "Драма, Криминал",
        "motto": "Пол Эджкомб не верил в чудеса. Пока не столкнулся с одним из них",
        "director": "Франк Дарабонт",
        "budget": "60 000 000 $",
        "gross": "300 000 000 $",
        "duration": "189 минут",
        "mainCast": "Том Хэнкс, Дэвид Морс, Бонни Хант, Майкл Клакр Дункан, Джеймс Кромуэлл, Майкл Джитер, Грэм Грин, Даг Хатчисон",
        "cast": [
          {
            "name": "Том Хэнкс",
            "href": "/collections",
          },
          {
            "name": "Дэвид Морс",
            "href": "/collections",
          },
          {
            "name": "Бонни Хант",
            "href": "/collections",
          },
          {
            "name": "Майкл Кларк Дункан",
            "href": "/collections",
          },
          {
            "name": "Джеймс Кромуэлл",
            "href": "/collections",
          },
          {
            "name": "Майкл Джиттер",
            "href": "/collections",
          },
        ],
        "info": "1999, США. Драма",
        "rating": "9.1",
        "description": "Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.",
      },
      {
        "ID": "1",
        "poster": "showshenkRedemption.webp",
        "trailerHref": "https://www.youtube.com/watch?v=PLl99DlL6b4",
        "title": "Побег из Шоушенка",
        "originalTitle": "The Shawshank Redemption",
        "year": "1994",
        "country": "США",
        "genre": "Драма",
        "motto": "Страх - это кандалы. Надежда - это свобода",
        "director": "Франк Дарабонт",
        "budget": "25 000 000 $",
        "gross": "28 418 687 $",
        "duration": "142 минуты",
        "cast": [
          {
            "name": "Тим Роббинс",
            "href": "/collections",
          },
          {
            "name": "Боб Гантон",
            "href": "/collections",
          },
          {
            "name": "Уильям Сэдлер",
            "href": "/collections",
          },
          {
            "name": "Клэнси Браун",
            "href": "/collections",
          },
          {
            "name": "Гил Беллоуз",
            "href": "/collections",
          },
        ],
        "info": "1994, США. Драма",
        "rating": "8.9",
        "description": "Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по обе стороны решётки. Каждый, кто попадает в эти стены, становится их рабом до конца жизни. Но Энди, обладающий живым умом и доброй душой, находит подход как к заключённым, так и к охранникам, добиваясь их особого к себе расположения.",
      },
      {
        "ID": "2",
        "poster": "greenMile.webp",
        "trailerHref": "https://www.youtube.com/watch?v=Bg7epsq0OIQ",
        "title": "Зелёная миля",
        "originalTitle": "The Green Mile",
        "year": "1999",
        "country": "США",
        "genre": "Драма, Криминал",
        "motto": "Пол Эджкомб не верил в чудеса. Пока не столкнулся с одним из них",
        "director": "Франк Дарабонт",
        "budget": "60 000 000 $",
        "gross": "300 000 000 $",
        "duration": "189 минут",
        "mainCast": "Том Хэнкс, Дэвид Морс, Бонни Хант, Майкл Клакр Дункан, Джеймс Кромуэлл, Майкл Джитер, Грэм Грин, Даг Хатчисон",
        "cast": [
          {
            "name": "Том Хэнкс",
            "href": "/collections",
          },
          {
            "name": "Дэвид Морс",
            "href": "/collections",
          },
          {
            "name": "Бонни Хант",
            "href": "/collections",
          },
          {
            "name": "Майкл Кларк Дункан",
            "href": "/collections",
          },
          {
            "name": "Джеймс Кромуэлл",
            "href": "/collections",
          },
          {
            "name": "Майкл Джиттер",
            "href": "/collections",
          },
        ],
        "info": "1999, США. Драма",
        "rating": "9.1",
        "description": "Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.",
      },
      {
        "ID": "1",
        "poster": "showshenkRedemption.webp",
        "trailerHref": "https://www.youtube.com/watch?v=PLl99DlL6b4",
        "title": "Побег из Шоушенка",
        "originalTitle": "The Shawshank Redemption",
        "year": "1994",
        "country": "США",
        "genre": "Драма",
        "motto": "Страх - это кандалы. Надежда - это свобода",
        "director": "Франк Дарабонт",
        "budget": "25 000 000 $",
        "gross": "28 418 687 $",
        "duration": "142 минуты",
        "cast": [
          {
            "name": "Тим Роббинс",
            "href": "/collections",
          },
          {
            "name": "Боб Гантон",
            "href": "/collections",
          },
          {
            "name": "Уильям Сэдлер",
            "href": "/collections",
          },
          {
            "name": "Клэнси Браун",
            "href": "/collections",
          },
          {
            "name": "Гил Беллоуз",
            "href": "/collections",
          },
        ],
        "info": "1994, США. Драма",
        "rating": "8.9",
        "description": "Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по обе стороны решётки. Каждый, кто попадает в эти стены, становится их рабом до конца жизни. Но Энди, обладающий живым умом и доброй душой, находит подход как к заключённым, так и к охранникам, добиваясь их особого к себе расположения.",
      },
      {
        "ID": "2",
        "poster": "greenMile.webp",
        "trailerHref": "https://www.youtube.com/watch?v=Bg7epsq0OIQ",
        "title": "Зелёная миля",
        "originalTitle": "The Green Mile",
        "year": "1999",
        "country": "США",
        "genre": "Драма, Криминал",
        "motto": "Пол Эджкомб не верил в чудеса. Пока не столкнулся с одним из них",
        "director": "Франк Дарабонт",
        "budget": "60 000 000 $",
        "gross": "300 000 000 $",
        "duration": "189 минут",
        "mainCast": "Том Хэнкс, Дэвид Морс, Бонни Хант, Майкл Клакр Дункан, Джеймс Кромуэлл, Майкл Джитер, Грэм Грин, Даг Хатчисон",
        "cast": [
          {
            "name": "Том Хэнкс",
            "href": "/collections",
          },
          {
            "name": "Дэвид Морс",
            "href": "/collections",
          },
          {
            "name": "Бонни Хант",
            "href": "/collections",
          },
          {
            "name": "Майкл Кларк Дункан",
            "href": "/collections",
          },
          {
            "name": "Джеймс Кромуэлл",
            "href": "/collections",
          },
          {
            "name": "Майкл Джиттер",
            "href": "/collections",
          },
        ],
        "info": "1999, США. Драма",
        "rating": "9.1",
        "description": "Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.",
      },
      {
        "ID": "1",
        "poster": "showshenkRedemption.webp",
        "trailerHref": "https://www.youtube.com/watch?v=PLl99DlL6b4",
        "title": "Побег из Шоушенка",
        "originalTitle": "The Shawshank Redemption",
        "year": "1994",
        "country": "США",
        "genre": "Драма",
        "motto": "Страх - это кандалы. Надежда - это свобода",
        "director": "Франк Дарабонт",
        "budget": "25 000 000 $",
        "gross": "28 418 687 $",
        "duration": "142 минуты",
        "cast": [
          {
            "name": "Тим Роббинс",
            "href": "/collections",
          },
          {
            "name": "Боб Гантон",
            "href": "/collections",
          },
          {
            "name": "Уильям Сэдлер",
            "href": "/collections",
          },
          {
            "name": "Клэнси Браун",
            "href": "/collections",
          },
          {
            "name": "Гил Беллоуз",
            "href": "/collections",
          },
        ],
        "info": "1994, США. Драма",
        "rating": "8.9",
        "description": "Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по обе стороны решётки. Каждый, кто попадает в эти стены, становится их рабом до конца жизни. Но Энди, обладающий живым умом и доброй душой, находит подход как к заключённым, так и к охранникам, добиваясь их особого к себе расположения.",
      },
      {
        "ID": "2",
        "poster": "greenMile.webp",
        "trailerHref": "https://www.youtube.com/watch?v=Bg7epsq0OIQ",
        "title": "Зелёная миля",
        "originalTitle": "The Green Mile",
        "year": "1999",
        "country": "США",
        "genre": "Драма, Криминал",
        "motto": "Пол Эджкомб не верил в чудеса. Пока не столкнулся с одним из них",
        "director": "Франк Дарабонт",
        "budget": "60 000 000 $",
        "gross": "300 000 000 $",
        "duration": "189 минут",
        "mainCast": "Том Хэнкс, Дэвид Морс, Бонни Хант, Майкл Клакр Дункан, Джеймс Кромуэлл, Майкл Джитер, Грэм Грин, Даг Хатчисон",
        "cast": [
          {
            "name": "Том Хэнкс",
            "href": "/collections",
          },
          {
            "name": "Дэвид Морс",
            "href": "/collections",
          },
          {
            "name": "Бонни Хант",
            "href": "/collections",
          },
          {
            "name": "Майкл Кларк Дункан",
            "href": "/collections",
          },
          {
            "name": "Джеймс Кромуэлл",
            "href": "/collections",
          },
          {
            "name": "Майкл Джиттер",
            "href": "/collections",
          },
        ],
        "info": "1999, США. Драма",
        "rating": "9.1",
        "description": "Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.",
      },
      {
        "ID": "1",
        "poster": "showshenkRedemption.webp",
        "trailerHref": "https://www.youtube.com/watch?v=PLl99DlL6b4",
        "title": "Побег из Шоушенка",
        "originalTitle": "The Shawshank Redemption",
        "year": "1994",
        "country": "США",
        "genre": "Драма",
        "motto": "Страх - это кандалы. Надежда - это свобода",
        "director": "Франк Дарабонт",
        "budget": "25 000 000 $",
        "gross": "28 418 687 $",
        "duration": "142 минуты",
        "cast": [
          {
            "name": "Тим Роббинс",
            "href": "/collections",
          },
          {
            "name": "Боб Гантон",
            "href": "/collections",
          },
          {
            "name": "Уильям Сэдлер",
            "href": "/collections",
          },
          {
            "name": "Клэнси Браун",
            "href": "/collections",
          },
          {
            "name": "Гил Беллоуз",
            "href": "/collections",
          },
        ],
        "info": "1994, США. Драма",
        "rating": "8.9",
        "description": "Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по обе стороны решётки. Каждый, кто попадает в эти стены, становится их рабом до конца жизни. Но Энди, обладающий живым умом и доброй душой, находит подход как к заключённым, так и к охранникам, добиваясь их особого к себе расположения.",
      },
      {
        "ID": "2",
        "poster": "greenMile.webp",
        "trailerHref": "https://www.youtube.com/watch?v=Bg7epsq0OIQ",
        "title": "Зелёная миля",
        "originalTitle": "The Green Mile",
        "year": "1999",
        "country": "США",
        "genre": "Драма, Криминал",
        "motto": "Пол Эджкомб не верил в чудеса. Пока не столкнулся с одним из них",
        "director": "Франк Дарабонт",
        "budget": "60 000 000 $",
        "gross": "300 000 000 $",
        "duration": "189 минут",
        "mainCast": "Том Хэнкс, Дэвид Морс, Бонни Хант, Майкл Клакр Дункан, Джеймс Кромуэлл, Майкл Джитер, Грэм Грин, Даг Хатчисон",
        "cast": [
          {
            "name": "Том Хэнкс",
            "href": "/collections",
          },
          {
            "name": "Дэвид Морс",
            "href": "/collections",
          },
          {
            "name": "Бонни Хант",
            "href": "/collections",
          },
          {
            "name": "Майкл Кларк Дункан",
            "href": "/collections",
          },
          {
            "name": "Джеймс Кромуэлл",
            "href": "/collections",
          },
          {
            "name": "Майкл Джиттер",
            "href": "/collections",
          },
        ],
        "info": "1999, США. Драма",
        "rating": "9.1",
        "description": "Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.",
      },
      {
        "ID": "1",
        "poster": "showshenkRedemption.webp",
        "trailerHref": "https://www.youtube.com/watch?v=PLl99DlL6b4",
        "title": "Побег из Шоушенка",
        "originalTitle": "The Shawshank Redemption",
        "year": "1994",
        "country": "США",
        "genre": "Драма",
        "motto": "Страх - это кандалы. Надежда - это свобода",
        "director": "Франк Дарабонт",
        "budget": "25 000 000 $",
        "gross": "28 418 687 $",
        "duration": "142 минуты",
        "cast": [
          {
            "name": "Тим Роббинс",
            "href": "/collections",
          },
          {
            "name": "Боб Гантон",
            "href": "/collections",
          },
          {
            "name": "Уильям Сэдлер",
            "href": "/collections",
          },
          {
            "name": "Клэнси Браун",
            "href": "/collections",
          },
          {
            "name": "Гил Беллоуз",
            "href": "/collections",
          },
        ],
        "info": "1994, США. Драма",
        "rating": "8.9",
        "description": "Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по обе стороны решётки. Каждый, кто попадает в эти стены, становится их рабом до конца жизни. Но Энди, обладающий живым умом и доброй душой, находит подход как к заключённым, так и к охранникам, добиваясь их особого к себе расположения.",
      },
      {
        "ID": "2",
        "poster": "greenMile.webp",
        "trailerHref": "https://www.youtube.com/watch?v=Bg7epsq0OIQ",
        "title": "Зелёная миля",
        "originalTitle": "The Green Mile",
        "year": "1999",
        "country": "США",
        "genre": "Драма, Криминал",
        "motto": "Пол Эджкомб не верил в чудеса. Пока не столкнулся с одним из них",
        "director": "Франк Дарабонт",
        "budget": "60 000 000 $",
        "gross": "300 000 000 $",
        "duration": "189 минут",
        "mainCast": "Том Хэнкс, Дэвид Морс, Бонни Хант, Майкл Клакр Дункан, Джеймс Кромуэлл, Майкл Джитер, Грэм Грин, Даг Хатчисон",
        "cast": [
          {
            "name": "Том Хэнкс",
            "href": "/collections",
          },
          {
            "name": "Дэвид Морс",
            "href": "/collections",
          },
          {
            "name": "Бонни Хант",
            "href": "/collections",
          },
          {
            "name": "Майкл Кларк Дункан",
            "href": "/collections",
          },
          {
            "name": "Джеймс Кромуэлл",
            "href": "/collections",
          },
          {
            "name": "Майкл Джиттер",
            "href": "/collections",
          },
        ],
        "info": "1999, США. Драма",
        "rating": "9.1",
        "description": "Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.",
      },
      {
        "ID": "1",
        "poster": "showshenkRedemption.webp",
        "trailerHref": "https://www.youtube.com/watch?v=PLl99DlL6b4",
        "title": "Побег из Шоушенка",
        "originalTitle": "The Shawshank Redemption",
        "year": "1994",
        "country": "США",
        "genre": "Драма",
        "motto": "Страх - это кандалы. Надежда - это свобода",
        "director": "Франк Дарабонт",
        "budget": "25 000 000 $",
        "gross": "28 418 687 $",
        "duration": "142 минуты",
        "cast": [
          {
            "name": "Тим Роббинс",
            "href": "/collections",
          },
          {
            "name": "Боб Гантон",
            "href": "/collections",
          },
          {
            "name": "Уильям Сэдлер",
            "href": "/collections",
          },
          {
            "name": "Клэнси Браун",
            "href": "/collections",
          },
          {
            "name": "Гил Беллоуз",
            "href": "/collections",
          },
        ],
        "info": "1994, США. Драма",
        "rating": "8.9",
        "description": "Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по обе стороны решётки. Каждый, кто попадает в эти стены, становится их рабом до конца жизни. Но Энди, обладающий живым умом и доброй душой, находит подход как к заключённым, так и к охранникам, добиваясь их особого к себе расположения.",
      },
      {
        "ID": "2",
        "poster": "greenMile.webp",
        "trailerHref": "https://www.youtube.com/watch?v=Bg7epsq0OIQ",
        "title": "Зелёная миля",
        "originalTitle": "The Green Mile",
        "year": "1999",
        "country": "США",
        "genre": "Драма, Криминал",
        "motto": "Пол Эджкомб не верил в чудеса. Пока не столкнулся с одним из них",
        "director": "Франк Дарабонт",
        "budget": "60 000 000 $",
        "gross": "300 000 000 $",
        "duration": "189 минут",
        "mainCast": "Том Хэнкс, Дэвид Морс, Бонни Хант, Майкл Клакр Дункан, Джеймс Кромуэлл, Майкл Джитер, Грэм Грин, Даг Хатчисон",
        "cast": [
          {
            "name": "Том Хэнкс",
            "href": "/collections",
          },
          {
            "name": "Дэвид Морс",
            "href": "/collections",
          },
          {
            "name": "Бонни Хант",
            "href": "/collections",
          },
          {
            "name": "Майкл Кларк Дункан",
            "href": "/collections",
          },
          {
            "name": "Джеймс Кромуэлл",
            "href": "/collections",
          },
          {
            "name": "Майкл Джиттер",
            "href": "/collections",
          },
        ],
        "info": "1999, США. Драма",
        "rating": "9.1",
        "description": "Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.",
      },
      {
        "ID": "1",
        "poster": "showshenkRedemption.webp",
        "trailerHref": "https://www.youtube.com/watch?v=PLl99DlL6b4",
        "title": "Побег из Шоушенка",
        "originalTitle": "The Shawshank Redemption",
        "year": "1994",
        "country": "США",
        "genre": "Драма",
        "motto": "Страх - это кандалы. Надежда - это свобода",
        "director": "Франк Дарабонт",
        "budget": "25 000 000 $",
        "gross": "28 418 687 $",
        "duration": "142 минуты",
        "cast": [
          {
            "name": "Тим Роббинс",
            "href": "/collections",
          },
          {
            "name": "Боб Гантон",
            "href": "/collections",
          },
          {
            "name": "Уильям Сэдлер",
            "href": "/collections",
          },
          {
            "name": "Клэнси Браун",
            "href": "/collections",
          },
          {
            "name": "Гил Беллоуз",
            "href": "/collections",
          },
        ],
        "info": "1994, США. Драма",
        "rating": "8.9",
        "description": "Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по обе стороны решётки. Каждый, кто попадает в эти стены, становится их рабом до конца жизни. Но Энди, обладающий живым умом и доброй душой, находит подход как к заключённым, так и к охранникам, добиваясь их особого к себе расположения.",
      },
      {
        "ID": "2",
        "poster": "greenMile.webp",
        "trailerHref": "https://www.youtube.com/watch?v=Bg7epsq0OIQ",
        "title": "Зелёная миля",
        "originalTitle": "The Green Mile",
        "year": "1999",
        "country": "США",
        "genre": "Драма, Криминал",
        "motto": "Пол Эджкомб не верил в чудеса. Пока не столкнулся с одним из них",
        "director": "Франк Дарабонт",
        "budget": "60 000 000 $",
        "gross": "300 000 000 $",
        "duration": "189 минут",
        "mainCast": "Том Хэнкс, Дэвид Морс, Бонни Хант, Майкл Клакр Дункан, Джеймс Кромуэлл, Майкл Джитер, Грэм Грин, Даг Хатчисон",
        "cast": [
          {
            "name": "Том Хэнкс",
            "href": "/collections",
          },
          {
            "name": "Дэвид Морс",
            "href": "/collections",
          },
          {
            "name": "Бонни Хант",
            "href": "/collections",
          },
          {
            "name": "Майкл Кларк Дункан",
            "href": "/collections",
          },
          {
            "name": "Джеймс Кромуэлл",
            "href": "/collections",
          },
          {
            "name": "Майкл Джиттер",
            "href": "/collections",
          },
        ],
        "info": "1999, США. Драма",
        "rating": "9.1",
        "description": "Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.",
      },
      {
        "ID": "1",
        "poster": "showshenkRedemption.webp",
        "trailerHref": "https://www.youtube.com/watch?v=PLl99DlL6b4",
        "title": "Побег из Шоушенка",
        "originalTitle": "The Shawshank Redemption",
        "year": "1994",
        "country": "США",
        "genre": "Драма",
        "motto": "Страх - это кандалы. Надежда - это свобода",
        "director": "Франк Дарабонт",
        "budget": "25 000 000 $",
        "gross": "28 418 687 $",
        "duration": "142 минуты",
        "cast": [
          {
            "name": "Тим Роббинс",
            "href": "/collections",
          },
          {
            "name": "Боб Гантон",
            "href": "/collections",
          },
          {
            "name": "Уильям Сэдлер",
            "href": "/collections",
          },
          {
            "name": "Клэнси Браун",
            "href": "/collections",
          },
          {
            "name": "Гил Беллоуз",
            "href": "/collections",
          },
        ],
        "info": "1994, США. Драма",
        "rating": "8.9",
        "description": "Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по обе стороны решётки. Каждый, кто попадает в эти стены, становится их рабом до конца жизни. Но Энди, обладающий живым умом и доброй душой, находит подход как к заключённым, так и к охранникам, добиваясь их особого к себе расположения.",
      },
      {
        "ID": "2",
        "poster": "greenMile.webp",
        "trailerHref": "https://www.youtube.com/watch?v=Bg7epsq0OIQ",
        "title": "Зелёная миля",
        "originalTitle": "The Green Mile",
        "year": "1999",
        "country": "США",
        "genre": "Драма, Криминал",
        "motto": "Пол Эджкомб не верил в чудеса. Пока не столкнулся с одним из них",
        "director": "Франк Дарабонт",
        "budget": "60 000 000 $",
        "gross": "300 000 000 $",
        "duration": "189 минут",
        "mainCast": "Том Хэнкс, Дэвид Морс, Бонни Хант, Майкл Клакр Дункан, Джеймс Кромуэлл, Майкл Джитер, Грэм Грин, Даг Хатчисон",
        "cast": [
          {
            "name": "Том Хэнкс",
            "href": "/collections",
          },
          {
            "name": "Дэвид Морс",
            "href": "/collections",
          },
          {
            "name": "Бонни Хант",
            "href": "/collections",
          },
          {
            "name": "Майкл Кларк Дункан",
            "href": "/collections",
          },
          {
            "name": "Джеймс Кромуэлл",
            "href": "/collections",
          },
          {
            "name": "Майкл Джиттер",
            "href": "/collections",
          },
        ],
        "info": "1999, США. Драма",
        "rating": "9.1",
        "description": "Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.",
      },
      {
        "ID": "1",
        "poster": "showshenkRedemption.webp",
        "trailerHref": "https://www.youtube.com/watch?v=PLl99DlL6b4",
        "title": "Побег из Шоушенка",
        "originalTitle": "The Shawshank Redemption",
        "year": "1994",
        "country": "США",
        "genre": "Драма",
        "motto": "Страх - это кандалы. Надежда - это свобода",
        "director": "Франк Дарабонт",
        "budget": "25 000 000 $",
        "gross": "28 418 687 $",
        "duration": "142 минуты",
        "cast": [
          {
            "name": "Тим Роббинс",
            "href": "/collections",
          },
          {
            "name": "Боб Гантон",
            "href": "/collections",
          },
          {
            "name": "Уильям Сэдлер",
            "href": "/collections",
          },
          {
            "name": "Клэнси Браун",
            "href": "/collections",
          },
          {
            "name": "Гил Беллоуз",
            "href": "/collections",
          },
        ],
        "info": "1994, США. Драма",
        "rating": "8.9",
        "description": "Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по обе стороны решётки. Каждый, кто попадает в эти стены, становится их рабом до конца жизни. Но Энди, обладающий живым умом и доброй душой, находит подход как к заключённым, так и к охранникам, добиваясь их особого к себе расположения.",
      },
      {
        "ID": "2",
        "poster": "greenMile.webp",
        "trailerHref": "https://www.youtube.com/watch?v=Bg7epsq0OIQ",
        "title": "Зелёная миля",
        "originalTitle": "The Green Mile",
        "year": "1999",
        "country": "США",
        "genre": "Драма, Криминал",
        "motto": "Пол Эджкомб не верил в чудеса. Пока не столкнулся с одним из них",
        "director": "Франк Дарабонт",
        "budget": "60 000 000 $",
        "gross": "300 000 000 $",
        "duration": "189 минут",
        "mainCast": "Том Хэнкс, Дэвид Морс, Бонни Хант, Майкл Клакр Дункан, Джеймс Кромуэлл, Майкл Джитер, Грэм Грин, Даг Хатчисон",
        "cast": [
          {
            "name": "Том Хэнкс",
            "href": "/collections",
          },
          {
            "name": "Дэвид Морс",
            "href": "/collections",
          },
          {
            "name": "Бонни Хант",
            "href": "/collections",
          },
          {
            "name": "Майкл Кларк Дункан",
            "href": "/collections",
          },
          {
            "name": "Джеймс Кромуэлл",
            "href": "/collections",
          },
          {
            "name": "Майкл Джиттер",
            "href": "/collections",
          },
        ],
        "info": "1999, США. Драма",
        "rating": "9.1",
        "description": "Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.",
      },
    ]
  };

  const adventures = {
    title: "Приключения",
    description: "Вот такая вот подборочка :)",
    movielist: [
      {
        "ID": "1",
        "poster": "showshenkRedemption.webp",
        "trailerHref": "https://www.youtube.com/watch?v=PLl99DlL6b4",
        "title": "Побег из Шоушенка",
        "originalTitle": "The Shawshank Redemption",
        "year": "1994",
        "country": "США",
        "genre": "Драма",
        "motto": "Страх - это кандалы. Надежда - это свобода",
        "director": "Франк Дарабонт",
        "budget": "25 000 000 $",
        "gross": "28 418 687 $",
        "duration": "142 минуты",
        "cast": [
          {
            "name": "Тим Роббинс",
            "href": "/collections",
          },
          {
            "name": "Боб Гантон",
            "href": "/collections",
          },
          {
            "name": "Уильям Сэдлер",
            "href": "/collections",
          },
          {
            "name": "Клэнси Браун",
            "href": "/collections",
          },
          {
            "name": "Гил Беллоуз",
            "href": "/collections",
          },
        ],
        "info": "1994, США. Драма",
        "rating": "8.9",
        "description": "Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по обе стороны решётки. Каждый, кто попадает в эти стены, становится их рабом до конца жизни. Но Энди, обладающий живым умом и доброй душой, находит подход как к заключённым, так и к охранникам, добиваясь их особого к себе расположения.",
      },
      {
        "ID": "2",
        "poster": "greenMile.webp",
        "trailerHref": "https://www.youtube.com/watch?v=Bg7epsq0OIQ",
        "title": "Зелёная миля",
        "originalTitle": "The Green Mile",
        "year": "1999",
        "country": "США",
        "genre": "Драма, Криминал",
        "motto": "Пол Эджкомб не верил в чудеса. Пока не столкнулся с одним из них",
        "director": "Франк Дарабонт",
        "budget": "60 000 000 $",
        "gross": "300 000 000 $",
        "duration": "189 минут",
        "mainCast": "Том Хэнкс, Дэвид Морс, Бонни Хант, Майкл Клакр Дункан, Джеймс Кромуэлл, Майкл Джитер, Грэм Грин, Даг Хатчисон",
        "cast": [
          {
            "name": "Том Хэнкс",
            "href": "/collections",
          },
          {
            "name": "Дэвид Морс",
            "href": "/collections",
          },
          {
            "name": "Бонни Хант",
            "href": "/collections",
          },
          {
            "name": "Майкл Кларк Дункан",
            "href": "/collections",
          },
          {
            "name": "Джеймс Кромуэлл",
            "href": "/collections",
          },
          {
            "name": "Майкл Джиттер",
            "href": "/collections",
          },
        ],
        "info": "1999, США. Драма",
        "rating": "9.1",
        "description": "Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.",
      },
      {
        "ID": "1",
        "poster": "showshenkRedemption.webp",
        "trailerHref": "https://www.youtube.com/watch?v=PLl99DlL6b4",
        "title": "Побег из Шоушенка",
        "originalTitle": "The Shawshank Redemption",
        "year": "1994",
        "country": "США",
        "genre": "Драма",
        "motto": "Страх - это кандалы. Надежда - это свобода",
        "director": "Франк Дарабонт",
        "budget": "25 000 000 $",
        "gross": "28 418 687 $",
        "duration": "142 минуты",
        "cast": [
          {
            "name": "Тим Роббинс",
            "href": "/collections",
          },
          {
            "name": "Боб Гантон",
            "href": "/collections",
          },
          {
            "name": "Уильям Сэдлер",
            "href": "/collections",
          },
          {
            "name": "Клэнси Браун",
            "href": "/collections",
          },
          {
            "name": "Гил Беллоуз",
            "href": "/collections",
          },
        ],
        "info": "1994, США. Драма",
        "rating": "8.9",
        "description": "Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по обе стороны решётки. Каждый, кто попадает в эти стены, становится их рабом до конца жизни. Но Энди, обладающий живым умом и доброй душой, находит подход как к заключённым, так и к охранникам, добиваясь их особого к себе расположения.",
      },
      {
        "ID": "2",
        "poster": "greenMile.webp",
        "trailerHref": "https://www.youtube.com/watch?v=Bg7epsq0OIQ",
        "title": "Зелёная миля",
        "originalTitle": "The Green Mile",
        "year": "1999",
        "country": "США",
        "genre": "Драма, Криминал",
        "motto": "Пол Эджкомб не верил в чудеса. Пока не столкнулся с одним из них",
        "director": "Франк Дарабонт",
        "budget": "60 000 000 $",
        "gross": "300 000 000 $",
        "duration": "189 минут",
        "mainCast": "Том Хэнкс, Дэвид Морс, Бонни Хант, Майкл Клакр Дункан, Джеймс Кромуэлл, Майкл Джитер, Грэм Грин, Даг Хатчисон",
        "cast": [
          {
            "name": "Том Хэнкс",
            "href": "/collections",
          },
          {
            "name": "Дэвид Морс",
            "href": "/collections",
          },
          {
            "name": "Бонни Хант",
            "href": "/collections",
          },
          {
            "name": "Майкл Кларк Дункан",
            "href": "/collections",
          },
          {
            "name": "Джеймс Кромуэлл",
            "href": "/collections",
          },
          {
            "name": "Майкл Джиттер",
            "href": "/collections",
          },
        ],
        "info": "1999, США. Драма",
        "rating": "9.1",
        "description": "Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.",
      },
    ]
  };

  const actors = [
    {
      actor: {
        "ID": "1",
        "avatar": "tomHanks.webp",
        "name": "Том Хэнкс",
        "originalName": "Tom Hanks",
        "career": "Актёр",
        "height": "160 см",
        "birthdate": "9 июля 1956",
        "birthplace": "Конкорд, Калифорния, США",
        "genres": "Комедия, Драма",
        "total": "10",
      },
      related: [
        {
          "href": "/actors/2",
          "poster": "tales.webp",
          "title": "Баба Яга",
        },
        {
          "href": "/actors/2",
          "poster": "tales.webp",
          "title": "Баба Яга",
        },
        {
          "href": "/actors/2",
          "poster": "tales.webp",
          "title": "Баба Яга",
        },
        {
          "href": "/actors/2",
          "poster": "tales.webp",
          "title": "Баба Яга",
        },
        {
          "href": "/actors/2",
          "poster": "tales.webp",
          "title": "Баба Яга",
        },
        {
          "href": "/actors/2",
          "poster": "tales.webp",
          "title": "Баба Яга",
        },
        {
          "href": "/actors/2",
          "poster": "tales.webp",
          "title": "Баба Яга",
        },
        {
          "href": "/actors/2",
          "poster": "tales.webp",
          "title": "Баба Яга",
        },
        {
          "href": "/actors/2",
          "poster": "tales.webp",
          "title": "Баба Яга",
        },
      ],
      "movies": [
        {
          "ID": "2",
          "poster": "greenMile.webp",
          "trailerHref": "https://www.youtube.com/watch?v=Bg7epsq0OIQ",
          "title": "Зелёная миля",
          "originalTitle": "The Green Mile",
          "year": "1999",
          "country": "США",
          "genre": "Драма, Криминал",
          "motto": "Пол Эджкомб не верил в чудеса. Пока не столкнулся с одним из них",
          "director": "Франк Дарабонт",
          "budget": "60 000 000 $",
          "gross": "300 000 000 $",
          "duration": "189 минут",
          "mainCast": "Том Хэнкс, Дэвид Морс, Бонни Хант, Майкл Клакр Дункан, Джеймс Кромуэлл, Майкл Джитер, Грэм Грин, Даг Хатчисон",
          "cast": [
            {
              "name": "Том Хэнкс",
              "href": "/collections",
            },
            {
              "name": "Дэвид Морс",
              "href": "/collections",
            },
            {
              "name": "Бонни Хант",
              "href": "/collections",
            },
            {
              "name": "Майкл Кларк Дункан",
              "href": "/collections",
            },
            {
              "name": "Джеймс Кромуэлл",
              "href": "/collections",
            },
            {
              "name": "Майкл Джиттер",
              "href": "/collections",
            },
          ],
          "info": "1999, США. Драма",
          "rating": "9.1",
          "description": "Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.",
        },
        {
          "ID": "2",
          "poster": "greenMile.webp",
          "trailerHref": "https://www.youtube.com/watch?v=Bg7epsq0OIQ",
          "title": "Зелёная миля",
          "originalTitle": "The Green Mile",
          "year": "1999",
          "country": "США",
          "genre": "Драма, Криминал",
          "motto": "Пол Эджкомб не верил в чудеса. Пока не столкнулся с одним из них",
          "director": "Франк Дарабонт",
          "budget": "60 000 000 $",
          "gross": "300 000 000 $",
          "duration": "189 минут",
          "mainCast": "Том Хэнкс, Дэвид Морс, Бонни Хант, Майкл Клакр Дункан, Джеймс Кромуэлл, Майкл Джитер, Грэм Грин, Даг Хатчисон",
          "cast": [
            {
              "name": "Том Хэнкс",
              "href": "/collections",
            },
            {
              "name": "Дэвид Морс",
              "href": "/collections",
            },
            {
              "name": "Бонни Хант",
              "href": "/collections",
            },
            {
              "name": "Майкл Кларк Дункан",
              "href": "/collections",
            },
            {
              "name": "Джеймс Кромуэлл",
              "href": "/collections",
            },
            {
              "name": "Майкл Джиттер",
              "href": "/collections",
            },
          ],
          "info": "1999, США. Драма",
          "rating": "9.1",
          "description": "Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.",
        },
        {
          "ID": "2",
          "poster": "greenMile.webp",
          "trailerHref": "https://www.youtube.com/watch?v=Bg7epsq0OIQ",
          "title": "Зелёная миля",
          "originalTitle": "The Green Mile",
          "year": "1999",
          "country": "США",
          "genre": "Драма, Криминал",
          "motto": "Пол Эджкомб не верил в чудеса. Пока не столкнулся с одним из них",
          "director": "Франк Дарабонт",
          "budget": "60 000 000 $",
          "gross": "300 000 000 $",
          "duration": "189 минут",
          "mainCast": "Том Хэнкс, Дэвид Морс, Бонни Хант, Майкл Клакр Дункан, Джеймс Кромуэлл, Майкл Джитер, Грэм Грин, Даг Хатчисон",
          "cast": [
            {
              "name": "Том Хэнкс",
              "href": "/collections",
            },
            {
              "name": "Дэвид Морс",
              "href": "/collections",
            },
            {
              "name": "Бонни Хант",
              "href": "/collections",
            },
            {
              "name": "Майкл Кларк Дункан",
              "href": "/collections",
            },
            {
              "name": "Джеймс Кромуэлл",
              "href": "/collections",
            },
            {
              "name": "Майкл Джиттер",
              "href": "/collections",
            },
          ],
          "info": "1999, США. Драма",
          "rating": "9.1",
          "description": "Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.",
        },
      ]
    },
    {
      actor: {
        "ID": "1",
        "avatar": "tales.webp",
        "name": "Баба Яга",
        "originalName": "Baba Yaga",
        "career": "Актёр",
        "height": "160 см (без ступы)",
        "birthdate": "Неизвестно",
        "birthplace": "Русь",
        "genres": "Сказки",
        "total": "Много",
      },
      related: [
        {
          "href": "/actors/1",
          "poster": "tomHanks.webp",
          "title": "Том Хэнкс",
        },
        {
          "href": "/actors/1",
          "poster": "tomHanks.webp",
          "title": "Том Хэнкс",
        },
        {
          "href": "/actors/1",
          "poster": "tomHanks.webp",
          "title": "Том Хэнкс",
        },
        {
          "href": "/actors/1",
          "poster": "tomHanks.webp",
          "title": "Том Хэнкс",
        },
        {
          "href": "/actors/1",
          "poster": "tomHanks.webp",
          "title": "Том Хэнкс",
        },
        {
          "href": "/actors/1",
          "poster": "tomHanks.webp",
          "title": "Том Хэнкс",
        },
        {
          "href": "/actors/1",
          "poster": "tomHanks.webp",
          "title": "Том Хэнкс",
        },
        {
          "href": "/actors/1",
          "poster": "tomHanks.webp",
          "title": "Том Хэнкс",
        },
        {
          "href": "/actors/1",
          "poster": "tomHanks.webp",
          "title": "Том Хэнкс",
        },        
      ],
      "movies": [
        {
          "ID": "2",
          "poster": "greenMile.webp",
          "trailerHref": "https://www.youtube.com/watch?v=Bg7epsq0OIQ",
          "title": "Зелёная миля",
          "originalTitle": "The Green Mile",
          "year": "1999",
          "country": "США",
          "genre": "Драма, Криминал",
          "motto": "Пол Эджкомб не верил в чудеса. Пока не столкнулся с одним из них",
          "director": "Франк Дарабонт",
          "budget": "60 000 000 $",
          "gross": "300 000 000 $",
          "duration": "189 минут",
          "mainCast": "Том Хэнкс, Дэвид Морс, Бонни Хант, Майкл Клакр Дункан, Джеймс Кромуэлл, Майкл Джитер, Грэм Грин, Даг Хатчисон",
          "cast": [
            {
              "name": "Том Хэнкс",
              "href": "/collections",
            },
            {
              "name": "Дэвид Морс",
              "href": "/collections",
            },
            {
              "name": "Бонни Хант",
              "href": "/collections",
            },
            {
              "name": "Майкл Кларк Дункан",
              "href": "/collections",
            },
            {
              "name": "Джеймс Кромуэлл",
              "href": "/collections",
            },
            {
              "name": "Майкл Джиттер",
              "href": "/collections",
            },
          ],
          "info": "1999, США. Драма",
          "rating": "9.1",
          "description": "Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.",
        },
        {
          "ID": "2",
          "poster": "greenMile.webp",
          "trailerHref": "https://www.youtube.com/watch?v=Bg7epsq0OIQ",
          "title": "Зелёная миля",
          "originalTitle": "The Green Mile",
          "year": "1999",
          "country": "США",
          "genre": "Драма, Криминал",
          "motto": "Пол Эджкомб не верил в чудеса. Пока не столкнулся с одним из них",
          "director": "Франк Дарабонт",
          "budget": "60 000 000 $",
          "gross": "300 000 000 $",
          "duration": "189 минут",
          "mainCast": "Том Хэнкс, Дэвид Морс, Бонни Хант, Майкл Клакр Дункан, Джеймс Кромуэлл, Майкл Джитер, Грэм Грин, Даг Хатчисон",
          "cast": [
            {
              "name": "Том Хэнкс",
              "href": "/collections",
            },
            {
              "name": "Дэвид Морс",
              "href": "/collections",
            },
            {
              "name": "Бонни Хант",
              "href": "/collections",
            },
            {
              "name": "Майкл Кларк Дункан",
              "href": "/collections",
            },
            {
              "name": "Джеймс Кромуэлл",
              "href": "/collections",
            },
            {
              "name": "Майкл Джиттер",
              "href": "/collections",
            },
          ],
          "info": "1999, США. Драма",
          "rating": "9.1",
          "description": "Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.",
        },
        {
          "ID": "2",
          "poster": "greenMile.webp",
          "trailerHref": "https://www.youtube.com/watch?v=Bg7epsq0OIQ",
          "title": "Зелёная миля",
          "originalTitle": "The Green Mile",
          "year": "1999",
          "country": "США",
          "genre": "Драма, Криминал",
          "motto": "Пол Эджкомб не верил в чудеса. Пока не столкнулся с одним из них",
          "director": "Франк Дарабонт",
          "budget": "60 000 000 $",
          "gross": "300 000 000 $",
          "duration": "189 минут",
          "mainCast": "Том Хэнкс, Дэвид Морс, Бонни Хант, Майкл Клакр Дункан, Джеймс Кромуэлл, Майкл Джитер, Грэм Грин, Даг Хатчисон",
          "cast": [
            {
              "name": "Том Хэнкс",
              "href": "/collections",
            },
            {
              "name": "Дэвид Морс",
              "href": "/collections",
            },
            {
              "name": "Бонни Хант",
              "href": "/collections",
            },
            {
              "name": "Майкл Кларк Дункан",
              "href": "/collections",
            },
            {
              "name": "Джеймс Кромуэлл",
              "href": "/collections",
            },
            {
              "name": "Майкл Джиттер",
              "href": "/collections",
            },
          ],
          "info": "1999, США. Драма",
          "rating": "9.1",
          "description": "Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.",
        },
      ]
    },
  ];
};

module.exports = startServer;
