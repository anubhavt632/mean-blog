Welcome to the MERN Blog application, a full-stack project built using MongoDB, Express.js, React, and Node.js. This application allows users to create, read, update, and delete blog posts. Users can also register, log in, and leave comments on posts.

Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
Before you begin, ensure you have the following installed:

Node.js
MongoDB
npm or yarn
Installation
Follow these steps to get your development environment running:

Clone the repository

git clone https://github.com/yourusername/mern-blog.git
cd mern-blog
Set up the Backend
Navigate to the backend directory and install dependencies:

cd backend
npm install
Create a .env file in the backend directory and add your MongoDB URI and JWT secret key:

MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
Start the backend server:

npm start
Set up the Frontend
Open a new terminal window, navigate to the frontend directory from the root of the project, and install dependencies:

cd frontend
npm install
Start the frontend development server:

npm run dev
The application will now be running at http://localhost:3000.

Building for Production
To build the application for production, use the build script:

# In frontend directory

npm run build
This will compile the frontend to the frontend/dist folder, which can be served by the backend or any static file server.

Deployment
Refer to the deployment documentation of your hosting provider to deploy the application. Common providers include Vercel for the frontend and Heroku or MongoDB Atlas for the backend and database.

Features

User Authentication (Login & Registration)
CRUD Operations for Blog Posts
Comments on Posts
Responsive Design
Built With

MongoDB - Database
Express.js - Backend Framework
React - Frontend Library
Node.js - Runtime Environment
