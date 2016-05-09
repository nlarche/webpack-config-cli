function init(path) {
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

const prompt =
    {
        type: 'input',
        name: 'context',
        message: 'What is the the base directory ?',
        default: '__dirname',
        filter: (value) => prompt.default ? '': value
    }

module.exports = {
    init: init,
    prompt: prompt
}
