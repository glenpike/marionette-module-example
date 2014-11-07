define([
    'underscore',
    'marionette',
    'common/module-store'
], function(_, Marionette, ModuleStore) {

    var MyModule = ModuleStore.module('MyModule', function() {
        var myModule = this,

        ItemView = Marionette.ItemView.extend({
            template: _.template($('#item-template').html()),
            tagName: 'li',

            trigger: {
                'click': 'item:click'
            }
        }),

        CollectionView = Marionette.CompositeView.extend({
            template: _.template($('#list-template').html()),
            childView: ItemView,
            childViewContainer: 'ul.email-list',

            collectionEvents: {
                'change': 'render'
            }
        }),

        dummyCollection = new Backbone.Collection([
            { name: 'Han Solo', email: 'han@mos-eisley.tat'},
            { name: 'Chewbacca', email: 'chewie@mos-eisley.tat'}
        ]);

        myModule.startWithParent = false;


        myModule.API = {
            /**
             * Minimum implementation if you want something
             * else to control where this gets rendered.
            */
            getView: function() {
                return myModule.myView;
            }
        };

        myModule.addInitializer(function() {
            console.log('initialize');
        });

        myModule.addFinalizer(function() {
            console.log('finalize');
        });

        myModule.on('start', function() {
            console.log('on start');
            myModule.myView = new CollectionView({
                collection: dummyCollection
            })
        });

        myModule.on('stop', function() {
            console.log('on stop');
        });
    });

    return MyModule;

});
