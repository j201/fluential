#fluential

###Make a chained interface for any library

fluential allows you to take an object containing functions, and produce a new object that can be used as a [chained/fluent API](http://underscorejs.org/#chain).

##Usage

```javascript
var fluential = require('fluential');
var path = require('path');

// Makes a chained version of the library
var fPath = fluential(path);

// Give the chained library an initial value, perform operations, and then take its .value
var myPath = fPath("C:/Users\\j201")
	.normalize()
	.join("npm", "fluential", "test")
	.resolve("../lib.js")
	.value; // C:\Users\j201\npm\fluential\lib.js

// A custom property can be used instead of .value
var fMath = fluential(Math, 'amazingResult');
fMath(5)
	.sqrt()
	.sin()
	.pow(3)
	.amazingResult; // 0.4869774111455
```

##Rationale

The most composable functions are those that just map arguments to return values. Those are the kinds of APIs that library developers should be offering, because they're simple, consistent, and give us users the most freedom to manipulate the library functions. And, if we want a different API, tools like this let us use it the way we want. So why should all sorts of library developers each make their own new fluent APIs when we can write one that will work anywhere in less than 50 lines?

##Compatibility

Needs an ES5 environment.

##Licence

Licensed under the MIT licence.
©2014 j201
