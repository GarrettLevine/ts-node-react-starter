## Typescript React/Node project

A small project skeleton for a typscript node server with react typescript front-end

To start the project:

1. `yarn install`
2. `npm run start`
3. go to your `localhost:3000`

### What's in this project?
#### Front-End
* React
* Redux
* Webpack
    * typescript compiler
    * SCSS compiler

### Back-end
* Node
* ExpressJS
* Typescript compilation

### How does this project work?

The front end bundle is compiled with webpack and uses a webpack dev server which proxys to the port at which the node server is running. The node server serves up the react bundle to allow for easy non-cors issues for your project.
