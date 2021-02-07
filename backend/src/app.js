const express = require("express");
const cors = require("cors");
require("colors");

// Constants

// App
const CORS_URL = process.env.CORS_URL | "localhost";
const CORS_PORT = process.env.CORS_PORT | "3000";
var corsOptions = {
  origin: `http://${CORS_URL}:${CORS_PORT}`,
};
const app = express();
app.use(cors(corsOptions));
require("./config/mongoDb")();

app.get("/users", (req, res) => {
  res.status(200).json({
    users: [
      { name: "Ramprit Sahani", email: "rampritsahani@gmail.com" },
      { name: "Anita Sahani", email: "anitasahani@gmail.com" },
      { name: "Versha Sahani", email: "vershasahani@gmail.com" },
    ],
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`.bgBlue);
});
