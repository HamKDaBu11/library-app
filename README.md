# Library Application with TypeScript, Next.js 14, Node.js, and PostgreSQL (Sequelize ORM)

This is a full-stack CRUD application built with **TypeScript**, **Next.js 14** on the frontend, and **Node.js** on the backend. It uses **PostgreSQL** as the database, with **Sequelize ORM** to manage data storage and queries.

## Features
- Full CRUD operations (Create, Read, Update, Delete) for managing records.
- Type-safe frontend using **TypeScript**.
- Fast and scalable backend with **Node.js**.
- **PostgreSQL** database with **Sequelize ORM** for easy data modeling and querying.
- Modern **Next.js 14** features for server-side rendering and optimized static site generation.
- Responsive and user-friendly interface.

## Tech Stack
- **Frontend**: Next.js 14, TypeScript, React
- **Backend**: Node.js, Express
- **Database**: PostgreSQL
- **ORM**: Sequelize
- **Others**: Docker (optional), bcrypt (for password hashing), JWT (for authentication)

## Project Setup

### Prerequisites

Make sure you have the following installed on your machine:
- **Node.js** (v16.x or later)
- **TypeScript** (v4.x or later)
- **PostgreSQL** (v12 or later)

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name

2. Install Dependencies:
   - For the frontend:
      ```bash
      cd client
      npm install

   - For the backend:
      ```bash
      cd server
      npm install
      
3. Set up a new PostgreSQL database:
   - Create a new PostgreSQL database:
     ```bash
     createddb library

4. Configure the environment variables:
   - In the ``backend/`` directory, create a ``.env`` file with the following variables:
     ```bash
     
     POSTGRES_DB=your_db
     POSTGRES_HOST=your_host
     POSTGRES_PASSWORD=your_username
     POSTGRES_USER=your_username
     POSTGRES_PORT=8000

5. Run migrations (for Sequelize ORM):
   ```bash
   npx sequelize-cli db:migrate
   npx sequelize-cli db:migrate:undo

## Running the Application

1. Start the backend:
   ```bash
   cd server
   npm start

2. Start the frontend:
   ```bash
   cd client
   npm run dev

3. Access the application in your browser:
   - Frontend: http://localhost:3000
   - Backend API: http:localhost:5000

## Folder Structure

```bash

/client
   /src
      /app
      /components
      /schemas
   .dockerignore
   Dockerfile
   next.config.js
   tsconfig.json
   package.json
/server
   /config
   /controllers
   /migrations
   /models
   /routes
   /seeders
   .dockerignore
   Dockerfile
   index.js
   package.json
docker-compose.yaml

```

-    **/server**: Contains all backend-related files (models, controllers, routes, etc.).
-    **/client**: Contains the Next.js frontend code (pages, components, styles, etc.).

## API Endpoints

- **POST** ``/api/books`` – Get all books available.
- **GET** ``/api/books/genres`` – Get all genres of the available books.
- **POST** ``/api/books`` – Add a new book.
- **PUT** ``/api/books/:id`` – Update a book by id.
- **DELETE** ``/api/books/:id`` – Delete a book by id.
- **GET** ``/api/books/search`` – Filter books by author or title.
- **GET** ``/api/books/filter`` – Filter books by genre.

## Running With Docker (Optional)

If you prefer to run the application with Docker, follow these steps:
   1. Build the Docker images:
      ```bash
      docker-compose build
      ```
   2. Start the application with Docker:
      ```bash
      docker-compose up
      ```
This will spin up both the frontend and backend, along with the PostgreSQL database container.
