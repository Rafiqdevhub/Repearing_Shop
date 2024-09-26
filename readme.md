# Repairing Shop Management System

## Overview

This project is a **Repairing Shop Management System** developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js).

## Tech Stack

- **Frontend**: React.js, Redux for state management
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose for data modeling
- **Authentication**: JSON Web Tokens (JWT)
- **Version Control**: Git & GitHub

## Installation & Setup

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (v14 or higher)
- **MongoDB** (locally or through a cloud service like MongoDB Atlas)
- **Git**

### Steps to Set Up Locally

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Rafiqdevhub/Repearing_Shop.git
   ```

2. **Navigate into the project directory**:

   ```bash
   cd Repearing_Shop
   ```

3. **Install server dependencies**:

   ```bash
   cd server
   npm install
   ```

4. **Install client dependencies**:

   ```bash
   cd ../client
   npm install
   ```

5. **Set up environment variables**:
   Create a `.env` file in the server folder and add the following:

   ```bash
   PORT=5000
   MONGO_URI=your-mongodb-uri
   JWT_SECRET=your-jwt-secret
   ```

6. **Run the development servers**:

   Open two terminal windows, one for the backend and one for the frontend.

   - For the backend:

     ```bash
     cd server
     npm run dev
     ```

   - For the frontend:
     ```bash
     cd client
     npm start
     ```

7. **Access the Application**:
   Open your browser and go to `http://localhost:3000`.

## Folder Structure

```bash
repairing-shop/
├── client/        # React frontend
├── server/        # Express backend
└── README.md      # Project documentation
```
