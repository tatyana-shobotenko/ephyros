FROM node:5
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

EXPOSE 8080
CMD PORT=8080 \
  node ./build/server/prod.js
