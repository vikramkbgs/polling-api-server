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
  PORT=3...
  MONGODB_URI=mongodb://....
  ```
- Adjust the values as per your configuration.
4. Start the server:
  ```
  npm start
  ```

## API Documentation

For detailed information about the API endpoints and usage, please refer to the [API Documentation](API_DOCUMENTATION.md).

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

