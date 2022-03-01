# Bowling calculator

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
## General info
This project is a simple solution to calculate the score for a bowling game. 
After each frame is completed (meaning two rolls where added) a request to the server will be made to calculate the current score.

## Technologies
Project is created with:
* Java spring for server side
* React redux for client side
* Maven
* Typescript

## Setup
To run this project:

* Build the server side by running the following:
```
$ mvn clean install
 Then run the serverApplication in the server/src/main/java/com/code/server
```

* Build the client side by running the following:

```
$ cd ui
$ npm install
$ npm start
```

Now the project should be running on http://localhost:3000/

