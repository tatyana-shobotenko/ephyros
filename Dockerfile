FROM node:6
MAINTAINER Bogdan Savluk <savluk.bogdan@gmail.com>

RUN mkdir /app
WORKDIR /app

ADD . .
COPY ./.env.sample ./.env

#RUN npm i \
#  && npm run build \
#  && npm prune --production \
#  && npm cache clean \
#  && rm -rf /tmp/npm-*

ENV PORT=8080
ENV SSR=1

EXPOSE 8080
CMD node ./server.js
