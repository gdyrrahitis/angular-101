import { Color } from "../Color";

describe("Models", () => {
    describe("Country", () => {
        describe("Constructor", () => {
            it("should define properties", () => {
                // arrange | act
                const country = new Color("Red", "Red");

                // assert
                expect(country.color).toBe("Red");
                expect(country.name).toBe("Red");
            });
        });
    });
});