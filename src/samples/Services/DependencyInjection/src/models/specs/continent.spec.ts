import { Continent } from "../Continent";

describe("Models", () => {
    describe("Continent", () => {
        describe("Constructor", () => {
            it("should define properties", () => {
                // arrange | act
                const continent = new Continent(1, "Europe");

                // assert
                expect(continent.name).toBe("Europe");
                expect(continent.id).toBe(1);
            });
        });
    });
});