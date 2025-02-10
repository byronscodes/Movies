# Movies App

This project allows users to view movie details, add reviews, and see existing reviews for each movie. The application uses a React-based frontend with Vite, Spring Boot for the backend API, and integrates with various libraries such as Axios, React Bootstrap, Material-UI, and FontAwesome.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)

## Features

- **Movie Listing:** View movies with posters and details.
- **Reviews:** Read and add reviews for each movie.
- **Responsive Design:** Uses React Bootstrap and Material-UI for a responsive layout.
- **API Communication:** Axios is used to handle HTTP requests between the frontend and the Spring Boot backend.
- **CORS Handling:** Configured CORS in the backend to allow requests from the frontend.

## Tech Stack

- **Frontend:** React, Vite, React Bootstrap, Material-UI, FontAwesome
- **Backend:** Spring Boot
- **HTTP Client:** Axios
- **Build Tools:** Maven (backend), npm (frontend)

## Installation

### Backend Setup

1. **Clone the repository** and navigate to the backend directory (if separated):

   ```bash
   git clone https://github.com/your-username/movies-app.git
   cd movies-app/backend
   ```
2. Ensure you have JDK 17+ installed and Maven configured.

3. Configure CORS (if necessary):
Check the CorsConfig.java (or use @CrossOrigin annotations in your controllers) to allow requests from http://localhost:5173.

4. Run the Spring Boot application:
```
mvn clean package
mvn spring-boot:run
```
The backend will start on http://localhost:8080.

### Frontend Setup
1. Navigate to the frontend directory:
```
bash
Copy
cd ../frontend
```
2. Install dependencies:
```
bash
Copy
npm install
```
3. Configure Axios (if needed):
Ensure that axiosConfig.js has the correct baseURL (e.g., http://localhost:8080/api/v1).

4. Run the React application:
```
bash
Copy
npm run dev
```
The frontend will start on http://localhost:5173.
