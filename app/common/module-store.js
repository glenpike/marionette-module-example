/* global define */
define([
    'underscore',
    'marionette'
], function(_, $) {

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
                throw new Exception('Can\'t set a Root Module to ', newRoot);
            }

            rootModule = _.extend(newRoot, rootModule);
        },

        getRootModule: function() {
            return rootModule;
        }

    };

    return ModuleStore;
});
