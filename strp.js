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