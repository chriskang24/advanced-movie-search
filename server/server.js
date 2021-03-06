// load .env data into process.env
require('dotenv').config();

// Web server config
<<<<<<< HEAD
const PORT       = process.env.PORT || 3001;
=======
const PORT       = process.env.PORT || 8001;
>>>>>>> 7473d11c66e0c5e5d6f41359f7d2dab41c749498
const ENV        = process.env.ENV || "development";
const express    = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const sass       = require("node-sass-middleware");
const app        = express();
const morgan     = require('morgan');
app.use(cors());
// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

app.set("view engine", "ejs");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

const usersRoutes = require("./routes/users");
const favoritesRoute = require('./routes/favorites');
const watchlistRoute = require('./routes/watchlist');
const reviewsRoute = require('./routes/reviews.js');

app.use('/api/users', usersRoutes(db));
app.use('/api/favorites', favoritesRoute(db));
app.use('/api/watchlist', watchlistRoute(db));
app.use('/api/reviews', reviewsRoute(db));

app.get("/", (req, res) => {
  res.end("hello");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

//
