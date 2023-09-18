#  based image yang digunakan
FROM node:lts-hydrogen

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=4002

COPY package.json package-lock.json /app/

RUN npm install nodemon -g
RUN npm install

COPY . .

CMD ["nodemon", "app.js"]