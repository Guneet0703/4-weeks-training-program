# Day 21 - Introduction to Express.js

## Overview

The twenty-first day of the MERN Stack training focused on **Express.js**, a lightweight and flexible web application framework built on top of Node.js. The session introduced the process of creating a web server, handling client requests, defining routes, and sending responses using Express. Basic middleware concepts were also discussed. These topics provide the foundation for building RESTful APIs and server-side applications in the MERN Stack.

---

## Topics Covered

### 1. Introduction to Express.js

Studied Express.js, a fast, lightweight, and minimal web framework for Node.js that simplifies server-side application development. Learned how Express provides built-in features for routing, middleware, and request handling, making backend development easier and more efficient.

---

### 2. Installing Express

Learned how to install Express in a Node.js project using npm and include it in the application.

**Command Practiced:**

```bash
npm install express
```

Imported Express into the project using:

```javascript
const express = require("express");
```

---

### 3. Creating an Express Server

Learned how to initialize an Express application and create a web server.

**Example:**

```javascript
const app = express();

app.listen(3000, () => {
    console.log("Server is running...");
});
```

Also understood the purpose of the `listen()` method and port numbers in web applications.

---

### 4. Routing in Express

Studied routing, which defines how the server responds to client requests for different URLs and HTTP methods.

**Methods Covered:**

- `app.get()`
- `app.post()`

Learned how these methods handle different types of HTTP requests.

---

### 5. Request and Response Objects

Learned about the request (`req`) and response (`res`) objects provided by Express.

**Response Methods Practiced:**

- `res.send()`
- `res.json()`

These methods are used to send text, HTML, or JSON data back to the client.

---

### 6. Middleware (Introduction)

Studied middleware functions, which execute before the final request handler and are commonly used for logging, authentication, and request processing.

**Example:**

```javascript
app.use((req, res, next) => {
    console.log("Request Received");
    next();
});
```

Understood the purpose of the `next()` function in passing control to the next middleware.

---

## Task Assigned

No specific programming task was assigned during the session. The instructor encouraged us to create a basic Express server, define multiple routes, and practice sending responses using different HTTP methods.

---

## Work Done

- Installed Express using npm.
- Created a basic Express server.
- Started the server on a specified port.
- Implemented GET and POST routes.
- Practiced sending text and JSON responses.
- Explored the basic use of middleware.
- Successfully tested the application using a web browser and Postman.

---

## Practical Implementation

| Implementation | File |
|----------------|------|
| Express Server | `server.js` |
| Routing Example | `routes.js` |
| Middleware Example | `middleware.js` |

---

## Learning Outcomes

- Understood the purpose and advantages of Express.js.
- Learned how to install and configure Express in a Node.js project.
- Gained practical experience in creating an Express server.
- Learned how routing handles different client requests.
- Understood the role of request and response objects.
- Gained a basic understanding of middleware and its usage in Express applications.

---

## Conclusion

The twenty-first day introduced the fundamentals of Express.js and its role in backend web development. By learning how to create a server, define routes, handle client requests and responses, and use middleware, I developed a strong foundation for building RESTful APIs and full-stack MERN applications. These concepts will be expanded further in upcoming sessions with advanced routing, middleware, and database integration.