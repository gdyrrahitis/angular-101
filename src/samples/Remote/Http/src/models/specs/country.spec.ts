import { Country } from "../Country";

describe("Models", () => {
    describe("Country", () => {
        describe("Constructor", () => {
            it("should define properties", () => {
                // arrange | act
                const country = new Country("France", "Paris", 60000000, "fr", "France");

                // assert
                expect(country.alpha2Code).toBe("fr");
                expect(country.capital).toBe("Paris");
                expect(country.name).toBe("France");
                expect(country.population).toBe(60000000);
            });
        });
    });
});