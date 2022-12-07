FROM node:16.15.0 AS deps

RUN mkdir /ho_frontend

ENV NODE_ENV=production

WORKDIR /ho_frontend

# COPY ./package.json ./
COPY ["package.json", "package-lock.json*", "./"]

RUN npm cache clear --force

RUN npm install --legacy-peer-deps --production
COPY .env.local ./env.local
COPY . .

RUN npm run build

CMD ["npm", "start"]