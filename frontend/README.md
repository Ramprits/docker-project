# Create two projects with name backend and frontend with yarn

create express application

```
const express = require("express");

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
```

Frontend file Dockerfile

```
FROM node:10.23.2-alpine3.10
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .

```

run cmd

```
  docker build -t reactapp .
  docker build -t nodeapp .
```

Build your application with this cmd
