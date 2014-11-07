/* global require */
require.config({
    baseUrl: '.',

    waitSeconds: 60,

    paths: {
        jquery: 'vendor/jquery/dist/jquery',
        underscore: 'vendor/underscore/underscore',
        backbone: 'vendor/backbone/backbone',
        marionette: 'vendor/marionette/lib/backbone.marionette'
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
        }
    }
});

require([
  'app'
],

function(App) {
    App.start();
});
