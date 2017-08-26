import { DebugElement, NO_ERRORS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { PropertyComponent } from "../index";

describe("Component", () => {
    describe("Property", () => {
        let fixture: ComponentFixture<PropertyComponent>;
        let debugElement: DebugElement;
        let component: PropertyComponent;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [PropertyComponent],
                schemas: [NO_ERRORS_SCHEMA]
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(PropertyComponent);
            debugElement = fixture.debugElement;
            component = fixture.componentInstance;
        });

        it("should show unitedKingdomTitle in h3", () => {
            fixture.detectChanges();
            let h3: HTMLElement = fixture.debugElement
                .query(By.css(".row:nth-of-type(1) h3.panel-title:nth-of-type(1)"))
                .nativeElement;
            expect(h3.innerText).toBe(component.unitedKingdomTitle);
        });

        it("should show unitedKingdomFlag with width and height for image", () => {
            fixture.detectChanges();
            let img: HTMLImageElement = fixture.debugElement
                .query(By.css(".row:nth-of-type(1) img:nth-of-type(1)"))
                .nativeElement;
            expect(img.src).toBe(component.unitedKingdomFlag);
            expect(img.alt).toBe(component.unitedKingdomTitle);
            expect(img.width).toBe(component.imageWidth);
            expect(img.height).toBe(component.imageHeight);
        });

        it("should show usaTitle on h3", () => {
            fixture.detectChanges();
            let h3: HTMLElement = fixture.debugElement
                // tslint:disable-next-line:max-line-length
                .query(By.css(".row:nth-of-type(1) .col-md-6:nth-of-type(2) > .panel > .panel-heading > h3.panel-title"))
                .nativeElement;
            expect(h3.innerText).toBe(component.usaTitle);
        });

        it("should show usaFlag with width and height for image", () => {
            fixture.detectChanges();
            let imgDebugElement = fixture.debugElement
                .query(By.css(".row:nth-of-type(1) .col-md-6:nth-of-type(2) img"));
            let img = imgDebugElement.nativeElement;
            expect(img.src).toBe(component.usaFlag);
            expect(img.alt).toBe(component.usaTitle);
            expect(imgDebugElement.styles.width).toBe(component.imageWidth.toString());
            expect(imgDebugElement.styles.height).toBe(component.imageHeight.toString());
        });

        it("should show usaFlag and usaTitle for default toggle", () => {
            fixture.detectChanges();
            let h3: HTMLElement = fixture.debugElement
                .query(By.css(".row:nth-of-type(2) h3:nth-of-type(1)"))
                .nativeElement;
            let img: HTMLImageElement = fixture.debugElement
                .query(By.css(".row:nth-of-type(2) img:nth-of-type(1)"))
                .nativeElement;

            expect(h3.innerText).toBe(component.usaTitle);
            expect(img.src).toBe(component.usaFlag);
            expect(img.alt).toBe(component.usaFlag);
            expect(img.width).toBe(component.imageWidth);
            expect(img.height).toBe(component.imageHeight);
        });

        it("should show unitedKingdomFlag and unitedKingdomTitle for pressing toggle button", () => {
            fixture.detectChanges();
            let button: HTMLElement = fixture.debugElement.query(By.css(".row:nth-of-type(2) button")).nativeElement;
            button.click();
            fixture.detectChanges();
            let h3: HTMLElement = fixture.debugElement
                .query(By.css(".row:nth-of-type(2) h3:nth-of-type(1)"))
                .nativeElement;
            let img: HTMLImageElement = fixture.debugElement
                .query(By.css(".row:nth-of-type(2) img:nth-of-type(1)"))
                .nativeElement;

            expect(h3.innerText).toBe(component.unitedKingdomTitle);
            expect(img.src).toBe(component.unitedKingdomFlag);
            expect(img.alt).toBe(component.unitedKingdomFlag);
            expect(img.width).toBe(component.imageWidth);
            expect(img.height).toBe(component.imageHeight);
        });

        it("should show row for default cssToggle", () => {
            fixture.detectChanges();
            let rowDebugElement = debugElement
                .query(By.css(".root > .col-md-12 > .row:nth-of-type(3) > .col-md-12 > .row"));
            expect(rowDebugElement.styles.display).toBe("block");
        });

        it("should hide row for cssToggle true", () => {
            fixture.detectChanges();
            let button: HTMLElement = fixture.debugElement
                .query(By.css(".root > .col-md-12 > .row:nth-of-type(3) button:nth-of-type(2)"))
                .nativeElement;
            button.click();
            fixture.detectChanges();
            let rowDebugElement = debugElement
                .query(By.css(".root > .col-md-12 > .row:nth-of-type(3) > .col-md-12 > .row"));
            expect(rowDebugElement.styles.display).toBe("none");
        });

        it("should have usaTitle for default backgroundToggle", () => {
            fixture.detectChanges();
            let h3: HTMLElement = fixture.debugElement
                .query(By.css(".root > .col-md-12 > .row:nth-of-type(3) h3"))
                .nativeElement;
            let bgFlag = fixture.debugElement
                .query(By.css(".root > .col-md-12 > .row:nth-of-type(3) div.bg-flag"));

            expect(h3.innerText).toBe(component.usaTitle);
            expect(bgFlag.styles["background-image"]).toBe(`url(${component.usaFlag})`);
            expect(bgFlag.styles.width).toBe(component.imageWidth.toString());
            expect(bgFlag.styles.height).toBe(component.imageHeight.toString());
            expect(bgFlag.styles.margin).toBe(component.centerDisplay);
        });

        it("should have unitedKingdomTitle for backgroundToggle false", () => {
            fixture.detectChanges();
            let button: HTMLElement = fixture.debugElement
                .query(By.css(".root > .col-md-12 > .row:nth-of-type(3) button:nth-of-type(1)"))
                .nativeElement;
            button.click();
            fixture.detectChanges();
            let h3: HTMLElement = fixture.debugElement
                .query(By.css(".root > .col-md-12 > .row:nth-of-type(3) h3"))
                .nativeElement;
            let bgFlag = fixture.debugElement
                .query(By.css(".root > .col-md-12 > .row:nth-of-type(3) div.bg-flag"));

            expect(h3.innerText).toBe(component.unitedKingdomTitle);
            expect(bgFlag.styles["background-image"]).toBe(`url(${component.unitedKingdomFlag})`);
            expect(bgFlag.styles.width).toBe(component.imageWidth.toString());
            expect(bgFlag.styles.height).toBe(component.imageHeight.toString());
            expect(bgFlag.styles.margin).toBe(component.centerDisplay);
        });
    });
});