ARG NODE_VERSION=19-alpine3.16
FROM node:${NODE_VERSION} AS node
FROM node AS builder

RUN apk add git \
  make \
  gcc \
  musl-dev \
  linux-headers \
  ca-certificates \
  bash \
  curl \
  jq \
  && update-ca-certificates

RUN mkdir -p /app
WORKDIR /app

COPY ./ /app

RUN npm install --frozen-lockfile

EXPOSE 8080

CMD ["yarn", "dev"]
