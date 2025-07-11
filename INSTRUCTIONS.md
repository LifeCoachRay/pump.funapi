## Introduction to Pump.fun API

The Pump.fun API is designed to provide real-time tracking and management of cryptocurrency tokens. It allows users to monitor updates on new tokens, track personal tokens they hold, and manage token-related information. This API serves as the backend for a web application, with a frontend developed in Angular.

### Key Features

- **Token Tracking**: Keep track of new and existing cryptocurrency tokens.
- **User Management**: Manage users and their associated tokens.
- **Real-Time Updates**: Receive updates on token status and user activities.
- **Web Scraping**: Utilize Cheerio to scrape token data from external websites.
- **HTTP Requests**: Use Axios for making API requests to third-party services.

## How to Use the API

### Setting Up the Environment

1. **Ensure Prerequisites**: 
   - Install Node.js and npm.
   - Set up MongoDB locally or use a cloud-based MongoDB service like MongoDB Atlas.
   - Install Angular CLI for frontend development.

2. **Clone and Install**:
   - Clone the repository:
     ```bash
     git clone https://github.com/yourusername/pump-fun-api.git
     cd pump-fun-api
     ```
   - Install backend and frontend dependencies as described in the Installation section.

3. **Configure Environment Variables**:
   - Create a `.env` file in the root directory with the following:
     ```
     PORT=5000
     MONGODB_URI=your_mongodb_uri
     JWT_SECRET=your_jwt_secret
     ```
   - Replace `your_mongodb_uri` and `your_jwt_secret` with your actual MongoDB URI and a secret key for JWT.

4. **Running the Application**:
   - Start the backend server:
     ```bash
     npm start
     ```
   - Start the Angular frontend:
     ```bash
     cd frontend
     ng serve
     ```

### API Endpoints and Usage

#### Base URL
All API endpoints are prefixed with the base URL: `http://localhost:5000/api`

#### User Management

- **Create a User**:
  - **Endpoint**: `POST /users`
  - **Description**: Register a new user.
  - **Request Body**:
    ```json
    {
      "username": "string",
      "password": "string"
    }
    ```
  - **Response**: Returns the created user object.

- **Authenticate/User Login**:
  - **Endpoint**: `POST /users/login`
  - **Description**: Log in a user and receive a JWT token.
  - **Request Body**:
    ```json
    {
      "username": "string",
      "password": "string"
    }
    ```
  - **Response**: Returns a JWT token for authentication.

#### Token Management

- **Get All Tokens**:
  - **Endpoint**: `GET /tokens`
  - **Description**: Retrieve all available tokens.
  - **Response**: Returns an array of token objects.

- **Add a New Token**:
  - **Endpoint**: `POST /tokens`
  - **Description**: Add a new token to the database.
  - **Request Body**:
    ```json
    {
      "name": "string",
      "symbol": "string",
      "initialSupply": "number"
    }
    ```
  - **Response**: Returns the created token object.

#### Example Usage

To use the API, you can make HTTP requests using tools like Postman, cURL, or integrate it into your application using Axios or Fetch API in the frontend.

##### Example cURL Request to Create a User:

```bash
curl -X POST http://localhost:5000/api/users \
-H "Content-Type: application/json" \
-d '{"username": "john_doe", "password": "securepassword"}'
```

### Security Measures

- **Authentication**: Use JSON Web Tokens (JWT) for secure user authentication.
- **HTTPS**: It's recommended to run the API over HTTPS in production for secure data transmission.
- **Input Validation**: Ensure input validation and sanitization are implemented to prevent common security vulnerabilities like SQL injection and XSS.

By following these instructions, you can effectively set up, use, and integrate the Pump.fun API into your applications. Customize and expand the API to suit your specific needs and project requirements.
