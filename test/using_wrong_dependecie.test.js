'use strict';

var assert = require('assert');
var Injection = require('../');

var injection = new Injection();

function success_test($moment) {
    assert.ok(true);
    assert.ok(!$moment);
}

try {
    injection.process(success_test);
} catch (e) {
    assert.equal('Error on inject dependencies, dependecie name: $moment', e);
}
