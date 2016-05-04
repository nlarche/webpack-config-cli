
module.exports = function stringify(obj) {

    const arrOfKeyVals = []
    const arrVals = []

    /*********CHECK FOR PRIMITIVE TYPES**********/
    if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null)
        return '' + obj;
    else if (typeof obj === 'string')
        return '"' + obj + '"';

    /*********CHECK FOR ARRAY**********/
    else if (Array.isArray(obj)) {
        //check for empty array
        if (obj[0] === undefined)
            return '[]';
        else {
            obj.forEach(function(el) {
                arrVals.push(stringify(el));
            });
            return '[' + arrVals + ']\n';
        }
    }
    /*********CHECK FOR OBJECT**********/
    else if (obj instanceof Object) {
        //get object keys
        const objKeys = Object.keys(obj);
        //set key output;
        objKeys.forEach(function(key) {
            var keyOut = '\n' + key + ':';
            var keyValOut = obj[key];
            //skip functions and undefined properties
            if (keyValOut instanceof Function || typeof keyValOut === undefined)
                arrOfKeyVals.push('');
            else if (typeof keyValOut === 'string')
                arrOfKeyVals.push(keyOut + '"' + keyValOut + '"');
            else if (typeof keyValOut === 'boolean' || typeof keValOut === 'number' || keyValOut === null)
                arrOfKeyVals.push(keyOut + keyValOut);
            //check for nested objects, call recursively until no more objects
            else if (keyValOut instanceof Object) {
                arrOfKeyVals.push(keyOut + stringify(keyValOut));
            }
        });
        return `${depthOf(obj)}{' + ${arrOfKeyVals} + '}`;
    }
};

function depthOf(object) {
    var level = 1;
    var key;
    for(key in object) {
        if (!object.hasOwnProperty(key)) continue;

        if(typeof object[key] == 'object'){
            var depth = depthOf(object[key]) + 1;
            level = Math.max(depth, level);
        }
    }
    var tabs = []
    for(var i=0;i===level;i++){
        tabs.push('\t\t');
    }
    
    return tabs.join(null);
}