# Tarea Final Readme

## Description
This project is a full-stack web application constructed with both FrontEnd and BackEnd technologies. The main features of the site include user authentication, product browsing, shopping cart functionality, and the ability to save and review favorite products.

## Technologies and Libraries

### FrontEnd
- React
- React Router
- Zustand
- Tailwind CSS

### BackEnd
- Express
- JWT (JSON Web Tokens)
- Mongoose

## Main Site Features
- **Authentication**: Users can sign in using JWT Tokens. User data is securely stored in MongoDB.
- **Shopping Cart**: When the quantity of a product in the cart is changed, it is dynamically updated to reflect the current stock availability. When an order is placed, the stock quantity of the products is updated in the database, ensuring accurate inventory management.
- **Order Management**: Order details are saved in the database, including information about the products, quantities, and user details. This allows for easy tracking and management of orders.
- **Favorites**: After logging in, users can save products to their favorites list, which can be reviewed on a personal favorites page. The favorites list is saved in MongoDB and can be accessed from any device upon user login.
- **Responsive Design**: The site is fully adapted for mobile devices.

## Installation

### FrontEnd
1. Navigate to the `client` directory.
2. Install dependencies:
   
npm install
   
3. Start the development server:
   
npm run dev
   
The client will be available at: http://localhost:5173/

### BackEnd
1. Navigate to the `server` directory.
2. Install dependencies:
   
npm install

3. Create a .env file in the server directory with the following content (example):
   
MONGO_URL=your_mongo_connection_string
TOKEN_SECRET=your_jwt_secret
PORT=3050


4. Start the server:
   
node index.js
The server will be available at: http://localhost:3050/

  ## Running the Project
To run the project, you need to start both the front-end and back-end servers. Open two terminal windows or tabs and run the following commands:

# Terminal 1: Start the FrontEnd

cd client
npm run dev

# Terminal 2: Start the BackEnd

cd server
node index.js

## Configuration
Ensure you have MongoDB running and update the connection string in your .env file.
Add your JWT secret to the .env file.
## Scripts
npm run dev: Starts the development server for the client.
node index.js: Starts the server for the backend.

## License
This project is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).

You are free to:
- Share: copy and redistribute the material in any medium or format
- Adapt: remix, transform, and build upon the material for any purpose, even commercially.

Under the following terms:
- Attribution: You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.

## Authors
Sergey Shpak aсa Sergio-916