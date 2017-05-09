import { KeysPipe } from "../keys.pipe";

describe("Pipes", () => {
    describe("Keys", () => {
        let keysPipe: KeysPipe;
        beforeEach(() => {
            keysPipe = new KeysPipe();
        });

        it("should return all object keys", () => {
            // Arrange
            const obj = { name: "George", surname: "Dyrrachitis", age: 28 };

            // Act
            let result = keysPipe.transform(obj, []);

            // Assert
            expect(result.length).toBe(3);
            expect(result.some((value) => value === "name")).toBeTruthy();
            expect(result.some((value) => value === "surname")).toBeTruthy();
            expect(result.some((value) => value === "age")).toBeTruthy();
        });

        it("should return no key from empty object", () => {
            // Arrange
            const obj = {};

            // Act
            let result = keysPipe.transform(obj, []);

            // Assert
            expect(result.length).toBe(0);
        });
    });
});