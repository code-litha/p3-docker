FROM node:lts-hydrogen

ENV NODE_ENV=production
ENV DATABASE_URL=https://mongodb+srv:...

WORKDIR /users

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

CMD ["npm", "start"]