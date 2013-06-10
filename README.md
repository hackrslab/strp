# strp

strp is String Object Extensions for node.js

## install 

```
$ npm install strp
```

## update

```
$ npm update strp
```

## Usase 

### require module 

```
var strp = require('strp');
```

### rtrim

```
strp.rtrim('hello world   ');

// "hello world"
```

### ltrim

```
strp.rtrim('    hello world');

// "hello world"
```

### trim

```
strp.rtrim('    hello world    ');

// "hellow orld"
```

### join

```
strp.join('hello', 'world');

// "helloworld"
```

### joins

```
strp.joins('hello', 'world');

// "hello world"
```

### joinln

```
strp.joinln('hello', 'world');

// "hello"
// "world"
```

### lpad

```
strp.lpad('100',10,'0');

// "0000000100"
```

### rpad

```
strp.rpad('100',10,'0');

// "1000000000"
```

### ucfirst

```
strp.ucfirst('hello world');

// "Hello world"
```

### lcfirst

```
strp.ucfirst('HELLO WORLD');

// "hELLO WORLD"
```

### shuffle

```
strp.shuffle('hello world');

// "ol wohldrewl"
```

### reverse

```
strp.reverse('hello world');

// "dlrow wolleh"
```

## stripslashes

```
strp.stripslashes('strp is insanehong\\\'s project');

// "strp is insanehong\'s project"
```

## number_format

```
strp.number_format('1234567');

// "1,234,567"
``


# LISECE

The MIT License

Copyright (c) 2013 The strp Authors

See the LICENSE file for details.






