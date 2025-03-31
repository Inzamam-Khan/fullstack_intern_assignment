# Backend README

## Project Overview
This is the backend for the Full Stack Application. It is built using Node.js, Express, and Prisma ORM with PostgreSQL as the database. The backend handles authentication, data management, and API endpoints for the frontend.

## Features
- User authentication (JWT-based login & signup)
- CRUD operations for user data
- Secure API endpoints
- Database integration with PostgreSQL & Prisma ORM

## Tech Stack
- **Node.js** (Runtime environment)
- **Express.js** (Backend framework)
- **Prisma ORM** (Database management)
- **PostgreSQL** (Database)
- **JWT** (Authentication)
- **Dotenv** (Environment variables)

## Installation & Setup
### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- [PostgreSQL](https://www.postgresql.org/)

### Clone the Repository
```sh
git clone https://github.com/your-username/your-repo.git
cd backend
```

### Install Dependencies
```sh
npm install  # or yarn install
```

### Environment Variables
Create a `.env` file in the root directory and add:
```
DATABASE_URL="postgresql://inzamam:mypassword@localhost:5432/fullstack_app"
JWT_SECRET="your_secret_key"
PORT=5000
```

### Database Setup
#### 1. Initialize Prisma
```sh
npx prisma migrate dev --name init
```
#### 2. Seed the Database (If applicable)
```sh
npx prisma db seed
```

### Run the Server
```sh
npm run dev  # Starts the backend in development mode
```
The API will be available at `http://localhost:5000/`

## API Endpoints
| Method | Endpoint       | Description         |
|--------|--------------|---------------------|
| POST   | `/auth/signup` | User registration  |
| POST   | `/auth/login`  | User login         |
| GET    | `/users`       | Get all users      |
| GET    | `/users/:id`   | Get user by ID     |

## Project Structure
```
backend/
│── prisma/             # Prisma schema & migrations
│── src/
│   ├── controllers/    # API logic
│   ├── middleware/     # Authentication & security
│   ├── models/         # Prisma ORM models
│   ├── routes/         # Express routes
│   ├── index.js        # Main entry point
│── .env                # Environment variables
│── package.json        # Dependencies & scripts
│── README.md           # Documentation
```

## Contribution Guide
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit changes (`git commit -m 'Add new feature'`)
4. Push to GitHub (`git push origin feature-branch`)
5. Open a pull request


