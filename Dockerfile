FROM node:4

COPY package.json /tmp/package.json
WORKDIR /tmp
RUN npm install

ENV app /app
RUN mkdir $app
RUN cp -a /tmp/node_modules $app
COPY . $app
WORKDIR $app

EXPOSE 8080
