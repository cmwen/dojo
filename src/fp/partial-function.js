
function sum(x) {
    let _x = x
    return (y) => {
        let _y = y;
        return (z) => {
            return _x + _y + z;
        }
    }
}


module.exports = sum;
