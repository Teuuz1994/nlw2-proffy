FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./
RUN yarn

COPY . .

RUN yarn migration

EXPOSE 3333

CMD ["yarn", "dev:server"]
