marionette-module-example
============

A very simple demo of a Backbone Marionette application
using a Module.
The conventional way of defining Modules with Application.module has been deliberately
avoided because we are using RequireJS and want to be able to define modules
without requiring App.
This allows us to unit-test each module in isolation.

#Usage

Clone the repository, run

    npm install

    bower install

Open app/index.html in your browser.

To view the unit tests, open tests/index.html in your browser.

#Information

Instead of using Application.module to create our Marionette Module definitions
(http://marionettejs.com/docs/marionette.module.html#basic-usage) an intermediary
(app/common/module-store.js) is used which allows us to separate development and
testing of modules.

The use of RequireJS can compound problems with the Application dependency of
Modules, which was why this method was created - I had problems getting unit
tests to work without the main Application, which was not something we wanted
to run for testing.

The application and tests use a shared RequireJS config which was made after
reading (http://bocoup.com/weblog/effective-unit-testing-with-amd/)

Tests are done using Mocha + Chai.

## License

MIT © [Glen Pike](http://glenpike.co.uk)
