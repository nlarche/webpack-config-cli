import fs from 'fs'
import stringify from './stringify'

  var test = {
        a: "Hey there!",
        b: "Hey there!",
        c: {
            aa: "aa",
            bb: [
                { aaa: { aaaa: 1, bbbb: "" } },
                { bbb: { aaaa: 1, bbbb: "" } },
                { ccc: { aaaa: 1, bbbb: "", cccc : null } }
            ],
            cc: 'cc',
            ee : null
        },
        d: {
            dd: "dd",
            ee: [
                { aaa: { aaaa: 1, bbbb: "" } },
                null
            ],
            ff: 'ff',
            gg : [0,1,2,3,4,5,6]
        }
    }

fs.writeFile("webpack.config.js", `module.exports = ${stringify(test)}`, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("webpack.config.js created ! ");
}); 