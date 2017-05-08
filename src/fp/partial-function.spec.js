const sum = require("./partial-function.js");

describe("partial functions that implemented with clousure", () => {

    test("a function that sums three numbers", () => {
        expect( sum(1)(2)(3)).toBe(6);
    });

    test("a function can take one numbers and returns a function that sums the other two", () => {
        let addOne = sum(1);
        expect( addOne(2)(3)).toBe(6);
    });

    test("a function can take two numbers and returns a function that sums the rest number", () => {
        let addOneAndTwo = sum(1)(2);
        expect(addOneAndTwo(3)).toBe(6);
    });
});
