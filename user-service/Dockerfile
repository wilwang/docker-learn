FROM node:10

WORKDIR /usr/src/app
COPY . .
RUN npm install

EXPOSE 3002
CMD ["node", "server.js"]