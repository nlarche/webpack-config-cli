import fs from 'fs'
import util from 'util'

import context from './context'

const config = {
    context : context(),
    entry : "todo",
    ouput : "todo",
    module : "todo",
    resolve : "todo",
    resolveLoader : "todo",
    externals : "todo",
    target : "todo",
    bail : "todo",
    profil : "todo",
    cache : "todo",
    debug : "todo",
    devtool : "todo",
    devServer : "todo",
    node : "todo",
    amd : "todo",
    loader : "todo",
    recordsPath : "todo",
    recordsInputPath : "todo",
    recordsOutputPath : "todo",
    plugins : "todo",    
};




fs.writeFile("webpack.config.js", `module.exports = ${util.inspect(config, {depth: null, colors: false})}`, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("webpack.config.js created ! ");
}); 