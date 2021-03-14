FROM node:15-alpine

WORKDIR /usr/src/server

COPY . .

RUN yarn install

COPY . .

EXPOSE 5000

CMD [ "yarn", "start" ]