const express = require("express");
const body = require("body-parser");
const cookie = require("cookie-parser");
const morgan = require("morgan");
const {v4: uuid} = require("uuid");
const path = require("path");
const cors = require("cors");
const app = express();
const startServer = require("./data");

app.use(cors({
  credentials: true,
  origin: "http://localhost:3000"
}));
app.use(morgan("dev"));
app.use(express.static(path.resolve(__dirname, "..", "public")));
app.use(body.json());
app.use(cookie());

startServer(app);

const port = process.env.PORT || 3001;

app.listen(port, function () {
    console.log(`Server listening port ${port}`);
});
