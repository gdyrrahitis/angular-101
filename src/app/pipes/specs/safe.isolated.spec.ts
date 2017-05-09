import { DomSanitizer } from "@angular/platform-browser";
import { SafePipe } from "../safe.pipe";

describe("Pipes", () => {
    describe("Safe", () => {
        let url = "http://github.image.com";
        let domSanitizerMock: any = {
            bypassSecurityTrustResourceUrl: (value: string) => {}
        };

        beforeEach(() => {
            spyOn(domSanitizerMock, "bypassSecurityTrustResourceUrl").and.returnValue(url);
        });

        it("Should return the same url passed", () => {
            // Arrange
            let pipe = new SafePipe(domSanitizerMock);

            // Act
            let result = pipe.transform(url);

            // Assert
            expect(result).toBe(url);
        });
    });
});