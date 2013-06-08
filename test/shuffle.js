var test = require('tape'),
		strp = require('../strp');

test('shuffle test' , function(t) {
	t.plan(1);
	t.notEqual(strp.shuffle('hello world'),'hello world','shuffle "hello world"');
});
