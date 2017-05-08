const compose = require('./compose');

describe("a function that can compose two functions", () => {
    test("compose function will return a new function", () => {
        let addOneAndDouble = compose( x => x + 1, x => x * 2);
        expect(addOneAndDouble(1)).toBe(4);
    });
});
