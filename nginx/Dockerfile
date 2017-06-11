FROM nginx:1.13
MAINTAINER Bogdan Savluk <savluk.bogdan@gmail.com>

RUN mkdir /app
WORKDIR /app

COPY ./public /app/public
COPY ./nginx/vhost.conf /etc/nginx/conf.d/default.conf
