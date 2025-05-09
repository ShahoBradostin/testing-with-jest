const _ = require('underscore');

let items = [];

exports.push = function (x) {
    items.push(x);
};

exports.pop = function () {
    if (items.length === 0) {
        return undefined;
    }
    return items.pop();
};

exports.peek = function () {
    return _.last(items);
};

// For testing purposes
exports._reset = function() {
    items = [];
};