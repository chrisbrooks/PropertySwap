# REA Code Challenge

I've written this code challenge using react/redux/graphql. To handle client side graphql I have used apollo as a the graphql client which allows me to setup a mock schema for the provided test data. I decided to do this because I really think using graphql gives you total clarity over what data you are looking to use in your react components opposed to just using redux to load in all the RESTful data.

I have also used Redux for managing the error handling toasts so the test demonstrates using both graphql and redux to manage the app life cycle.

The only downside with using mocked graphql data means you're unable to mock the mutations to alter the props, seeing as we don't have a real endpoint to hit I used local state to alter the saved and results data. The alternative to this would be to use the redux life cycle but mixing the graphql client and redux to both handle the same props is not really a good idea.

I have used Webpack as a task manager which incorporates css modules, hot reloading and sass to name a few.

## How to use
To use the app follow the simple step below.

1. Firstly make sure you have node/npm and yarn installed on your system. If you need to do this follow the links below:

[Node/Npm](https://nodejs.org/en/)
[Yarn](https://yarnpkg.com/en/docs/install)

2. Run `yarn install` in your command line.
3. Run `yarn start` in your command line to open the app in your browser pointing to http://localhost:3000/.

## Testing
To run the tests follow the steps below:

1. Run `yarn test` to run the test suite in the command line.
2. Run `yarn test-coverage` to build the jest code coverage tool. To view the results just visit http://localhost:3000/coverage/lcov-report/
