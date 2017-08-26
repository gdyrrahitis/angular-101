import { LoginDetails } from "../LoginDetails";

describe("Models", () => {
    describe("LoginDetails", () => {
        describe("Constructor", () => {
            it("should define properties", () => {
                // arrange | act
                const country = new LoginDetails("George", "123");

                // assert
                expect(country.username).toBe("George");
                expect(country.password).toBe("123");
            });
        });
    });
});