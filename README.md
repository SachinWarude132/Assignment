# Task Manager Project

## Overview

This project is a full-stack Task Management Application built using the MERN stack. It includes user authentication, role-based access control (RBAC), task management features, and an admin dashboard.

---

## Features

### Authentication

* User Registration
* User Login
* User Logout
* JWT Authentication
* Protected Routes

### Task Management

* Create Tasks
* View All Tasks
* Update Tasks
* Delete Tasks
* Toggle Task Status

### Admin Features

* Role-Based Access Control (RBAC)
* View All Registered Users
* Admin Protected Routes

---

## Tech Stack

### Frontend

* React
* React Router
* Axios
* Context API

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs

---

## Project Structure

```text
Assignment-0/
│
├── Backend/
│
├── Frontend/
│
├── README.md
│
└── PrimeTrade.postman_collection.json
```

---

## Installation

### Clone the Repository

```bash
git clone <repository-url>
cd Assignment-0
```

### Backend Setup

```bash
cd Backend
npm install
npm run dev
```

Create a `.env` file in the Backend folder:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```

---

## API Endpoints

### Authentication

| Method | Endpoint              |
| ------ | --------------------- |
| POST   | /api/v1/auth/register |
| POST   | /api/v1/auth/login    |
| GET    | /api/v1/auth/get-me   |
| GET    | /api/v1/auth/logout   |

### Tasks

| Method | Endpoint         |
| ------ | ---------------- |
| POST   | /api/v1/task     |
| GET    | /api/v1/task     |
| PUT    | /api/v1/task/:id |
| DELETE | /api/v1/task/:id |

### Admin

| Method | Endpoint            |
| ------ | ------------------- |
| GET    | /api/v1/admin/users |

---

## Roles

### User

* Create Tasks
* View Own Tasks
* Update Own Tasks
* Delete Own Tasks

### Admin

* All User Permissions
* View All Registered Users

---

## Postman Collection

The Postman collection is included in the root directory:

```text
PrimeTrade.postman_collection.json
```

Import it into Postman to test all APIs.

---

## Future Improvements

* Redis Token Blacklisting
* Pagination
* Search and Filtering
* Docker Support
* Unit Testing
* CI/CD Pipeline

---

## Author

Sachin Warude
