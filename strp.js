	/**
 * strp
 *
 * Copyright (c) 2013 Insanehong
 *
 * Contributors
 *
 * Licensed under the MIT license.
 * https://github.com/insanehong/strp/blob/master/LICENSE
 */

var strp = module.exports = {};

var reverse = strp.reverse = function(str) {
	return str.split("").reverse().join("");
};

var ltrim = strp.ltrim = function(str) {
	return str.replace(/^\s+/,"");
};

var rtrim = strp.rtrim = function(str) {
	return str.replace(/\s+$/,"");
};

var trim = strp.trim = function(str) {
	return str.replace(/^\s+|\s+$/g,"");
};

var join = strp.join = function() {
	var args = Array.prototype.slice.apply( arguments);
	return args.join("");
};

var joins = strp.joins = function() {
	var args = Array.prototype.slice.apply(arguments);
	return args.join(" ");
};

var joinln = strp.joinln = function() {
	var args = Array.prototype.slice.apply(arguments);
	return args.join("\n");
};