import { DebugElement } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";

import { HeaderComponent } from "../header.component";

describe("Header", () => {
    describe("Component", () => {
        let fixture: ComponentFixture<HeaderComponent>;
        let debugElement: DebugElement;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [RouterTestingModule],
                declarations: [HeaderComponent]
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(HeaderComponent);
            debugElement = fixture.debugElement;
        });

        it("should render home route", () => {
            fixture.detectChanges();
            let href = fixture.debugElement.query(By.css("a")).nativeElement.getAttribute("href");
            expect(href).toBe("/home");
        });
    });
});