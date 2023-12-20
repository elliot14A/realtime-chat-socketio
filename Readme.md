## Realtime Chat Application

### Overview

this a simple implementation Realtime Chat Application! This project uses Docker Compose to simplify the deployment of the application. Follow the instructions below to set up and run the chat application.

## Prerequisites

- Docker
- Docker Compose
- Node.js

## Getting Started

Clone the repository to your local machine:

```bash
git clone https://github.com/elliot14A/realtime-chat-socketio

# Navigate to the project directory:

cd realtime-chat-socketio

#Start the application using Docker Compose:

docker-compose up

# This command will download the necessary images and start the containers for the application.

# Run Prisma Migrations:

# Open a new terminal window/tab and navigate to the project directory:


cd realtime-chat-socketio/server
# Run Prisma migrations using the following command:

npx prisma migrate dev
# This command will apply the database migrations using Prisma.
```

Access the Chat Application:

Open your web browser and go to http://localhost:3000 to access the chat application.

## Features

- Realtime Chat: Utilizes Socket.IO to implement realtime chat features.
- Frontend: Built with React for a dynamic and interactive user interface.
- Backend: Powered by Node.js to handle server-side logic.
- Database: PostgreSQL is used as the database to store chat messages.
- Directory Structure
- web/: Contains the React frontend code.
- server/: Includes the Node.js backend code.
- docker-compose.yml: Defines Docker services for the application.
