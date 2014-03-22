module.exports = function(api, valueKey) {
	valueKey = valueKey || "value";

	var fluent = Object.getOwnPropertyNames(api).reduce(function(acc, key) {
		acc[key] = typeof api[key] !== 'function' ?
			api[key] :
			function() {
				var result = Object.create(fluent);
				result[valueKey] = api[key].bind(api, this[valueKey]).apply(null, arguments);
				return result;
			};
		return acc;
	}, {});

	return function(val) {
        var result = Object.create(fluent);
        result[valueKey] = val;
        return result;
    };
};
