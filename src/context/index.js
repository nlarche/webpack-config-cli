module.exports = function init (path) {
  const context = '__dirname'
  let builder = path

  if (!path) {
    return context
  }

  if (path.endsWith('/')) {
    builder = path.slice(0, -1)
  }

  if (!path.startsWith('/')) {
    builder = '/' + path
  }

  return context + builder
}
