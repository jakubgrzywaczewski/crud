FROM node:15-alpine

WORKDIR /usr/src/server

COPY . .

RUN yarn install
RUN yarn build

COPY . .

EXPOSE 5000

CMD [ "yarn", "start" ]