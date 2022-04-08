const { v4: uuid } = require('uuid');
const path = require('path');

const startServer = (app) => {
  app.get("/api/v1/collections", function (req, res) {
    res.json(Collections);
  });

  app.get("/api/v1/collections/collection/1", function (req, res) {
    res.json(top256);
  });

  app.get("/api/v1/collections/collection/2", function (req, res) {
    res.json(adventures);
  });

  app.get("/api/v1/actor/1", function (req, res) {
    res.json(actors[0]);
  });
  
  app.get("/api/v1/actor/2", function (req, res) {
    res.json(actors[1]);
  });


  app.get("/api/v1/movie/1", function (req, res) {
    res.json({
      movie: top256.movieList[0],
      related: [
        {
          "href": "/movie/2",
          "poster": "greenMile.png",
          "title": "Зелёная миля",
        },
        {
          "href": "/movie/2",
          "poster": "greenMile.png",
          "title": "Зелёная миля",
        },
        {
          "href": "/movie/2",
          "poster": "greenMile.png",
          "title": "Зелёная миля",
        },
        {
          "href": "/movie/2",
          "poster": "greenMile.png",
          "title": "Зелёная миля",
        },
        {
          "href": "/movie/2",
          "poster": "greenMile.png",
          "title": "Зелёная миля",
        },
        {
          "href": "/movie/2",
          "poster": "greenMile.png",
          "title": "Зелёная миля",
        },
        {
          "href": "/movie/2",
          "poster": "greenMile.png",
          "title": "Зелёная миля",
        },
        {
          "href": "/movie/2",
          "poster": "greenMile.png",
          "title": "Зелёная миля",
        },
        {
          "href": "/movie/2",
          "poster": "greenMile.png",
          "title": "Зелёная миля",
        },
        {
          "href": "/movie/2",
          "poster": "greenMile.png",
          "title": "Зелёная миля",
        },
        {
          "href": "/movie/2",
          "poster": "greenMile.png",
          "title": "Зелёная миля",
        },
      ],
      reviews: [
        {
          avatarSrc: "http://localhost:3000/server/images/romantic.png",
          username: "Пётр Калашников",
          userID: "",
          rating: "9 / 10",
          date: "28.03.2022",
          content: "Понравилось, только хочется продолжения",
          type: "good",
        },
        {
          avatarSrc: "http://localhost:3000/server/images/comics.png",
          username: "Анатолий Мужиков",
          userID: "",
          rating: "10 / 10",
          date: "28.03.2022",
          content: "Просто огонь! Ребят, это надо смотреть просто всем!",
          type: "good",
        },
        {
          avatarSrc: "http://localhost:3000/server/images/spy.png",
          username: "Костя Костяной",
          userID: "",
          rating: "7 / 10",
          date: "28.03.2022",
          content: "Средненько, книга интереснее",
          type: "neutral",
        },
        {
          avatarSrc: "http://localhost:3000/server/images/ourTop.png",
          username: "Виктория Киселёва",
          userID: "",
          rating: "8 / 10",
          date: "28.03.2022",
          content: "Не зашло.",
          type: "bad",
        },
        {
          avatarSrc: "http://localhost:3000/server/images/tales.png",
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

  app.get("/api/v1/movie/2", function (req, res) {
    res.json({
      movie: top256.movieList[1],
      related: [
        {
          "href": "/movie/1",
          "poster": "showshenkRedemption.png",
          "title": "Побег из Шоушенка",
        },
        {
          "href": "/movie/1",
          "poster": "showshenkRedemption.png",
          "title": "Побег из Шоушенка",
        },
        {
          "href": "/movie/1",
          "poster": "showshenkRedemption.png",
          "title": "Побег из Шоушенка",
        },
        {
          "href": "/movie/1",
          "poster": "showshenkRedemption.png",
          "title": "Побег из Шоушенка",
        },
        {
          "href": "/movie/1",
          "poster": "showshenkRedemption.png",
          "title": "Побег из Шоушенка",
        },
        {
          "href": "/movie/1",
          "poster": "showshenkRedemption.png",
          "title": "Побег из Шоушенка",
        },
        {
          "href": "/movie/1",
          "poster": "showshenkRedemption.png",
          "title": "Побег из Шоушенка",
        },
        {
          "href": "/movie/1",
          "poster": "showshenkRedemption.png",
          "title": "Побег из Шоушенка",
        },
        {
          "href": "/movie/1",
          "poster": "showshenkRedemption.png",
          "title": "Побег из Шоушенка",
        },
        {
          "href": "/movie/1",
          "poster": "showshenkRedemption.png",
          "title": "Побег из Шоушенка",
        },
        {
          "href": "/movie/1",
          "poster": "showshenkRedemption.png",
          "title": "Побег из Шоушенка",
        },
      ],
      reviews: [
        {
          avatarSrc: "http://localhost:3000/server/images/romantic.png",
          username: "Пётр Калашников",
          userID: "",
          rating: "9 / 10",
          date: "28.03.2022",
          content: "Понравилось, только хочется продолжения",
          type: "good",
        },
        {
          avatarSrc: "http://localhost:3000/server/images/comics.png",
          username: "Анатолий Мужиков",
          userID: "",
          rating: "10 / 10",
          date: "28.03.2022",
          content: "Просто огонь! Ребят, это надо смотреть просто всем!",
          type: "good",
        },
        {
          avatarSrc: "http://localhost:3000/server/images/spy.png",
          username: "Костя Костяной",
          userID: "",
          rating: "7 / 10",
          date: "28.03.2022",
          content: "Средненько, книга интереснее",
          type: "neutral",
        },
        {
          avatarSrc: "http://localhost:3000/server/images/ourTop.png",
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
      avatarSrc: "server/images/adventures.png",
      name: users[email].name,
      email: email,
    });
  });

  app.post("/api/v1/login", function (req, res) {
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
      ID: ID,
      avatarSrc: "server/images/adventures.png",
      name: users[email].name,
      email: email,
    });
  });

  app.get('/api/v1/checkAuth', (req, res) => {
    res.json({
      "status": 400,
    });
  });

  const users = {
    "a@a.ru": {
      name: "aaaaaa",
      email: "a@a.ru",
      password: 'password1',
    },
  };
  const ids = {};

  const Collections = {
    collectionList: [
      { description: "Топ 256", imgSrc: "top.png", page: "collections", number: "1" },
      { description: "Приключения", imgSrc: "adventures.png", page: "collections", number: "2" },
      { description: "Для всей семьи", imgSrc: "family.png", page: "collections", number: "3" },
      { description: "Романтичное", imgSrc: "romantic.png", page: "collections", number: "4" },
      { description: "Лучшие драмы", imgSrc: "drama.png", page: "collections", number: "5" },
      { description: "Детское", imgSrc: "childish.png", page: "collections", number: "6" },
      { description: "Комедии", imgSrc: "comedy.png", page: "collections", number: "7" },
      { description: "Спасение мира", imgSrc: "saveTheWorld.png", page: "collections", number: "8" },
      { description: "Кинокомиксы", imgSrc: "comics.png", page: "collections", number: "9" },
      { description: "Советская классика", imgSrc: "soviet.png", page: "collections", number: "10" },
      { description: "Шпионские фильмы", imgSrc: "spy.png", page: "collections", number: "11" },
      { description: "Выбор редакции", imgSrc: "ourTop.png", page: "collections", number: "12" },
    ]
  };

  const top256 = {
    title: "Топ 256",
    description: "Вот такая вот подборочка :)",
    movieList: [
      {
        "ID": "1",
        "poster": "showshenkRedemption.png",
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
            "href": "/actor/2",
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
        "poster": "greenMile.png",
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
            "href": "/actor/1",
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
        "poster": "showshenkRedemption.png",
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
        "poster": "greenMile.png",
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
        "poster": "showshenkRedemption.png",
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
        "poster": "greenMile.png",
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
        "poster": "showshenkRedemption.png",
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
        "poster": "greenMile.png",
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
        "poster": "showshenkRedemption.png",
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
        "poster": "greenMile.png",
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
        "poster": "showshenkRedemption.png",
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
        "poster": "greenMile.png",
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
        "poster": "showshenkRedemption.png",
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
        "poster": "greenMile.png",
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
        "poster": "showshenkRedemption.png",
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
        "poster": "greenMile.png",
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
        "poster": "showshenkRedemption.png",
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
        "poster": "greenMile.png",
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
        "poster": "showshenkRedemption.png",
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
        "poster": "greenMile.png",
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
        "poster": "showshenkRedemption.png",
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
        "poster": "greenMile.png",
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
    movieList: [
      {
        "ID": "1",
        "poster": "showshenkRedemption.png",
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
        "poster": "greenMile.png",
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
        "poster": "showshenkRedemption.png",
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
        "poster": "greenMile.png",
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
        "avatar": "tomHanks.jpg",
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
          "href": "/actor/2",
          "poster": "tales.png",
          "title": "Баба Яга",
        },
        {
          "href": "/actor/2",
          "poster": "tales.png",
          "title": "Баба Яга",
        },
        {
          "href": "/actor/2",
          "poster": "tales.png",
          "title": "Баба Яга",
        },
        {
          "href": "/actor/2",
          "poster": "tales.png",
          "title": "Баба Яга",
        },
        {
          "href": "/actor/2",
          "poster": "tales.png",
          "title": "Баба Яга",
        },
        {
          "href": "/actor/2",
          "poster": "tales.png",
          "title": "Баба Яга",
        },
        {
          "href": "/actor/2",
          "poster": "tales.png",
          "title": "Баба Яга",
        },
        {
          "href": "/actor/2",
          "poster": "tales.png",
          "title": "Баба Яга",
        },
        {
          "href": "/actor/2",
          "poster": "tales.png",
          "title": "Баба Яга",
        },
      ],
      "movies": [
        {
          "ID": "2",
          "poster": "greenMile.png",
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
          "poster": "greenMile.png",
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
          "poster": "greenMile.png",
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
        "avatar": "tales.png",
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
          "href": "/actor/1",
          "poster": "tomHanks.jpg",
          "title": "Том Хэнкс",
        },
        {
          "href": "/actor/1",
          "poster": "tomHanks.jpg",
          "title": "Том Хэнкс",
        },
        {
          "href": "/actor/1",
          "poster": "tomHanks.jpg",
          "title": "Том Хэнкс",
        },
        {
          "href": "/actor/1",
          "poster": "tomHanks.jpg",
          "title": "Том Хэнкс",
        },
        {
          "href": "/actor/1",
          "poster": "tomHanks.jpg",
          "title": "Том Хэнкс",
        },
        {
          "href": "/actor/1",
          "poster": "tomHanks.jpg",
          "title": "Том Хэнкс",
        },
        {
          "href": "/actor/1",
          "poster": "tomHanks.jpg",
          "title": "Том Хэнкс",
        },
        {
          "href": "/actor/1",
          "poster": "tomHanks.jpg",
          "title": "Том Хэнкс",
        },
        {
          "href": "/actor/1",
          "poster": "tomHanks.jpg",
          "title": "Том Хэнкс",
        },        
      ],
      "movies": [
        {
          "ID": "2",
          "poster": "greenMile.png",
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
          "poster": "greenMile.png",
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
          "poster": "greenMile.png",
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