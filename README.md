# mern-full-stack-one-many

This is an example of a full stack web application using React, Node.js, Express, MongoDB and Webpack.

This example demonstrates how a one to many relationship can be setup in MongoDB. In this case each lecturer can be teaching many modules.

To get started the data in `lecturers.json` and `modules.json` should be inserted into collections named `lecturers` and `modules` in a MongoDB named `lecturer-modules`.

![Gif of app in action](https://i.imgur.com/O1dfyrX.gif)

It is based on the [Simple React Full Stack Boilerplate project](https://github.com/crsandeep/simple-react-full-stack).

- [mern-full-stack](#mern-full-stack)
  - [Introduction](#introduction)
    - [Development mode](#development-mode)
    - [Production mode](#production-mode)
  - [Quick Start](#quick-start)



## Introduction

[Create React App](https://github.com/facebook/create-react-app) is a quick way to get started with React development and it requires no build configuration. But it completely hides the build config which makes it difficult to extend. It also requires some additional work to integrate it with an existing Node.js/Express/MongoDB backend application.

This is a simple full stack [React](https://reactjs.org/) application with a [Node.js](https://nodejs.org/en/), [Express](https://expressjs.com/) and MongoDB backend. Client side code is written in React and the backend API is written using Express.

### Development mode

In the development mode, we will have 2 servers running. The front end code will be served by the [webpack dev server](https://webpack.js.org/configuration/dev-server/) which helps with hot and live reloading. The server side Express code will be served by a node server using [nodemon](https://nodemon.io/) which helps in automatically restarting the server whenever server side code changes.

### Production mode

In the production mode, we will have only 1 server running. All the client side code will be bundled into static files using webpack and it will be served by the Node.js/Express application.

## Quick Start

```bash
# Clone the repository
git clone https://github.com/IADT-AdvancedJS/mern-full-stack

# Go inside the directory
cd mern-full-stack

# Install dependencies
yarn (or npm install)

# Start development server
yarn dev (or npm run dev)

# ABOVE is sufficient for development
# BELOW ONLY if preparing for production:

# Build for production
yarn build (or npm run build)

# Start production server
yarn start (or npm start)
```
