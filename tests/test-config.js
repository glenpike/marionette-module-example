//Load the shared config file
require(['require-config'], function() {
    require([
        'mocha',
        'vendor/chai/chai',
        'vendor/chai-jquery/chai-jquery'
    ], function (mocha, chai, chaiJquery) {
        // Chai globals!
        /* jshint ignore:start */
        //we get complaints about globals and W030
        assert = chai.assert;
        expect = chai.expect;
        should = chai.should(),
        /* jshint ignore:end */
        chai.use(chaiJquery);

        mocha.setup('bdd');

        require(['module/my-module-test'], function() {
            mocha.run();
        });
    });
});
