var test = require('tape'),
		strp = require('../strp');

test('stripslashes test' , function(t) {
	var msg = 'This is Insanehong\\\'s open source project.';
	t.plan(2);
	t.notEqual(msg,"This is Insanehong's open source project.","This is Insanehong\'s open source project plan text");
	t.deepEqual(strp.stripslashes(msg,"This is Insanehong's open source project."),"This is Insanehong\'s open source project.",msg+" stripslashes");
});	