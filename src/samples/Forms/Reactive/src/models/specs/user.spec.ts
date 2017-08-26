import { User } from "../User";

describe("Models", () => {
    describe("User", () => {
        describe("Constructor", () => {
            it("should define properties", () => {
                // arrange | act
                const country = new User("George", "Dyrrachitis", "fake@email.com", {
                    country: "Greece",
                    street: "Elm street",
                    zip: "1234"
                 });

                // assert
                expect(country.firstName).toBe("George");
                expect(country.lastName).toBe("Dyrrachitis");
                expect(country.email).toBe("fake@email.com");
                expect(country.address.country).toBe("Greece");
                expect(country.address.street).toBe("Elm street");
                expect(country.address.zip).toBe("1234");
            });
        });
    });
});