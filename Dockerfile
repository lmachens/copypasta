FROM node:12

WORKDIR /usr/src/app

COPY . .

RUN npm ci
RUN cd client && npm ci

RUN npm run build

EXPOSE 8080

CMD ["npm", "start"]