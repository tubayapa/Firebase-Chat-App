# React Firebase Chat App
This is a real-time chat application built using React, Firebase, and Sass. It allows users to log in with their Google accounts, select chat rooms, and send messages in real-time.

## Live

https://firebase-chat-app-woad.vercel.app

## Features:
- **Authentication**: Users can log in using their Google accounts via Firebase authentication.
- **Room Selection**: Users can select the chat room they want to join.
- **Real-time Messaging**: Messages are sent and received in real-time using Firebase Firestore.
- **Responsive Design**: The app is designed to be responsive and work seamlessly across different devices.

# Technologies Used:
- **React**: Frontend development is done using React, a popular JavaScript library for building user interfaces.
- **Firebase**: Firebase is used for authentication and real-time data storage.
- **Sass**: Sass is used for styling, providing a more organized and maintainable CSS codebase.

# Key Components:
- **AuthPage**: Handles user authentication using Firebase's Google sign-in popup.
- **RoomPage**: Allows users to select the chat room they want to enter.
- **ChatPage**: Displays the selected chat room and facilitates real-time messaging.
- **Message** Component: Renders individual chat messages, distinguishing between the current user's messages and others'.
