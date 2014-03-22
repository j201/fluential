var tape = require('tape');
var fluential = require('../lib');

var api = {
	square: function(x) {
		return x * x;
	},
	add: function(a, b) {
		return a + b;
	},
	thisRefSquare: function(x) {
		return this.square(x);
	}
};

tape("basic functionality", function(t) {
	var fluent = fluential(api);

	t.ok(fluent, "Creates a new object");
	t.deepEqual(Object.keys(Object.getPrototypeOf(fluent(1))), Object.keys(api), "fluent(x) inherits from the api");
	t.equal(fluent(2).value, 2, "fluent(x).value === x");
	t.equal(fluent(2).square().value, 4, "Single-argument chained functions work");
	t.equal(fluent(2).add(1).value, 3, "Multiple-argument chained functions work");
	t.equal(fluent(2).square().add(1).value, 5, "Multiple chained functions work");
	t.equal(fluent(2).thisRefSquare().value, 4, "`this` is preserved");
	t.equal(fluential(api, "val")(2).square().val, 4, "An arbitrary property can be used instead of value");
	t.equal(fluential(Math)(5).sqrt().floor().value, 2, "Works with native libs");

	t.end();
});
