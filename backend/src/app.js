const express = require("express");
const cors = require("cors");

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
const app = express();
app.use(cors(corsOptions));

app.get("/users", (req, res) => {
  res.status(200).json({
    users: [
      { name: "Ramprit Sahani", email: "rampritsahani@gmail.com" },
      { name: "Anita Sahani", email: "anitasahani@gmail.com" },
    ],
  });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
