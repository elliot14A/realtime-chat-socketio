FROM node:latest AS node

RUN mkdir -p /app
WORKDIR /app

COPY ./package.json /app

RUN yarn install 


COPY . /app

RUN yarn prisma generate
EXPOSE 8080

CMD ["yarn", "start"]
