# Socket Server

This project is a simple socket server application built using Node.js and Socket.IO. It allows real-time communication between clients through a chat interface.

## Project Structure

```
socket-server
├── src
│   ├── index.js        # Entry point of the socket server application
│   └── chat.js         # Manages chat functionalities
├── package.json        # Configuration file for npm
└── README.md           # Documentation for the project
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd socket-server
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the socket server, run the following command:
```
npm start
```

The server will start and listen for incoming socket connections.

## Features

- Real-time chat functionality
- Handles multiple clients
- Broadcast messages to all connected clients

## License

This project is licensed under the MIT License.