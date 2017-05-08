const {Identity, Maybe} = require('./functor');

describe("Identity functor function", () => {
    test("should have map method", () => {
        let id = Identity(1);
        console.log(Identity);
        expect(id.map).toBeDefined();
    });

    test("should have a value method to unwarp the value", () => {
        const data = [null, undefined, 0.1234, "string", {"id": "string"}];
        data.forEach( test => {
            let id = Identity(test);
            expect(id.value()).toBe(test);
        });
    });

    test("map function should perform pass in method with the holding value", () => {
        let id = Identity(1);
        expect(id.map(addOne).value()).toBe(2);
    });

    test("should be able to chain map method", () => {
        let id = Identity(1);
        expect(id.map(addOne)
            .map(double).value()).toBe(4);
    });

});

describe("Maybe functor function", () => {
    test("maybe should be still able to be chain if there is a null value", () => {
        let maybe = Maybe(1);
        expect(maybe.map( val => null)
            .map(addOne)
            .map(double).value()).toBeFalsy();
    });
});

function addOne(x) {
    return x + 1;
}

function double(x) {
    return x * 2;
}
