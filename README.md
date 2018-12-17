# omit-deep-lodash
> Omit object keys by values recursively

Sometimes we need to omit things from an object recursively by a particular value or list of values [omit-deep](https://github.com/janaMabbu/OmitDeepByValues) did this
in a great manner  will work really work with Arrays and objects omit-deep-lodash solves
this and uses only lodash as external dependency.

The code for this module uses new features in the Javascript language, but the code is transpiled by Babel to ES2015 so most
projects who needs it should be able to use it.

Note! All non-omitted properties that are objects lose their prototype chains and thus their true type. This implementation 
is thus best used for simple JSON type objects like data objects and not typed object graphs where members have objects 
with constructors.

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i "omit-deep-by-values --save
```

## Usage

```js
const omitDeepByValues = require("omit-deep-by-values");


omitDeepByValues({a: null, b: "b", c: {b: null, d: "d", e: {b: null, f: "f", g: {b: "b", c: null}}}}, [null]);
//=> {b: "b", c: { d: "d", e: { f: "f", g: {b: "b"}}}}

omitDeepByValues({a: null, b: "", c: {b: undefined, d: { a: "value", b: "", c:null, e:"value", f: "f"}}}, [null, undefined, "", "value"]);
//=> { c: { d: { f: "f" } } }

omitDeep(["a", "", {b: ""}, {f: "f", g: {b: "b", c: ""}}], [""]);
//=> ["a", {}, {f: "f", g: {b: "b"}}]
```
## Related projects

* The original project for this. [more](https://github.com/janaMabbu/OmitDeepByValues)
* [lodash](https://github.com/lodash/lodash): The only external dependency. [more](https://github.com/lodash/lodash)

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/janaMabbu/OmitDeepByValues/issues/new)

## Author

+ [github/janaMabbbu](https://github.com/janaMabbu)

## License

Released under the MIT license.
