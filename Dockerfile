FROM node:alpine as builder
WORKDIR '/usr/app'
COPY ./server/package.json .
RUN npm install
COPY ./server .
EXPOSE 5000
CMD ["npm", "run", "start"]