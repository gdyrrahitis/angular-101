import { User } from "../user";

describe("Models", () => {
    describe("User", () => {
        describe("Constructor", () => {
            it("should define properties", () => {
                // arrange | act
                const country = new User("George", "Dyrrachitis", "fake@email.com", "Greece", "Elm street");

                // assert
                expect(country.firstName).toBe("George");
                expect(country.lastName).toBe("Dyrrachitis");
                expect(country.email).toBe("fake@email.com");
                expect(country.country).toBe("Greece");
                expect(country.address).toBe("Elm street");
            });
        });
    });
});