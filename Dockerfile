## Base Node.js image ##
FROM node:18 

## Creating app directory ##
WORKDIR /app

## Copying dependency file ##
COPY package.json .

## Installing Express ##
RUN npm install

## Copying Code + UI
COPY . .

## Exposing port ##
EXPOSE 3000

## Starting an Application ##
CMD ["npm", "start"]