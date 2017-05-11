
function curry(fn) {
    let numberOfArguments = fn.length;

    function _curry() {
        let args = Array.from(arguments);

        if (arguments.length >= numberOfArguments) {
            let result = fn.apply(this, arguments);
            return result;
        } else {
            return _curry.bind(this, ...args);
        }
    };

    return _curry;
}

module.exports = curry;
