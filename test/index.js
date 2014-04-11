var run = require('tape')
var mkdom = require('mkdom')
var text = require('../')

var span = mkdom('<span>')
var value = 'npm.im/text-content'

run('it works', function(test) {
  test.notOk(text(span), 'has no value')
  text(span, value)
  test.equal(text(span), value, 'set value found')
  test.end()
})
