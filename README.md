# EduHub - Online Learning Management System

EduHub is a comprehensive Learning Management System (LMS) designed to facilitate interactive online learning experiences. The platform connects instructors (admins) and students, offering a range of functionalities to enhance the teaching and learning process.

## Overview

"EduHub" emphasizes personalized learning experiences, allowing students to select courses of interest and engage deeply with course content and fellow learners. Admins have access to course and lecture management tools, user management functionalities, and analytics dashboards to monitor platform usage and engagement.

## Core Functionalities

### Authentication and Authorization

- **User Registration & Login**: Secure user registration and login processes for students and admins. Authentication mechanisms verify user credentials before granting access.
- **Role-Based Access Control (RBAC)**: Define clear roles within the system, primarily Admin and Student, each with distinct permissions and access levels.

### Admin Side

- **Course Creation**: Admins can create new courses, specifying course details such as name, description, and prerequisites.
- **Lecture Management**: Schedule lectures for courses, providing details like title, timing, description, and meeting link.
- **Analytics and Insights**: Dashboard displaying key metrics like total students, courses, and lectures.
- **Student and Course Management**: View and manage students, courses, and lectures.
## Setup
  - ## Backend Setup
1. Clone the repository.
2. Navigate to the project directory.
3. The backend is built using Node.js and Express.
4. MongoDB is used as the database.
5. CORS  allowing browser should permit loading resources
6. Install dependencies using `npm install`.
7. Create a `.env` file in the root directory and provide the     following environment variables:
8. Start the server using `npm run server`.
9. Access the application in your browser at `http://localhost:5200`.

  - ## Frontend Setup
- The frontend is built using React.
- Navigate to the `client` directory.
- Install the required dependencies using `npm install`.
- Start the development server using `npm start`.

### Student Side

- **Course Selection**: Students select three courses upon registration, tailoring their learning journey to their interests.
- **Lecture Access and Engagement**: Access lectures for chosen courses and engage in discussions with peers and instructors.
- **Profile Management**: View and update personal information for a customized learning experience.

### Interaction and Experience

- **Search and Filter**: Robust search and filtering options across all pages streamline navigation and management processes.

## Installation

1. Clone the repository: `git clone https://github.com/srinivasGokarla/idea-clan`
2. Navigate to the project directory: `cd frontend`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`

## Technologies Used

- Frontend: React.js
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT
- Other Libraries: axios, react-router-dom, jwt-decode

## API Documentation

### Authentication

- **Register User**
  - **URL:** `/register`
  - **Method:** POST
  - **Request Body:**
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com",
      "password": "password123",
      "role": "student"
    }
    ```
- **Login User**
  - **URL:** `/login`
  - **Method:** POST
  - **Request Body:**
    ```json
    {
      "email": "john@example.com",
      "password": "password123"
    }
    ```

### Admin APIs

- **Create Course**
  - **URL:** `/courses`
  - **Method:** POST
  - **Request Body:**
    ```json
    {
      "name": "Introduction to Programming",
      "description": "A beginner-friendly course on programming fundamentals.",
      "prerequisites": "None"
    }
    ```
- **Schedule Lecture**
  - **URL:** `/courses/{courseId}/lectures`
  - **Method:** POST
  - **Request Body:**
    ```json
    {
      "title": "Variables and Data Types",
      "startTime": "2024-03-15T10:00:00",
      "endTime": "2024-03-15T12:00:00",
      "description": "Understanding basic concepts of variables and data types.",
      "meetingLink": "https://zoom.us/j/123456789"
    }
    ```

### Student APIs

- **Select Courses**
  - **URL:** `/select-courses`
  - **Method:** POST
  - **Request Body:**
    ```json
    {
      "courses": ["courseId1", "courseId2", "courseId3"]
    }
    ```

## Deployed links
  - **Frontend**
[link](https://idea-clan-frontend-a8qmsqk7l-srinivasgokarla.vercel.app/)

  - **Backend**
[link](https://idea-clan-backend.onrender.com)

#### Cloud Deployment

- Render
used Render for deploying the MongoDB (database), node js (Backend).
- vercel 
used vercel for deploying reactjs(frontend)



