import { DebugElement, NO_ERRORS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";

import { SamplesListComponent } from "../samples-list.component";

describe("SamplesList", () => {
    describe("Component", () => {
        let fixture: ComponentFixture<SamplesListComponent>;
        let debugElement: DebugElement;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [RouterTestingModule],
                declarations: [SamplesListComponent],
                schemas: [NO_ERRORS_SCHEMA]
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(SamplesListComponent);
            debugElement = fixture.debugElement;
        });

        describe("Component route", () => {
            it("should render interaction route", () => {
                fixture.detectChanges();
                let href = fixture.debugElement
                    .query(By.css("a.component-interaction"))
                    .nativeElement.getAttribute("href");
                expect(href).toBe("/component/interaction");
            });

            it("should render child route", () => {
                fixture.detectChanges();
                let href = fixture.debugElement
                    .query(By.css("a.component-child"))
                    .nativeElement.getAttribute("href");
                expect(href).toBe("/component/child");
            });

            it("should render lifecycle-hooks route", () => {
                fixture.detectChanges();
                let href = fixture.debugElement
                    .query(By.css("a.component-lifecycle-hooks"))
                    .nativeElement.getAttribute("href");
                expect(href).toBe("/component/lifecycle-hooks");
            });

            it("should render projection route", () => {
                fixture.detectChanges();
                let href = fixture.debugElement
                    .query(By.css("a.component-projection"))
                    .nativeElement.getAttribute("href");
                expect(href).toBe("/component/projection");
            });

            it("should render directives route", () => {
                fixture.detectChanges();
                let href = fixture.debugElement
                    .query(By.css("a.component-directives"))
                    .nativeElement.getAttribute("href");
                expect(href).toBe("/component/directives");
            });

            it("should render pipes route", () => {
                fixture.detectChanges();
                let href = fixture.debugElement
                    .query(By.css("a.component-pipes"))
                    .nativeElement.getAttribute("href");
                expect(href).toBe("/component/pipes");
            });
        });

        describe("Templates route", () => {
            it("should render interpolation route", () => {
                fixture.detectChanges();
                let href = fixture.debugElement
                    .query(By.css("a.templates-interpolation"))
                    .nativeElement.getAttribute("href");
                expect(href).toBe("/templates/interpolation");
            });

            it("should render ngIf route", () => {
                fixture.detectChanges();
                let href = fixture.debugElement
                    .query(By.css("a.templates-ngif"))
                    .nativeElement.getAttribute("href");
                expect(href).toBe("/templates/ngif");
            });

            it("should render ngFor route", () => {
                fixture.detectChanges();
                let href = fixture.debugElement
                    .query(By.css("a.templates-ngfor"))
                    .nativeElement.getAttribute("href");
                expect(href).toBe("/templates/ngfor");
            });
        });

        describe("Bindings route", () => {
            it("should render property route", () => {
                fixture.detectChanges();
                let href = fixture.debugElement
                    .query(By.css("a.binding-property"))
                    .nativeElement.getAttribute("href");
                expect(href).toBe("/binding/property");
            });

            it("should render event route", () => {
                fixture.detectChanges();
                let href = fixture.debugElement
                    .query(By.css("a.binding-event"))
                    .nativeElement.getAttribute("href");
                expect(href).toBe("/binding/event");
            });

            it("should render two-way route", () => {
                fixture.detectChanges();
                let href = fixture.debugElement
                    .query(By.css("a.binding-two-way"))
                    .nativeElement.getAttribute("href");
                expect(href).toBe("/binding/two-way");
            });
        });

        describe("Services route", () => {
            it("should render services route", () => {
                fixture.detectChanges();
                let href = fixture.debugElement
                    .query(By.css("a.services-services"))
                    .nativeElement.getAttribute("href");
                expect(href).toBe("/services/services");
            });

            it("should render di route", () => {
                fixture.detectChanges();
                let href = fixture.debugElement
                    .query(By.css("a.services-di"))
                    .nativeElement.getAttribute("href");
                expect(href).toBe("/services/di");
            });
        });

        describe("Forms route", () => {
            it("should render template route", () => {
                fixture.detectChanges();
                let href = fixture.debugElement
                    .query(By.css("a.forms-template"))
                    .nativeElement.getAttribute("href");
                expect(href).toBe("/forms/template");
            });

            it("should render reactive route", () => {
                fixture.detectChanges();
                let href = fixture.debugElement
                    .query(By.css("a.forms-reactive"))
                    .nativeElement.getAttribute("href");
                expect(href).toBe("/forms/reactive");
            });

            it("should render validation form route", () => {
                fixture.detectChanges();
                let href = fixture.debugElement
                    .query(By.css("a.forms-validation-form"))
                    .nativeElement.getAttribute("href");
                expect(href).toBe("/forms/validation/form");
            });
        });

        describe("Remote route", () => {
            it("should render http route", () => {
                fixture.detectChanges();
                let href = fixture.debugElement
                    .query(By.css("a.remote-http"))
                    .nativeElement.getAttribute("href");
                expect(href).toBe("/remote/http");
            });

            it("should render promises route", () => {
                fixture.detectChanges();
                let href = fixture.debugElement
                    .query(By.css("a.remote-promises"))
                    .nativeElement.getAttribute("href");
                expect(href).toBe("/remote/promises");
            });

            it("should render async route", () => {
                fixture.detectChanges();
                let href = fixture.debugElement
                    .query(By.css("a.remote-async"))
                    .nativeElement.getAttribute("href");
                expect(href).toBe("/remote/async");
            });

            it("should render httpclient route", () => {
                fixture.detectChanges();
                let href = fixture.debugElement
                    .query(By.css("a.remote-http-client"))
                    .nativeElement.getAttribute("href");
                expect(href).toBe("/remote/http-client");
            });
        });

        describe("Routing route", () => {
            it("should render dynamic route", () => {
                fixture.detectChanges();
                let href = fixture.debugElement
                    .query(By.css("a.routing-dynamic"))
                    .nativeElement.getAttribute("href");
                expect(href).toBe("/routing/dynamic");
            });

            it("should render child country route", () => {
                fixture.detectChanges();
                let href = fixture.debugElement
                    .query(By.css("a.routing-child-country"))
                    .nativeElement.getAttribute("href");
                expect(href).toBe("/routing/child/country");
            });
        });
    });
});