## <b>WhatsApp clone build using MERN stack</b>

#### 🧾 Description

Its build using MERN stack and uses <a href='https://socket.io/'>socket.io</a> for realtime messaging, online statuses, typing indicators, notifications etc.

#### ✨ Features

- [x] User authentication.
- [x] Search for users to chat with.
- [x] Chat in realtime with <a href='https://socket.io/'>socket.io</a>.
- [x] User's realtime online/offline status in private chat.
- [x] Responsive upto a limit.
- [x] And most importantly 😎 Feels just like whatsapp-web (or Desktop app).

#### ⚙ Tools and Technologies used

###### Frontend

1. [React.js](https://reactjs.org/)
2. [Material-ui](https://mui.com/)

###### Backend

1. [Node.js](https://nodejs.org/en/)
2. [Express.js](https://expressjs.com/)
3. [MongoDB](https://www.mongodb.com/)
4. [Socket.io](https://socket.io/)
5. [Docker](https://www.docker.com/)

#### 🛠 Installation and setup

You can run this application either using Docker or traditional npm setup.

##### Using Docker:

1. Make sure you have Docker and Docker Compose installed on your machine.
2. Clone the repo to your local machine.
3. Create a .env file inside the server folder with your MongoDB credentials:
   ```
   DB_USERNAME=<your-db-username>
   DB_PASSWORD=<your-db-password>
   ```
4. Run the application using Docker Compose:
   ```bash
   cd server
   docker compose up
   ```
   This will start all the required services (backend, frontend, and socket) in containers.

##### Traditional Setup:

1. Clone the repo to your local machine.
2. Install the required dependency for server using :

   ```javascript
   cd server
   npm install --legacy-peer-deps
   ```

3. Install the required dependency for client using :

   ```javascript
   cd client
   npm install --legacy-peer-deps
   ```

4. Install the required dependency for socket using :

   ```javascript
   cd socket
   npm install --legacy-peer-deps
   ```

5. Start the express server using :

   ```javascript
   npm start
   ```

6. Start the react development server using:

   ```javascript
   cd client
   npm start
   ```

7. Start the socket using:

   ```javascript
   cd socket
   npm start
   ```

8. Open your web browser and visit http://localhost:3000 to access the application.

<p align='center'>
<img src='./images/login-pannel.png' >
<br>
<br>
<img src='./images/authentication.png' >
<br>
<br>
<img src='./images/chat-and-user-frame.png' >
<br>
<br>
<img src='./images/chat.png' >
<br>
<br>
<img src='./images/profile-button.png' >
<br>
<br>
<img src='./images/user-profile.png' >
</p>

<!-- CONTACT -->

## Contact

<a target="_blank" href="https://www.linkedin.com/in/vinayak-chittora/">
 <img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />
</a>
<a target="_blank" href="mailto:vinayakchittora31@gmail.com">
 <img src="https://img.shields.io/badge/gmail-D14836?&style=for-the-badge&logo=gmail&logoColor=white" />
</a>

<br>
<br>
<br>

<p align='center'>
(If you liked the project, give it star 😃)
</p>
