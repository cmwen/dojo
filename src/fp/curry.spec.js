const curry = require('./curry');

// Definition on Wikipedia:
// Currying is the technique of translating the evaluation of a function that takes multiple arguments (or a tuple of arguments) into evaluating a sequence of functions, each with a single argument

describe("currying function", () => {
    test("curry function take a function and return a function", () => {
        expect(typeof curry(() => {}))
            .toBe("function");
    });

    test("returned curry function, when parameter is satisfied, the function should be triggered.", () => {
        let addOne = curry((x) => x + 1);
        expect(addOne(1)).toBe(2);
    });

    test("returned curry function, when parameter is not satisfied, it should just return another function", () => {
        let sum = curry((x, y) => x + y);
        expect(typeof sum(1))
            .toBe("function");
    });

    test("returned curry function, when paramter is satisfied, the function should be triggered.", () => {
        let sum = curry((x, y) => x + y);

        expect(sum(1)(2)).toBe(3);
    });

    test("if the wrapped function takes 4 params, I can call return function with 3 params and it will return a function", () => {
        let sum = curry((w, x, y, z) => w + x + y + z);
        let partialSum = sum(1, 2);
        expect(typeof partialSum).toBe("function");
        expect(partialSum(3, 4)).toBe(10);
    });

    test("return function should be able to reuse just like compose", () => {
        let sum = curry((w, x, y, z) => w + x + y + z);

        let addOneAddTwo = sum(1, 2);
        let addThreeAndFour = sum(3, 4);

        expect(addOneAddTwo(1, 1)).toBe(5);
        expect(addThreeAndFour(2, 1)).toBe(10);
    });
});
