var test = require('tape'),
		strp = require('../strp');

test('first char test' , function(t) {
	t.plan(2);
	t.deepEqual(strp.lcfirst('HELLO'),'hELLO','lcfirst "HELLO"');
	t.deepEqual(strp.ucfirst('hello'),'Hello','ucfirst "Hello"');
});
