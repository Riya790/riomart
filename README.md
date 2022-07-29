## Rio Mart
This is a Simple User Registration & Login systems app done with Node.js Framework using MongoDB as the data store, Express as the routing system. Simple web app built to create user profile,login, and sign out. Routes handle using Express and database powered by MongoDb and connected to the Node app via mongoose. Front end powered by React.
## Getting Started

### Deployment
This Project is **[Live](https://riomart.netlify.app/)** on: 🌍 **https://riomart.netlify.app/**

## Running the tests

### • Registration Form:
Allows the user to register their account by filling their Email, Username, Password.

![image](https://user-images.githubusercontent.com/72391917/181826743-9b41eef4-cfee-4fe7-b1ad-9702e1850d3c.png)


### • Login Form:
If the user has been registered on the app, can login by passing the credentials.

![image](https://user-images.githubusercontent.com/72391917/181826782-da9f209b-3e3d-4d33-8490-ab7d37c19ee2.png)



### • Contact us page :
U can contact us through this page.For this U have to put your email adress and  send us a message what do u want to

![image](https://user-images.githubusercontent.com/72391917/181826884-bbb3161f-0894-4b09-ac3c-7c7632e7367f.png)



### DataBase:
Here we use **[MongoDB ](https://www.mongodb.com/cloud/atlas)** as the database. Here we have two collection created, named as:
- users.
- Contact us.

A Collection(*Users*) is populated with the user's credentials.

![image](https://user-images.githubusercontent.com/72391917/181827313-122a7361-f130-4175-b9d0-3171c60654ca.png)



A Collection(*contact us*) is created which stores the users message .

![image](https://user-images.githubusercontent.com/72391917/181827429-f93ed998-2584-4115-abf8-99f87a6b4a56.png)


## Prerequisites
Tools that we need to run this app:

- *[Node.js](https://nodejs.org/en/)*
- *[Node Package Manager (npm)](https://www.npmjs.com/get-npm)*
- *[MongoDB ](https://www.mongodb.com/cloud/atlas)*

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

