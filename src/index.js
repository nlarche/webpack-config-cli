import fs from 'fs'
import util from 'util'
import log from 'npmlog'
import inquirer from 'inquirer'

import context from './properties/context'

const prompt = [context.prompt]

inquirer.prompt(prompt).then((answer) => {
    const config = {
        context: context.init(answer.context),
        entry: 'todo',
        ouput: 'todo',
        module: 'todo',
        resolve: 'todo',
        resolveLoader: 'todo',
        externals: 'todo',
        target: 'todo',
        bail: 'todo',
        profil: 'todo',
        cache: 'todo',
        debug: 'todo',
        devtool: 'todo',
        devServer: 'todo',
        node: 'todo',
        amd: 'todo',
        loader: 'todo',
        recordsPath: 'todo',
        recordsInputPath: 'todo',
        recordsOutputPath: 'todo',
        plugins: 'todo'
    }

    fs.writeFile('webpack.config.js', `module.exports = ${util.inspect(config, { depth: null, colors: false })}`, function (err) {
        if (err) {
            return log.error(err)
        }

        log.info('webpack.config.js created ! ')
    })
})
