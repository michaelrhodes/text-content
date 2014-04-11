module.exports = function(node, value) {
  var text = (node.textContent ?
    'textContent' : 'innerText'
  )

  if (value) {
    node[text] = value
  }

  return node[text]
}
