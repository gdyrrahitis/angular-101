import { Continent, IContinent } from "../../models/Continent";
import { Country, ICountry } from "../../models/Country";
import { EventComponent } from "../event.component";

describe("Components", () => {
    describe("Event", () => {
        it("should set clickedElement and continent to values provided", () => {
            // Arrange
            let htmlElement: HTMLElement = document.createElement("div");
            htmlElement.className = "myClassName";
            let $event = { target: htmlElement };
            let continent: IContinent = new Continent("Europe");
            let component = new EventComponent();

            // Act
            component.setSelectedContinent($event, continent);

            // Assert
            expect(component.continent.name).toBe("Europe");
            expect(component.clickedElement.tagName.toLowerCase()).toBe("div");
            expect(component.clickedElement.className).toBe("myClassName");
        });

        it("should return countries by selected continent", () => {
            // Arrange
            let $event = { target: {} };
            let continent: IContinent = new Continent("Europe");
            let component = new EventComponent();
            component.setSelectedContinent($event, continent);

            // Act
            let result = component.getCountriesBySelectedContinent();

            // Assert
            expect(result.length).toBe(3);
            expect(result[0].code).toBe("gb");
            expect(result[0].name).toBe("United Kingdom");
            expect(result[1].code).toBe("ie");
            expect(result[1].name).toBe("Ireland");
            expect(result[2].code).toBe("ch");
            expect(result[2].name).toBe("Switzerland");
        });

        it("should return empty array if continent is not listed", () => {
            // Arrange
            let $event = { target: {} };
            let continent: IContinent = new Continent("Oceania");
            let component = new EventComponent();
            component.setSelectedContinent($event, continent);

            // Act
            let result = component.getCountriesBySelectedContinent();

            // Assert
            expect(result.length).toBe(0);
        });

        it("should return empty array if continent is not set previously", () => {
            // Arrange
            let component = new EventComponent();

            // Act
            let result = component.getCountriesBySelectedContinent();

            // Assert
            expect(result.length).toBe(0);
        });

        it("should return countries by provided continent", () => {
            // Arrange
            let continent: IContinent = new Continent("Europe");
            let component = new EventComponent();

            // Act
            let result = component.getCountriesByContinent(continent);

            // Assert
            expect(result.length).toBe(3);
            expect(result[0].code).toBe("gb");
            expect(result[0].name).toBe("United Kingdom");
            expect(result[1].code).toBe("ie");
            expect(result[1].name).toBe("Ireland");
            expect(result[2].code).toBe("ch");
            expect(result[2].name).toBe("Switzerland");
        });

        it("should return empty array if continent provided is not listed", () => {
            // Arrange
            let continent: IContinent = new Continent("Oceania");
            let component = new EventComponent();

            // Act
            let result = component.getCountriesByContinent(continent);

            // Assert
            expect(result.length).toBe(0);
        });

        it("should return empty arry if continent provided is null", () => {
            // Arrange
            let component = new EventComponent();

            // Act
            let result = component.getCountriesByContinent(null);

            // Assert
            expect(result.length).toBe(0);
        });

        it("should throw error if country is null", () => {
            // Arrange
            let component = new EventComponent();

            // Act
            let action = () => component.getSrcForCountry(null);

            // Assert
            expect(action).toThrowError("Parameter country should not be null");
        });

        it("should throw error if country.name is null", () => {
            // Arrange
            let country = new Country(null, null, null);
            let component = new EventComponent();

            // Act
            let action = () => component.getSrcForCountry(country);

            // Assert
            expect(action).toThrowError("Property country.name should not be null or whitespace");
        });

        it("should throw error if country.name is empty", () => {
            // Arrange
            let country = new Country("", "", null);
            let component = new EventComponent();

            // Act
            let action = () => component.getSrcForCountry(country);

            // Assert
            expect(action).toThrowError("Property country.name should not be null or whitespace");
        });

        it("should throw error if country.name is whitespace", () => {
            // Arrange
            let country = new Country("", " ", null);
            let component = new EventComponent();

            // Act
            let action = () => component.getSrcForCountry(country);

            // Assert
            expect(action).toThrowError("Property country.name should not be null or whitespace");
        });

        it("should replace placeholder value with the one provided", () => {
            // Arrange
            let country = new Country("gb", "United Kingdom", new Continent("Europe"));
            let component = new EventComponent();

            // Act
            let result = component.getSrcForCountry(country);

            // Assert
            expect(result).toBe("http://flagpedia.net/data/flags/normal/gb.png");
        });

        it("should clear continent to null and set current clicked element", () => {
            // Arrange
            let htmlElement: HTMLElement = document.createElement("div");
            htmlElement.className = "myClassName";
            let $event = { target: htmlElement };
            let continent: IContinent = new Continent("Europe");
            let component = new EventComponent();
            component.setSelectedContinent($event, continent);

            // Act
            component.clear($event);

            // Assert
            expect(component.continent).toBeNull();
            expect(component.clickedElement.tagName.toLowerCase()).toBe("div");
            expect(component.clickedElement.className).toBe("myClassName");
        });

        it("should throw error if $event is null", () => {
            // Arrange
            let component = new EventComponent();

            // Act
            let action = () => component.clear(null);

            // Assert
            expect(action).toThrowError("Parameter $event should not be null");
        });

        it("should return empty array if selectedContinent is undefined", () => {
            // Arrange
            let component = new EventComponent();
            component.selectedContinent = undefined;

            // Act
            let result = component.getContinentsExceptFromSelected();

            // Assert
            expect(result.length).toBe(0);
        });

        it("should return America and Asia", () => {
            // Arrange
            let component = new EventComponent();

            // Act
            let result = component.getContinentsExceptFromSelected();

            // Assert
            expect(result.length).toBe(2);
            expect(result[0].name).toBe("America");
            expect(result[1].name).toBe("Asia");
        });

        it("should throw error if $event is null", () => {
            // Arrange
            let component = new EventComponent();

            // Act
            let action = () => component.changeShowingList(null);

            // Assert
            expect(action).toThrowError("Parameter $event should not be null");
        });

        it("should set continentToSwap to undefined for non existent continent", () => {
            // Arrange
            let component = new EventComponent();

            // Act
            component.changeShowingList({ target: { value: "Oceania" } });

            // Assert
            expect(component.continentToSwap).toBeUndefined();
        });

        it("should set continentToSwap and changedElement to the element target", () => {
            // Arrange
            let input: HTMLInputElement = document.createElement("input");
            input.value = "America";
            let $event = { target: input };
            let component = new EventComponent();

            // Act
            component.changeShowingList($event);

            // Assert
            expect(component.continentToSwap.name).toBe("America");
            expect(component.changedElement.tagName.toLowerCase()).toBe("input");
        });

        it("should set selectedContinent to continentToSwap value and then null to the latter", () => {
            // Arrange
            let input: HTMLInputElement = document.createElement("input");
            input.value = "America";
            let $event = { target: input };
            let component = new EventComponent();
            component.changeShowingList($event);

            // Act
            component.swap();

            // Assert
            expect(component.selectedContinent.name).toBe("America");
            expect(component.continentToSwap).toBeNull();
        });
    });
});