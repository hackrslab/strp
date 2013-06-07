var test = require('tape'),
		strp = require('../strp');

test('reverse test' , function(t) {
	t.plan(1);
	t.deepEqual(strp.reverse('hello world'),'dlrow olleh','reverse "hello world"');
});	
