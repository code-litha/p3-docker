# syntax=docker/dockerfile:1

FROM node:lts-hydrogen

ENV NODE_ENV=production
ENV PORT=4001
ENV DATABASE_URL=https://mongodb+srv/username:password

WORKDIR /user

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

CMD ["npm", "start"]