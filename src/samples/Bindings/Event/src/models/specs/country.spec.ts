import { Continent } from "../Continent";
import { Country } from "../Country";

describe("Models", () => {
    describe("Country", () => {
        describe("Constructor", () => {
            it("should define properties", () => {
                // arrange | act
                const country = new Country("es", "Spain", new Continent("Europe"));

                // assert
                expect(country.code).toBe("es");
                expect(country.continent.name).toBe("Europe");
                expect(country.name).toBe("Spain");
            });
        });
    });
});