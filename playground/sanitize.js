function sanitize(v) {
    if (typeof v === 'string') {
        return v.replace(/'/g, '');
    } else if (v instanceof Object) {
        for (var key in v) {
            if (/^\$/.test(key)) {
                delete v[key];
            } else {
                v[key] = sanitize(v[key]);
                sanitize(v[key]);
            }
        }
    }
    return v;
}

module.exports = sanitize;