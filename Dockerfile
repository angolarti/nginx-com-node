FROM node:18.12.0-alpine

WORKDIR /usr/src/app

RUN apk update && apk add --no-cache wget
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin
ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

COPY package.json .
COPY package-lock.json .
RUN npm i && npm cache clean --force
RUN mv node_modules /node_modules

VOLUME [ "/node_modules" ]

EXPOSE 3000
