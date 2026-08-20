# Task Management REST API

## Project Description

This project is a Task Management REST API developed using Node.js, Express.js, MongoDB, and Mongoose. It allows users to create, list, update, and delete tasks. Task data is stored in a MongoDB database.

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- JavaScript
- Postman
- Git / GitHub

## Features

- Create tasks
- List all tasks
- Get a single task by ID
- Update tasks
- Delete tasks
- Validate task IDs
- Require a task title
- Validate the `completed` field as `true` or `false`

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/tasks` | Get all tasks |
| GET | `/api/tasks/:id` | Get a single task by ID |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/:id` | Update a task by ID |
| DELETE | `/api/tasks/:id` | Delete a task by ID |

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/Pelin-951/task-management-api.git
```

### 2. Navigate to the project directory

```bash
cd task-management-api
```

### 3. Install dependencies

```bash
npm install
```

### 4. Make sure MongoDB is running

Make sure MongoDB is installed and running on your local machine.

The application uses the following MongoDB connection:

```text
mongodb://127.0.0.1:27017/taskdb
```

### 5. Create a `.env` file

Create a `.env` file in the project root directory and add:

```env
MONGO_URI=mongodb://127.0.0.1:27017/taskdb
```

### 6. Start the development server

```bash
npm run dev
```

The server will run on:

```text
http://localhost:5000
```

### 7. Test the API


You can test the API endpoints using Postman.



## API Usage

### Create a Task

**POST** `/api/tasks`

Request body:

```json
{
  "title": "Learn Node.js",
  "completed": false
}
```

### Get All Tasks

**GET** `/api/tasks`

### Get a Single Task

**GET** `/api/tasks/:id`

### Update a Task

**PUT** `/api/tasks/:id`

Request body:

```json
{
  "title": "Learn Express.js",
  "completed": true
}
```

### Delete a Task

**DELETE** `/api/tasks/:id`