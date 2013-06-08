var test = require('tape'),
		strp = require('../strp');

test('join test' , function(t) {
	t.plan(3);
	t.deepEqual(strp.join('hello', 'world'),'helloworld','join "hello","world"');
	t.deepEqual(strp.joins('hello','world'),'hello world','joins "hello","world"');
	t.deepEqual(strp.joinln('hello','world'),'hello\nworld','joinln "hello", "world"');
});	

