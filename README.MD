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

