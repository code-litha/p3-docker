FROM node:lts-hydrogen

ENV DATABASE_URL=https://supabase.com/...
ENV NODE_ENV=production
ENV JWT_SECRET=secret

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

CMD ["npm", "start"]