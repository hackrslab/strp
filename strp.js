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

var lpad = strp.lpad = function(str,maxlength,padstr) {
	var i = 0,
			s = str;

	if( str.length < maxlength) for ( ; i < (maxlength - str.length) ; i++ ) s = padstr.charAt(0).concat(s);
		
	return s;
};

var rpad = strp.rpad = function(str,maxlength,padstr) {
	var i = 0,		
			s = str;

	if( str.length < maxlength) for ( ; i < (maxlength - str.length) ; i++ ) s  = s.concat(padstr.charAt(0));

	return s;
};

var lcfirst = strp.lcfirst = function(str) {
	var s = str,
	first = s.charAt(0).toLowerCase();

	return first.concat(s.slice(1));
};

var ucfirst = strp.ucfirst = function(str) {
	var s = str,
	first = s.charAt(0).toUpperCase();

	return first.concat(s.slice(1));
};

var shuffle = strp.shuffle = function(str) {
	return str.split("").sort(function() { return 0.5 - Math.random();}).join("");
};


var stripslashes = strp.stripslashes = function(str) {
  return str.replace(/\\(.?)/g, function (s,slashes) {
    
    switch (slashes) {
    case '\\':
      return '\\';
    case '0':
      return '\u0000';
    case '':
      return '';
    default:
      return slashes;
    }
  });
};

var number_format = strp.number_format = function(str) {
	if(isNaN(str)) return NaN;
	if (typeof str === 'number') str = str.toString();
	
	var numberData = str.split(".");
  
  return numberData[0].replace(/\B(?=(\d{3})+(?=$))/g, ",") + (numberData[1] ? "." + numberData[1] : ""); 
};




