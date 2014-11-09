/* global define */
define([
    'underscore',
    'marionette'
], function(_, Marionette) {

    'use strict';

    /**
     *  ModuleStore is a drop-in replacement for
     *  Marionette.Application.module to allow development of standalone
     *  Modules which can be used with RequireJS and defined without
     *  the dependency on an Application instance.
     *
     *  The module function is borrowed from Marionette.Application
     *  (https://github.com/marionettejs/backbone.marionette/blob/master/src/marionette.application.js)
     *  and amended to use the singleton rootModule variable for storing
     *  definitions if modules are loaded without the Application.
     *  An Application instance can make itself the rootModule using
     *  @see setRootModule
     *  This allows us to unit test modules with a dummy App instance.
     */
    var rootModule = rootModule || {};

    rootModule.submodules = rootModule.submodules || {};

    var ModuleStore = {

        module: function(moduleNames, moduleDefinition) {
            var ModuleClass = Marionette.Module.getClass(moduleDefinition);

            var args = Array.prototype.slice.call(arguments);
            args.unshift(rootModule);

            return ModuleClass.create.apply(ModuleClass, args);
        },

        setRootModule: function(newRoot) {
            //attach all of our modules to the newRoot and
            //then overwrite rootModule with this variable.
            if(!newRoot) {
                throw 'Can\'t set a Root Module to ' + newRoot;
            }

            rootModule = _.extend(newRoot, rootModule);
        },

        getRootModule: function() {
            return rootModule;
        }

    };

    return ModuleStore;
});
