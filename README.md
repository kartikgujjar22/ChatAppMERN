# ChatAppMERN

ChatAppMERN is a real-time online chatting application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This app enables users to communicate seamlessly with features such as authentication, real-time messaging, and a responsive design.

---

## Features

- **User Authentication**: Secure user login and registration.
- **Real-Time Messaging**: Real-time communication between users powered by WebSocket (Socket.IO).
- **Responsive UI**: Designed to work on desktops, tablets, and mobile devices.
- **Database Integration**: MongoDB for storing user data and chat messages.
- **RESTful APIs**: Backend APIs built with Express.js for handling user and message operations.

---

## Folder Structure

### Parent Folder: `ChatAppMERN`
```
ChatAppMERN
├── backend
│   ├── config
│   │   └── db.js          # MongoDB connection setup
│   ├── controllers
│   │   └── userController.js  # Controller for user-related operations
│   ├── models
│   │   └── userModel.js       # Mongoose schema for users
│   ├── routes
│   │   └── userRoutes.js      # Routes for user authentication
│   ├── server.js          # Backend entry point
│   ├── .env               # Environment variables
│   └── package.json       # Backend dependencies and scripts
│
├── frontend
│   ├── src
│   │   ├── App.js          # Main React component
│   │   ├── index.js        # Entry point for React
│   │   ├── components
│   │   │   └── Chat.js     # Chat interface
│   │   └── pages
│   │       └── Login.js    # Login page
│   ├── public
│   └── package.json       # Frontend dependencies and scripts
│
└── README.md               # Project documentation
```

---

## Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/kartikgujjar22/ChatAppMERN.git
cd ChatAppMERN
```

### 2. Backend Setup
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add the following:
   ```env
   PORT=5000
   MONGO_URI=your_mongo_database_uri
   JWT_SECRET=your_jwt_secret_key
   ```
4. Start the backend server:
   ```bash
   npx nodemon server.js
   ```

### 3. Frontend Setup
1. Navigate to the `frontend` folder:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm start
   ```

---

## Git Workflow

### Initial Setup
```bash
git init
git remote add origin https://github.com/kartikgujjar22/ChatAppMERN.git
git branch -M main
git pull origin main
```

### Add Changes
```bash
git add .
git commit -m "Initial commit with backend and frontend setup"
git push -u origin main
```

### Collaborating with Teammates
- Use feature branches for development:
  ```bash
  git checkout -b feature/feature-name
  ```
- Push changes:
  ```bash
  git add .
  git commit -m "Add feature-name"
  git push origin feature/feature-name
  ```
- Create pull requests to merge branches.

---

## License

This project is licensed under the MIT License. Feel free to use and modify the code.

---

## Contributors

- **Kartik Gujjar** (https://github.com/kartikgujjar22)
- Open for additional contributors!

---

## Future Improvements

- Add support for group chats.
- Implement advanced authentication using OAuth.
- Enhance UI with animations and better styling.
- Add typing indicators and read receipts.
- Implement message search functionality.

---

Feel free to contribute to this project by submitting issues or pull requests. Happy coding!

