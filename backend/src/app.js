const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { errorConverter, errorHandler } = require("./middlewares/error");
require("colors");

const CORS_URL = "localhost";
const CORS_PORT = "3000";
console.log("CORS_URL, CORS_PORT", CORS_URL, CORS_PORT);
const corsOptions = {
  origin: `http://${CORS_URL}:${CORS_PORT}`,
};

const app = express();
app.use(bodyParser.json());
app.use(cors(corsOptions));
require("./config/mongoDb")();
require("./routes")(app);

app.use(errorConverter);
app.use(errorHandler);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`.bgBlue);
});
