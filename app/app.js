define([
    'underscore',
    'jquery',
    'backbone',
    'marionette',
    'common/module-store'
], function(_, $, Backbone, Marionette, ModuleStore) {

    var App = new Backbone.Marionette.Application({ });

    App.addRegions({
        app: '#app'
    });


    function startModule() {
        require(['module/my-module'], function(Module) {
            //We start it here
            Module.start();

            App.app.show(Module.API.getView());

            //Just for demonstration purposes - do this somewhere else?
            ModuleStore.setRootModule(App);
            console.log("App.submodules: ", App.submodules);
        });
    }

    App.addInitializer(function() {
        console.log("App.submodules before load: ", App.submodules);
        //ModuleStore.setRootModule(App);
    });

    App.on('start', function() {
        startModule();
    });

    return App;

});
