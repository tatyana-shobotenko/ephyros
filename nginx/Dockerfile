FROM nginx:1.9
MAINTAINER Bogdan Savluk <savluk.bogdan@gmail.com>

RUN mkdir /app
WORKDIR /app

COPY ./build/public /app/public
COPY ./nginx/vhost.conf /etc/nginx/conf.d/default.conf
