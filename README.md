# Project Title

GameZ

## Overview

Welcome to GameZ, a virtual platform that enables our users to communicate effectivley with Real-Time WebSocket, while building a community with fellow gamers using an amazing Friendship System. The app be paired with an easy to use frontend experience alongside a scalable backend. A local database will hold new and senior profiles, and the best thing is the user will only need a legitimate email address to register. The app will ask the user if they are more of a FPS run and gunner, an athelte that hurdles though each sports game, or if they are a pioneer, ready to explore an open world.

### Problem

Growing up in a military household meant one thing to me: home is where the heart is. Constantly moving from state to state, country to country, made it almost impossible for me to keep friends... almost. Through the power of Microsoft's Party Chat on Xbox systems, I was able to keep in touch with some of my closest friends to this day, but lost a lot of great connections because not everyone had that luxury. Communication is key, and community is paramount for most human beings. It is vital to have a platform that enables these core necessities for kids and adults who dont have any other means to stay in touch, but todays social media is filtered with bots and other undesiresbales. Not GameZ

### User Profile

Anyone is welcome to this app, however it is targeted for any and all gamers. The app uses data inputed by the user to display games some games in that respective genre, to provide a possible new gaming adventure.

### Features

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

- Responsive desgin (mobile, tablet, desktop)
- User Auth
- Game Categories (Shooter, Sports, Adventure-Open World)
- Game Listings (Title, Genre, (maybe cover img) )
- WebSocket-based Chat
- API's

## Implementation

1. Responsive Design:

- Design separate layouts for mobile, tablet, and desktop views.
- Use percentage-based widths and flexible grids for responsive layouts.
- Optimize images and media for different screen resolutions.
- Test thoroughly on various devices to ensure a consistent user experience.

2. User Authentication:

- JSON Web Tokens (JWT) for token-based authentication.
- Collect user details (username, email, password) on the registration form.
- Hash the password before storing it in the database.
- Authenticate users by verifying credentials against stored hashed passwords.
- Issue a JWT upon successful login.
- Secure routes by checking the validity of the JWT.

3. Game Catagories:

- Create a "Game" schema with attributes like title, description, category, cover image URL, etc.
- Set up routes to retrieve games by category.
- Categorize games based on the provided genres (Shooter, Sports, Adventure-Open World).
- Create separate sections or pages for each game category.
- Display games in a visually appealing way with relevant information.

4. Game Listings:

- Include attributes like title, genre, cover image URL, etc., in the "Game" schema.
- Implement routes to retrieve a list of all games.
- Provide options for sorting and filtering the game list.
- Create a visually appealing grid or list layout for game listings.
- Include relevant details like title, genre, and cover image.

5. WebSocket-based Chat:

- Socket.io for WebSocket implementation.
- Set up a WebSocket server using Socket.io.
- Establish a WebSocket connection on the client side.
- Implement a chat interface where users can send and receive messages in real-time.
- Join the appropriate chat room based on the user/game catagory.

6. APIs:

- Axios or Fetch API for making HTTP requests.
- Integrate external APIs like the RAWG Video Games Database API.
- Use API endpoints to fetch game data, details, and images.
- Implement routes to handle API requests from the frontend.
- Perform necessary data processing and error handling.
- Utilize Axios or Fetch API to make asynchronous requests to the backend.
- Display retrieved data on the frontend UI.

### Tech Stack

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.

- Frontend:
  - React.js
  - React Router DOM
  - Axios
  - WebSocket
  - SASS
- Backend:
  - Node.js
  - WebSocket
  - SQL (database)
  - Password Hash (OR JWT Tokens)

### APIs

- RAWG Video Games Database API (for game data)

### Sitemap

- WelcomePage:
  - Includes button to registor plus cool graphics
- HomePage
  - Form for registration (includes type of games a given user selects)
  - Avatar choice
  - Submit
- Profile Page
  - Grid layout of chosen game style
  - Profile details, connections list, online or offline
- ChatPage
  - Place to chat with friends

### Mockups

#### Welcome Page

![](./assests/Welcome.png)

#### Register Page

![](./assests/Register.png)

#### Profile Page

![](./assests/ProfilePage.png)

#### Chat Room Page

![](./assests/ChatRoom.png)

### Data

- Users:
  - User ID, username, email, password hash, avatar, bio
- Games:
  - Game ID, title, description, category, cover image
- Friendships:
  - Sender ID, receiver ID, status (pending, accepted)
- Chat Messages:
  - Message ID, sender ID, receiver ID, content, timestamp

### Endpoints

_Produced with the help of chat gpt_

Authentication Process:
POST /api/auth/register: Register a new user
POST /api/auth/login: Login and obtain JWT token

Users:
GET /api/users/:userId: Get user details
GET /api/users/:userId/friends: Get user's friends
POST /api/users/:userId/friends/:friendId: Send friend request
PUT /api/users/:userId/friends/:friendId: Accept/Reject friend request

Games:
GET /api/games/:categoryId: Get games by category
GET /api/games/:gameId: Get game details
POST /api/games/:gameId/reviews: Add a review

Chat:
GET /api/chat/:categoryId: Get chat messages by category/UserId
POST /api/chat/:categoryId: Send a chat message

### Auth

Does your project include any login or user profile functionality? If so, describe how authentication/authorization will be implemented.

## Roadmap

_produced with the help of chat gpt_

Sprint 1: Planning and Setup

- Define data models and relationships
- Set up the project structure
- Implement user authentication

Sprint 2: Frontend Development

- Create mockups for all pages
- Set up React components and Redux
- Implement game categories and details pages

Sprint 3: Backend Development

- Set up Express routes for users, games, and chat
- Integrate MongoDB for data storage
- Implement WebSocket for real-time chat

Sprint 4: Integration and Testing

- Connect frontend and backend
- Test API endpoints and WebSocket functionality
- Resolve any integration issues

Sprint 5: Finalization

- Implement user profiles and friendship system
- Fine-tune UI and UX
- Conduct thorough testing

Sprint 6: Deployment and Documentation

- Deploy the application
- Document the codebase, API endpoints, and overall architecture
- Prepare for final deliverable

## Nice-to-haves

Your project will be marked based on what you committed to in the above document. Under nice-to-haves, you can list any additional features you may complete if you have extra time, or after finishing.
Like discord, i would like to assign roles to a given user and have the ability to create another server.
as a user, I want to choose between light and dark mode
