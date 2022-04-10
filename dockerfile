FROM node:16

WORKDIR /usr/src/app

COPY . .

COPY package*.json ./

RUN npm install

RUN npm ci --only=production

EXPOSE 3000

CMD [ "node", "server.js" ]
