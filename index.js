module.exports = function(node, value) {
  var text = (node.textContent !== undefined ?
    'textContent' : 'innerText'
  )

  if (value) {
    node[text] = value
  }

  return node[text]
}
