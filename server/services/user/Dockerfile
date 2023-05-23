FROM node:lts-hydrogen

ENV DATABASE_URL=https://mongodb+srv://...
ENV NODE_ENV=production
ENV JWT_SECRET=secret

WORKDIR /user

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

CMD ["npm", "start"]