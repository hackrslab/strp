var test = require('tape'),
		strp = require('../strp');

test('trim test' , function(t) {
	t.plan(3);
	t.deepEqual(strp.ltrim('  hello world'),'hello world','ltrim "   hello world"');
	t.deepEqual(strp.rtrim('hello world   '),'hello world','rtrim "hello world   "');
	t.deepEqual(strp.trim('  hello world   '),'hello world','ltrim "   hello world   "');
});	

