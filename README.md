# restifyBase
A template I use for a restful typescript services. Please use it freely.

## Synopsis

The server is RESTful and accepting/returning JSON as body. The project is prepared for testing, test coverage and lint.

The typescript sorce code is structured as follows:
- index.ts starts the restify server with a base url as input
- config/config.json contain all configurations for the service
- lib/server.ts is where much of the magic happens
    - It sets up the restify plugins to use
    - It defines all endpoints of the server
    - It exports two functions. Initiate and Stop
        - Initiate starts the service
        - Stop is only used for unit-tests on endpoint level to clear 
- utils/logger.ts contains a logging function to keep the code clear of console.log - Please change this method to however you want to log things. 

The project is setup with AirBNB lint rules for eslint.

Scripts (as provided in the package.json):
- npm start - Compiles the typescript project and then starts the server via index.js
- npm run - Starts the javascript distribution via the index.js
- npm compile - Compiles the typescript project to javascript
- npm test - Runs unit tests via mocha
- npm coverage - Runs test coverage analysis via Istanbul
- npm lint - Runs eslint with AirBNB's linting rules
- npm dev - Starts the service with nodemon.

## Code Example

Show what the library does as concisely as possible, developers should be able to figure out **how** your project solves their problem by looking at the code example. Make sure the API you are showing off is obvious, and that your code is short and concise.

## Motivation

There is a lot of overhead when creating a good REST api. This is bootstrapping a lot of the functionallity which I usually tend to want in my projects.

I chose Restify as base just becaus its a bit faster and slimmer than Express, but has all I need.

I chose Typescript since it fits me very well, coming from Swift. I use quite harsh compiler rules, to keep the code tidy.

## Installation

Run **npm install** in terminal to setup the project.
Run **npm run run** in terminal to compile the project and run it. It will create an instance on port 8080.

## API Reference

Depending on the size of the project, if it is small and simple enough the reference docs can be added to the README. For medium size to larger projects it is important to at least provide a link to where the API reference docs live.

## Tests

The project is prepared for unittesting. Both on function level and on endpoint level.

Run **npm test** to run test suite with mocha.
Run **npm coverage** to run test coverage analysis with istanbul.

## Contributors

Please contribute at will! What I really want is suggestions on best practices for making this prouduction ready, fast and secure.

For me it is important that this project remains a shell for any type of json based restful services. Please contribute by suggesting changes according to best practices or industry standards.

## License

This content is released under the (http://opensource.org/licenses/MIT) MIT License.
