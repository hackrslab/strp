var test = require('tape'),
		strp = require('../strp');

test('pad test' , function(t) {
	t.plan(2);
	t.deepEqual(strp.lpad('hello',10, '*'),'*****hello','lpad "hello"');
	t.deepEqual(strp.rpad('hello',10,'*'),'hello*****','rlpad "hello"');
});
