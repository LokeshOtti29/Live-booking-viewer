# Live Bookings Viewer

A real-time full-stack web application that simulates and displays live venue bookings using **Socket.IO**, **Express.js**, and **JavaScript**. This tool allows administrators to view incoming bookings instantly without any page refresh.
## Features

- Real-time updates using WebSockets (Socket.IO)
- Mock booking generator every 5 seconds
- Displays new bookings at the top dynamically
- Clean, scrollable card-based UI
- Lightweight stack without React or databases

## Tech Stack

1) **Backend**  - Node.js, Express.js, Socket.IO 
2) **Frontend**  - HTML, CSS, JavaScript 
3) **Dev Tools** - Nodemon, CORS     

## Getting Started

## Prerequisites
1) Node.js and npm installed
2) Live Server extension

## Backend Setup (Port 3000)
1) Install dependencies:
   - npm install
2) Start the backend server:
   - npm start
3) Backend runs at: http://localhost:3000
## Frontend Setup (Port 5500 or any Live Server port)
1) Open with Live Server
   - This will likely start the frontend at: http://127.0.0.1:5500
2) In Frontend/index.js, connect to the backend like this:
   - const socket = io("http://localhost:3000");
     
