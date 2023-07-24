# FROM namaImages:tag ---> wajib
FROM node:lts-hydrogen 

ENV NODE_ENV=production
ENV PORT=4000
ENV APP_SERVICE_URL=http://localhost:4002
ENV USER_SERVICE_URL=http://localhost:4001

WORKDIR /orchestrator

COPY ["package.json", "package-lock.json*", "./"]

# RUN npm install -g nodemon
RUN npm install       # akan kebentuk folder node_modules

COPY . .

# CMD ["npx", "nodemon", "app.js"]
CMD ["npm", "start"]