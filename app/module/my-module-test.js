/* global define, describe, before, beforeEach, afterEach, it, expect */
define([
    'jquery',
    'backbone',
    'marionette',
    'common/module-store',
    'module/my-module'
], function ($, Backbone, Marionette, ModuleStore, MyModule) {
    /**
     *  Simple unit test example for MyModule showing that
     *  the module can be tested with a skeleton Marionette.Application
     *  instance whilst it is defined independently of any App.
     */
     'use strict';

    describe('MyModule Test', function () {
        var App;

        before(function() {
            App = new Backbone.Marionette.Application({});
            App.start();
            ModuleStore.setRootModule(App);
        });

        beforeEach(function() {
            App.MyModule.start();
        });


        afterEach(function() {
            App.MyModule.stop();
        });

        it('App should hold a reference to MyModule', function () {
            expect(App.MyModule).to.eql(MyModule);
        });

        it('should render a module view', function () {
            var view = App.MyModule.API.getView();
            /*jshint -W030 */
            expect(view.$el).to.exist;
            /*jshint +W030 */
        });

        it('should render the title', function() {
            var testStr = 'Simple Marionette Module',
                view = App.MyModule.API.getView();

            view.render();
            view.triggerMethod('show');

            expect($('h1', view.$el).text()).to.contain(testStr);
        });
    });
});
