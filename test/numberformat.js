var test = require('tape'),
		strp = require('../strp');

test('stripslashes test' , function(t) {
	var number = '1234567';
	t.plan(1);
	t.deepEqual(strp.number_format(number),"1,234,567","1234567 number_format = 1,234,567");
});	