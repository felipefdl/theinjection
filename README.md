# The Injection

This simple and useful dependency injection to node.js similar angular.js.

## Documentation

For first you need register dependency.

```javascript
var Injection = require('theinjection');

var injection = new Injector();

injection.register("$async"    , require("async"));
injection.register("$moment"   , require("moment"));
injection.register("$_"        , require("lodash"));
injection.register("$injection", injection);
```

To use

```javascript
function example($scope, $_, $async, $callback) {
    console.log($scope);

    $callback(null, 'ok');
}

//

var obj_to_scope = {'name': 'foo', 'lastname': 'bar'};

var fun_to_cb = function (err, result) {
    console.log(result);
};

injection.process(example, obj_to_scope, fun_to_cb);
```
- The first param is **Function to process**.
- The second param is **Object Scope**.
- The third param is  **Callback**.

## License

The Injection is released under the [MIT License](https://github.com/felipefdl/theinjection/blob/master/LICENSE.md).
