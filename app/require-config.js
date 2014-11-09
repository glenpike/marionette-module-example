/* global require */
require.config({

    waitSeconds: 60,

    paths: {
        jquery: 'vendor/jquery/dist/jquery',
        underscore: 'vendor/underscore/underscore',
        backbone: 'vendor/backbone/backbone',
        marionette: 'vendor/marionette/lib/backbone.marionette',
        mocha: 'vendor/mocha/mocha',
        text: 'vendor/requirejs-text/text'
    },

    shim: {
        'underscore': {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        marionette: {
            deps: ['backbone'],
            exports: 'Backbone.Marionette'
        },
        mocha: {
            exports: 'mocha'
        }
    }
});
