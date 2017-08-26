import { TwoWayComponent } from "../index";

describe("Component", () => {
    describe("TwoWay", () => {
        it("should set url", () => {
            // arrange | act
            const component = new TwoWayComponent();

            // assert
            expect(component.url).toBe("http://flagpedia.net/data/flags/normal/$P0.png");
        });

        it("should return flag for us", () => {
            // arrange
            const component = new TwoWayComponent();

            // act
            let result: string = component.getFlagByCode("us");

            // assert
            expect(result).toBe("http://flagpedia.net/data/flags/normal/us.png");
        });
    });
});