# Day 22 - Building REST APIs with Express.js

## Overview

The twenty-second day of the MERN Stack training focused on developing **RESTful APIs** using Express.js. The session introduced REST architecture, HTTP request methods, route handling, Express Router, and request body parsing. Practical implementation included creating API endpoints for performing CRUD (Create, Read, Update, Delete) operations and testing them using Postman. These concepts are fundamental for building back-end services that communicate efficiently with front-end applications.

---

## Topics Covered

### 1. Introduction to REST APIs

Studied REST (Representational State Transfer), an architectural style used for designing web services. Learned how REST APIs enable communication between client applications and servers using standard HTTP methods and resource-based URLs.

---

### 2. HTTP Request Methods

Learned the purpose of different HTTP methods used in RESTful applications.

**Methods Covered:**

- `GET` – Retrieve data
- `POST` – Create new data
- `PUT` – Update existing data
- `DELETE` – Remove data

Understood how each HTTP method performs a specific operation on server resources.

---

### 3. Creating API Routes

Learned how to define API endpoints using Express route methods.

**Example:**

```javascript
app.get("/users", (req, res) => {
    res.send("User List");
});
```

Practiced creating multiple routes for different HTTP methods.

---

### 4. Express Router

Studied Express Router and understood how it helps organize application routes into separate files, making projects more modular, maintainable, and easier to manage.

**Example:**

```javascript
const router = express.Router();
```

---

### 5. Request Body Handling

Learned how to receive JSON data sent by the client using Express middleware.

**Middleware Used:**

```javascript
app.use(express.json());
```

This middleware parses incoming JSON request bodies and makes the data available through `req.body`.

---

### 6. API Testing

Practiced testing API endpoints using Postman by sending GET, POST, PUT, and DELETE requests and verifying the server responses.

---

## Task Assigned

No specific programming task was assigned during the session. The instructor encouraged us to build REST API endpoints using different HTTP methods, organize routes using Express Router, and test all endpoints using Postman.

---

## Work Done

- Created REST API endpoints using Express.js.
- Implemented GET, POST, PUT, and DELETE operations.
- Organized routes using Express Router.
- Parsed incoming JSON data using Express middleware.
- Tested all API endpoints successfully using Postman.

---

## Practical Implementation

| Implementation | File |
|----------------|------|
| REST API Server | `server.js` |
| Express Router | `routes.js` |
| CRUD API Example | `crud-api.js` |

---

## Learning Outcomes

- Understood the concept and architecture of RESTful APIs.
- Learned the purpose of different HTTP request methods.
- Gained practical experience in building API endpoints using Express.js.
- Learned how to organize routes using Express Router.
- Understood how JSON request data is processed on the server.
- Improved practical knowledge of API testing using Postman.

---

## Conclusion

The twenty-second day provided practical experience in developing RESTful APIs using Express.js. Through the implementation of CRUD operations, Express Router, JSON request handling, and API testing with Postman, I developed a solid understanding of server-side API development. These concepts form the foundation for integrating Express.js with MongoDB and connecting backend services to React applications in the MERN Stack.