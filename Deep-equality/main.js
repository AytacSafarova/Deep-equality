function deepEquals(a, b) {
    // NaN control
    if (a == NaN) {
        if (isNaN(a) == isNaN(b)) {
            console.log(true)
        }
        else {
            console.log(false)
        }
    }
    // number control
    if (typeof a == 'number' && typeof b == 'number') {
        if (a === b) {
            console.log(true)
        }
        else {
            console.log(false)
        }
    }

    // string control
    else if (typeof a == 'string' && typeof b == 'string') {
        if (a.normalize() === b.normalize()) {
            console.log(true)
        }
        else {
            console.log(false)
        }
    }
    //Object control 
    function compareObjects(o, p) {
        var i,
            keysO = Object.keys(o).sort(),
            keysP = Object.keys(p).sort();
        if (keysO.length !== keysP.length)
            return false;
        if (keysO.join('') !== keysP.join(''))
            return false;
        for (i = 0; i < keysO.length; ++i) {
            if (o[keysO[i]] instanceof Array) {
                if (!(p[keysO[i]] instanceof Array))
                    return false;
                if (p[keysO[i]].sort().join('') !== o[keysO[i]].sort().join(''))
                    return false;
            }
            else if (o[keysO[i]] instanceof Date) {
                if (!(p[keysO[i]] instanceof Date))
                    return false;
                if (('' + o[keysO[i]]) !== ('' + p[keysO[i]]))
                    return false;
            }
            else if (o[keysO[i]] instanceof Function) {
                if (!(p[keysO[i]] instanceof Function))
                    return false;
            }
            else if (o[keysO[i]] instanceof Object) {
                if (!(p[keysO[i]] instanceof Object))
                    return false;
                if (o[keysO[i]] === o) {
                    if (p[keysO[i]] !== p)
                        return false;
                }
                else if (compareObjects(o[keysO[i]], p[keysO[i]]) === false)
                    return false;
            }
            if (o[keysO[i]] !== p[keysO[i]])
                return false;
        }
        return true;
    }


    function arrayEquals(a, b) {
        return Array.isArray(a) &&
            Array.isArray(b) &&
            a.length === b.length &&
            a.every((val, index) => val === b[index]);
    }

}

deepEquals(NaN, NaN)


