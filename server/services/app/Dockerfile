FROM node:lts-hydrogen

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=4002
ENV DATABASE_URL=https://supabase.com/postgres:postgres...

COPY package.json package-lock.json /app/

RUN npm install && npm cache clean --force

RUN npm install -g nodemon

COPY ./ ./

# CMD ["npm", "run", "start"]
CMD ["nodemon", "app.js"]