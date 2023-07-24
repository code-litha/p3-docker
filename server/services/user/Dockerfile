# FROM namaImages:tag ---> wajib
FROM node:lts-hydrogen 

ENV NODE_ENV=production
ENV PORT=4001
ENV DATABASE_URL=https://mongodb+srv/database...
ENV JWT_SECRET=secretnih

WORKDIR /user

COPY ["package.json", "package-lock.json*", "./"]

# RUN npm install -g nodemon
RUN npm install       # akan kebentuk folder node_modules

COPY . .

# CMD ["npx", "nodemon", "app.js"]
CMD ["npm", "start"]