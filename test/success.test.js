'use strict';

var assert = require('assert');
var Injection = require('../');

var injection = new Injection();

injection.register("$util"     , require("util"));
injection.register("$buffer"   , require("buffer"));
injection.register("$injection", injection);

function success_test($util, $buffer, $scope, $callback) {
    $callback(null, new $buffer.Buffer($scope.name), 'UTF-8');
}

var obj_to_scope = {'name': 'foo', 'lastname': 'bar'};

var fun_to_cb = function (err, result) {
    assert.ok(!err);
    assert.equal('foo', String(result));
};

injection.process(success_test, obj_to_scope, fun_to_cb);
