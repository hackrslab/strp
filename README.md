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

## Usage 

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
strp.ltrim('    hello world');

// "hello world"
```

### trim

```
strp.rtrim('    hello world    ');

// "hello world"
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
strp.lcfirst('HELLO WORLD');

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

// "dlrow olleh"
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


# LICENSE

The MIT License

Copyright (c) 2013 The strp Authors

See the LICENSE file for details.






