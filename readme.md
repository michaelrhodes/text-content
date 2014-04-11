# text-content 
text-content is a cross-browser function for getting and setting the text value of a DOM element.

[![Build status](https://travis-ci.org/michaelrhodes/text-content.png?branch=master)](https://travis-ci.org/michaelrhodes/text-content)

[![Browser support](https://ci.testling.com/michaelrhodes/text-content.png)](https://ci.testling.com/michaelrhodes/text-content)

## Install
```
npm install text-content
```

### Example
``` js
var mkdom = require('mkdom')
var text = require('text-content')

// You can just use document.createElement if
// you’re not sharing rendering logic.
var span = mkdom('<span>')

text(span, 'Some text')
console.log(text(span))
// => Some text
```

### License
[MIT](http://opensource.org/licenses/MIT)
