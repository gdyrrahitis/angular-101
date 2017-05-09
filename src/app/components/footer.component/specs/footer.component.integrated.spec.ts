import { DebugElement } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { SafePipe } from "../../../pipes/safe.pipe";
import { FooterComponent } from "../footer.component";

describe("Components", () => {
    describe("Footer.Component", () => {
        let fixture: ComponentFixture<FooterComponent>;
        let component: FooterComponent;
        let element: HTMLElement;
        let debugElement: DebugElement;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [],
                declarations: [FooterComponent, SafePipe],
                schemas: [],
                providers: []
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(FooterComponent);
            component = fixture.componentInstance;
            debugElement = fixture.debugElement;
            element = fixture.nativeElement;
        });

        it("should set properties values", () => {
            // Arrange
            let gravatarUrl = "https://s.gravatar.com/avatar/750fb2d20360d5a472ef76cfc2037342?s=80";
            let twitterHandle = "//twitter.com/giorgosdyrra";
            let githubUrl = "https://ghbtns.com/github-btn.html?user=gdyrrahitis&type=follow&count=true&size=medium";

            // Act
            fixture.detectChanges();

            // Assert
            expect(element.querySelector("img.media-object.img-rounded").getAttribute("src")).toBe(gravatarUrl);
            expect(element.querySelector("a.twitter-follow-button").getAttribute("href")).toBe(twitterHandle);
            expect(element.querySelector("iframe").getAttribute("src")).toBe(githubUrl);
        });
    });
});