import { Country } from "../Country";

describe("Models", () => {
    describe("Country", () => {
        describe("Constructor", () => {
            it("should define properties", () => {
                // arrange | act
                const country = new Country(1, "France", { name: "Europe" });

                // assert
                expect(country.continent.name).toBe("Europe");
                expect(country.code).toBe(1);
                expect(country.name).toBe("France");
            });
        });
    });
});