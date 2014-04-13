var run = require('tape')
var text = require('../')

var span = document.createElement('span')
var value = 'npm.im/text-content'

run('it works', function(test) {
  test.notOk(text(span), 'has no value')
  text(span, value)
  test.equal(text(span), value, 'set value found')
  test.end()
})
