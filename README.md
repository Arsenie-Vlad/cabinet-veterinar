# “VetCare” Veterinary Clinic - Full-Stack Application

VetCare is a web application developed for a veterinary clinic. The purpose of the project is to provide the clinic with a modern online presence, where visitors can find information about the services, the medical team and read reviews from other clients.

The application also includes an account system. Users can register, log in and leave reviews about their experience at the clinic.

The project is divided into two main parts:

* **Frontend** - the visual part of the application, built with React.
* **Backend** - the server-side part, built with Spring Boot.

The two parts communicate with each other through a REST API.

---

## Technologies Used

### Frontend

* **React.js** - used for building the application interface.
* **Vite** - used for quickly starting and running the React project.
* **Tailwind CSS v4** - used for styling the pages and creating a responsive design.
* **React Router DOM** - used for navigating between pages without reloading the browser.
* **Lucide React** - used for the icons in the interface.

### Backend

* **Java 17+**
* **Spring Boot 3** - used for building the server and the API.
* **Spring Security** - used for security, access rules and CORS configuration.
* **BCrypt Password Encoder** - used for encrypting passwords before saving them in the database.
* **Spring Data JPA / Hibernate** - used for working with the database.

### Database

* **MySQL** - running locally through XAMPP.
* Port used in the project: **3307**.

---

## Main Features

### 1. Presentation Page

The application has a main page where information about the clinic, the services offered and the veterinary medical team is presented.

### 2. Authentication System

Users can:

* create an account;
* log in;
* stay logged in by saving the session in `localStorage`;
* log out.

After authentication, the navigation bar updates automatically and displays the message:

```text
Hello, Name
```

### 3. Review System

All visitors can view existing reviews.

To add a review, the user must be authenticated. After submitting a review, it is saved in the database and displayed in the application.

---

## Installation and Local Setup

To run the project on your computer, three components must be started:

1. the MySQL database;
2. the Spring Boot backend server;
3. the React frontend application.

---

## Step 1: Database Configuration

1. Install and start **XAMPP**.
2. Start the **MySQL** module.
3. Open **phpMyAdmin**:

```text
http://localhost/phpmyadmin
```

4. Create a new database named:

```text
veterinar_db
```

5. Check the MySQL port.

In this project, the backend is configured to use the port:

```text
3307
```

If MySQL runs on the default port `3306`, change the port in the file:

```text
backend/src/main/resources/application.properties
```

Replace `3307` with `3306`.

---

## Step 2: Starting the Backend

Open a terminal and enter the backend folder:

```bash
cd backend
```

Start the Spring Boot server:

```bash
./mvnw spring-boot:run
```

On Windows, you can use:

```bash
mvnw.cmd spring-boot:run
```

The backend will run on:

```text
http://localhost:8080
```

At startup, Hibernate will automatically create the required tables in the database, such as `users` and `reviews`.

---

## Step 3: Starting the Frontend

Open a second terminal and enter the frontend folder:

```bash
cd frontend
```

Install the project dependencies:

```bash
npm install
```

Start the React application:

```bash
npm run dev
```

After starting, the terminal will display a link similar to:

```text
http://localhost:5173
```

Open this link in your browser to use the application.

---

## Conclusion

VetCare is a simple and functional Full-Stack application that combines a modern React frontend with a Spring Boot backend. The project allows the presentation of a veterinary clinic, user authentication and review management through a MySQL database.
