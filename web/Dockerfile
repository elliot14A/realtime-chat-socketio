FROM node:latest

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Copying source files
COPY . /app

# Installing dependencies
RUN npm install --legacy-peer-deps

EXPOSE 3000

# Running the app
CMD "yarn" "dev" "--host"
