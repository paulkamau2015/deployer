FROM node:12.16.3-alpine

RUN apk add --no-cache --update supervisor && mkdir -p /var/log/supervisor

COPY ./docker/node/supervisord.conf /etc/supervisord.conf

WORKDIR /application

COPY ./socket.js /application
COPY ./package*.json /application

RUN npm install --production

EXPOSE 6001

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]
