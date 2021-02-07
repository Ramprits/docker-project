const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("colors");

const CORS_URL = process.env.CORS_URL | "localhost";
const CORS_PORT = process.env.CORS_PORT | "3000";

const corsOptions = {
  origin: `http://${CORS_URL}:${CORS_PORT}`,
};

const app = express();
app.use(bodyParser.json());
app.use(cors(corsOptions));
require("./config/mongoDb")();
require("./routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`.bgBlue);
});
