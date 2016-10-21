FROM node:4-onbuild
expose 8080

COPY package.json /tmp/
WORKDIR /tmp
RUN npm config set registry http://registry.npmjs.org/
RUN npm install

ENV app /app

RUN mkdir $app
RUN cp -a /tmp/node_modules $app
WORKDIR $app
ADD . $app
