FROM node:16.14

WORKDIR /app-backend

COPY package*.json ./

RUN ["npm", "i"]

COPY . .

CMD ["npm", "run", "dev"]
