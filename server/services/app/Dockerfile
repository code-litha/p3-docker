# syntax=docker/dockerfile:1

FROM node:lts-hydrogen

ENV NODE_ENV=production
ENV PORT=4002
ENV DATABASE_URL=https://supabase.com/username:password

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

CMD ["npm", "start"]