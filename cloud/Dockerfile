FROM node:11.9.0-alpine
COPY . /app
EXPOSE 9000
WORKDIR /app
RUN apk update && apk add python g++ make && rm -rf /var/cache/apk/*
RUN npm install
CMD [ "node_modules/.bin/skygear-node" ]