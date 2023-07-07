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

## Base URL

`http://localhost:3000` is the base URL for all API endpoints.

## Endpoints

### Create a Question

- **Endpoint:** `/questions/create`
- **Method:** POST
- **Description:** Create a new question with options.
- **Request Body:** JSON object containing the question title and options.
- **Response:** 200 OK with the created question details.

### Add Options to a Question

- **Endpoint:** `/questions/:id/options/create`
- **Method:** POST
- **Description:** Add options to an existing question.
- **Request Parameters:** `id` (question ID)
- **Request Body:** JSON object containing the option text.
- **Response:** 200 OK with the added option details.

### Delete a Question

- **Endpoint:** `/questions/:id/delete`
- **Method:** DELETE
- **Description:** Delete a question.
- **Request Parameters:** `id` (question ID)
- **Response:** 200 OK with a success message.

### Delete an Option

- **Endpoint:** `/options/:id/delete`
- **Method:** DELETE
- **Description:** Delete an option.
- **Request Parameters:** `id` (option ID)
- **Response:** 200 OK with a success message.

### Vote on an Option

- **Endpoint:** `/questions/:questionId/options/:optionId/add_vote`
- **Method:** POST
- **Description:** Vote on an option of a question.
- **Request Parameters:** `questionId` (question ID), `optionId` (option ID)
- **Response:** 200 OK with a success message.

### View a Question

- **Endpoint:** `/questions/:id`
- **Method:** GET
- **Description:** View a question and its options.
- **Request Parameters:** `id` (question ID)
- **Response:** 200 OK with the question details.


## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

