# FROM  node:latest

# COPY . /home/app
# WORKDIR /home/app

# RUN npm install

# EXPOSE 3000

# CMD ["node","server"]

FROM node:latest

WORKDIR /home/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "src/server.js"]