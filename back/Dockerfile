FROM node:16.14.0
WORKDIR /usr/src/app
COPY package.json .
RUN npm set strict-ssl false
RUN npm install
COPY ./src/ .
CMD ["node", "server.js"]
