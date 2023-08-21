# syntax=docker/dockerfile:1

FROM node:lts-hydrogen

ENV NODE_ENV=production
ENV PORT=4000
ENV APP_SERVICE_URL=http://localhost:4002
ENV USER_SERVICE_URL=http://localhost:4001

WORKDIR /orchestrator

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

CMD ["npm", "start"]