import { Country } from "../Country";

describe("Models", () => {
    describe("Country", () => {
        describe("Constructor", () => {
            it("should define properties", () => {
                // arrange | act
                const country = new Country("France", 60000000, "fr", 1);

                // assert
                expect(country.continentId).toBe(1);
                expect(country.code).toBe("fr");
                expect(country.name).toBe("France");
                expect(country.population).toBe(60000000);
            });
        });
    });
});