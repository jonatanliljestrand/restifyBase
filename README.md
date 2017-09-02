# restifyBase
A base I use for a restify services. Please use it if you want.

Do not clone the project and build a server from this repo. Instead clone it, copy to its own folder or a separate repository and continue from there. This server needs to remain a clean shell for a service.

## Synopsis

The server is RESTful and accepting/returning JSON as body. The project is prepared for testing, test coverage and lint.

The code is structured as follows:
- index.js starts the restify server with a base url as input
- config.json contain all configurations for the service
- lib/server.js is where much of the magic happens
    - It sets up the restify plugins to use
    - It defines all endpoints of the server
    - It exports two functions. Initiate and Stop
        - Initiate starts the service
        - Stop is only used for unit-tests on endpoint level to clear 
- utils/logger.js contains a logging function to keep the code clear of console.log - Please change this method to however you want to log things. 

The project is setup with AirBNB lint rules for eslint.

Scripts (as provided in the package.json):
- npm start - Starts the server via index.js
- npm test - Runs unit tests via mocha
- npm coverage - Runs test coverage analysis via Istanbul
- npm lint - Runs eslint with AirBNB's linting rules
- npm dev - Starts the service with nodemon.

## Code Example

Show what the library does as concisely as possible, developers should be able to figure out **how** your project solves their problem by looking at the code example. Make sure the API you are showing off is obvious, and that your code is short and concise.

## Motivation

A short description of the motivation behind the creation and maintenance of the project. This should explain **why** the project exists.

## Installation

Copy the code to a separate repository or a folder. 

Run **npm install** in terminal to setup the project.

## API Reference

Depending on the size of the project, if it is small and simple enough the reference docs can be added to the README. For medium size to larger projects it is important to at least provide a link to where the API reference docs live.

## Tests

The project is prepared for unittesting. Both on function level and on endpoint level.

Run **npm test** to run test suite with mocha.
Run **npm coverage** to run test coverage analysis with istanbul.

## Contributors

Please contribute at will!

For me it is important that this project remains a shell for any type of json based restful services. Please contribute by suggesting changes according to best practices or industry standards.

## License

This content is released under the (http://opensource.org/licenses/MIT) MIT License.
