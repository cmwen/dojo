
function compose(fn1, fn2) {
    return (params) => {
        return fn2(fn1(params));
    }
}

module.exports = compose;
