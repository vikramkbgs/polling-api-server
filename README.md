# polling-api-server

The Polling API is a simple RESTful API that allows users to create and manage polls. It provides endpoints to create questions, add options to questions, vote on options, and view poll details.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create a new question with options
- Add options to an existing question
- Delete a question
- Delete an option from a question
- Vote on an option
- View a question with its options and vote count

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

## Getting Started

To get started with the Polling API, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/your-username/polling-api.git
   ```
2. Install the dependencies:
   ```
   cd polling-api
   npm install
   ```
3. Set up the environment variables:
- Create a `.env` file in the root directory.
- Define the following variables in the `.env` file:
  ```
  PORT=3000
  MONGODB_URI=mongodb://....
  ```
- Adjust the values as per your configuration.
4. Start the server:
  ```
  npm start
  ```

# Polling API Documentation

The Polling API provides endpoints to create and manage polls.

## Base URL

The base URL for all API endpoints is: `http://localhost:3000`

## Endpoints

### Create a Question

- Endpoint: `/questions/create`
- Method: POST
- Description: Create a new question with options.
- Request Body:
  ```json
  {
    "title": "Which is your favorite programming language?",
    "options": [
      {
        "text": "JavaScript"
      },
      {
        "text": "Python"
      }
    ]
  }
- Response:
- Status: 200 OK
- Body:
  ```json
  {
  "message": "Question created successfully",
  "question": {
    "id": "123",
    "title": "Which is your favorite programming language?",
    "options": [
      {
        "id": "456",
        "text": "JavaScript",
        "votes": 0
      },
      {
        "id": "789",
        "text": "Python",
        "votes": 0
      }
    ]
  }
}
```
### Add Options to a Question

- **Endpoint:** `/questions/:id/options/create`
- **Method:** POST
- **Description:** Add options to an existing question.
- **Request Parameters:**
  - `id` (required): ID of the question.
- **Request Body:**
  ```json
  {
    "text": "Java"
  }
**Response:**

- **Status:** 200 OK
- **Body:**
  ```json
  {
    "message": "Option added successfully",
    "option": {
      "id": "987",
      "text": "Java",
      "votes": 0
    }
  }

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

