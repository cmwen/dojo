
describe("Promise Practice", () => {
    describe("Simple", () => {
        let success = "success";
        let fail = "fail";

        test("Resolve", () => {
            let promise = new Promise( (resolve, reject) => {
                resolve(success);
            });

            promise.then((res) => {
                expect(res).toBe(success);
            }).catch( (err) => {
                expect(true).toBe(false);
            });
        });

        test("Reject", () => {
            let promise = new Promise((resolve, reject) => {
                reject(fail);
            });

            promise.then((res) => {
                expect(true).toBe(false);
            }).catch((err) => {
                expect(err).toBe(fail);
            });
        });
    });
});
