## What is this for?
This is a Simple User Registration & Login systems app done with Node.js Framework using MongoDB as the data store, Express as the routing system. Simple web app built to create user profile,login, and sign out. Routes handle using Express and database powered by MongoDb and connected to the Node app via mongoose. Front end powered by React.
## Getting Started

### Deployment
This Project is **[Live](riomart.netlify.app)** on: 🌍 **riomart.netlify.app**

## Running the tests

### • Registration Form:
Allows the user to register their account by filling their Email, Username, Password.

### • Login Form:
If the user has been registered on the app, can login by passing the credentials.


### • Contact us page :
U can contact us through this page.For this U have to put your email adress and  send us a message what do u want to


### DataBase:
Here we use **[MongoDB ](https://www.mongodb.com/cloud/atlas)** as the database. Here we have two collection created, named as:
- users.
- Contact us.

A Collection(*Users*) is populated with the user's credentials.


A Collection(*contact us*) is created which stores the users message .

## Prerequisites
Tools that we need to run this app:

- *[Node.js](https://nodejs.org/en/)***
- *[Node Package Manager (npm)](https://www.npmjs.com/get-npm)***
- *[MongoDB ](https://www.mongodb.com/cloud/atlas)***

## Installing

npm install

## Connection to DataBase Access

Create a .env file

DB = "Your MongoDb URI"

JWTPRIVATEKEY = "jwt secret key"

PORT = port number

## To Run the App

Server :   npm run dev 

CLient :  npm start 

The server will start Running on
+ http://localhost: {PORT} /

Client : + http://localhost:3000/

