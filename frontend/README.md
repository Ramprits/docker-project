# Create two projects with name backend and frontend with yarn

How to install mongo with docker
docker system prune
docker system prune -a

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

docker-compose.yml

```
version: "3.7"

services:
  frontend:
    build:
      context: ./frontend
    command: yarn start
    volumes:
      - ./frontend/src:/usr/app/src
    ports:
      - "3000:3000"
    tty: true
    stdin_open: true
  api:
    build:
      content: ./backend
    command: yarn start
    volumes:
      - ./backend/src:/usr/app/src
    ports:
      - "8080:8080"
    environment:
      - PORT=8080


```

```docker-compose build
docker-compose up
```

[Best resource link](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
