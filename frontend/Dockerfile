FROM node:10.23.2-alpine3.10

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .
