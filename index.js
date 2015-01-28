'use strict';

function Injector () {
    this.dependencies = {};
}

Injector.prototype.register = function register(name, dependency) {
    this.dependencies[name] = dependency;
};

Injector.prototype.get_dependencies = function get_dependencies(arr, $scope, $callback) {
    var self = this;
    return arr.map(function(value) {
        value = value.trim();
        if (value === "$scope") {
            return $scope;
        }
        if (value === "$callback") {
            return $callback;
        }

        var func = self.dependencies[value];
        if (!func) {
            throw "Error on inject dependencies, dependecie name: " + value;
        }

        return func;
    });
};

Injector.prototype.process = function process(target, $scope, $callback) {
    var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
    var text = target.toString();
    var args = text.match(FN_ARGS)[1].split(',');

    target.apply(target, this.get_dependencies(args, $scope, $callback));
};

module.exports = Injector;
