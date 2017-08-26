import { HttpClient, HttpParams } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { DebugElement, NO_ERRORS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, inject, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";
import { BsModalRef, BsModalService, ModalModule, ProgressbarModule } from "ngx-bootstrap";

import { HttpClientComponent } from "../http-client.component";

type Todo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
};

describe("HttpClient", () => {
    describe("Component", () => {
        const url: string = "https://jsonplaceholder.typicode.com/todos";
        const imgUrl: string = "https://media.giphy.com/media/wETt5IIeRluUg/giphy.gif";
        let fixture: ComponentFixture<HttpClientComponent>;
        let debugElement: DebugElement;
        let component: HttpClientComponent;
        let httpClient: HttpClient;
        let mock: HttpTestingController;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [
                    HttpClientTestingModule,
                    FormsModule,
                    ProgressbarModule.forRoot(),
                    ModalModule.forRoot()
                ],
                declarations: [HttpClientComponent],
                schemas: [NO_ERRORS_SCHEMA]
            }).compileComponents();
        }));

        beforeEach(inject([HttpClient, HttpTestingController], (http: HttpClient, httpMock: HttpTestingController) => {
            httpClient = http;
            mock = httpMock;
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(HttpClientComponent);
            debugElement = fixture.debugElement;
            component = fixture.componentInstance;
        });

        describe("ngOnInit", () => {
            it("should fetch todo's on initialization", () => {
                let todos: Todo[] = [{
                    completed: false,
                    id: 1,
                    title: "Title",
                    userId: 1
                }];

                component.ngOnInit();
                const request = mock.expectOne(url);
                request.flush(todos);

                const result = component.todos;
                expect(result.length).toBe(1);
                expect(request.request.method).toBe("GET");
                mock.verify();
            });
        });

        describe("updateTodo", () => {
            it("should update todo", () => {
                let todo: Todo = {
                    completed: false,
                    id: 1,
                    title: "Title",
                    userId: 1
                };
                component.todo = todo;
                component.updateTodo(todo.id, todo);
                const request = mock.expectOne(`${url}/1`);
                request.flush(todo);

                expect(request.request.method).toBe("PUT");
                mock.verify();
            });
        });

        describe("createTodo", () => {
            it("should create new todo", () => {
                let todo: Todo = {
                    completed: false,
                    id: 1,
                    title: "Title",
                    userId: 1
                };

                component.ngOnInit();
                const initRequest = mock.expectOne(url);
                initRequest.flush([todo]);
                expect(initRequest.request.method).toBe("GET");

                component.modalRef = { hide: () => { } };
                component.todo = todo;
                component.createTodo();
                const request = mock.expectOne(url);
                request.flush(todo);

                const todos = component.todos;
                expect(todos.length).toBe(2);
                expect(request.request.method).toBe("POST");
                mock.verify();
            });
        });

        describe("deleteTodo", () => {
            it("should delete todo", () => {
                let todo: Todo = {
                    completed: false,
                    id: 1,
                    title: "Title",
                    userId: 1
                };
                let todos: Todo[] = [todo, { completed: false, id: 2, title: "New Title", userId: 1 }];
                component.todo = todo;
                component.ngOnInit();
                const request = mock.expectOne(url);
                request.flush(todos);
                expect(request.request.method).toBe("GET");

                component.deleteTodo("1");
                const deleteRequest = mock.expectOne(`${url}/1`);
                deleteRequest.flush({});
                expect(deleteRequest.request.method).toBe("DELETE");
                const result = component.todos;
                expect(result.length).toBe(1);

                mock.verify();
            });
        });

        describe("getTopTwoCompleted", () => {
            it("should fetch randomly two not completed todos", () => {
                let todos: Todo[] = Array(100).fill({
                    completed: false,
                    id: 1,
                    title: "Title",
                    userId: 1
                });
                const params: HttpParams = new HttpParams().set("completed", "false");
                component.getTopTwoCompleted();
                const request = mock.expectOne(`${url}?completed=false`);
                request.flush(todos);

                const result = component.notCompletedTodos;
                expect(result.length).toBe(2);
                expect(request.request.method).toBe("GET");
                mock.verify();
            });
        });

        describe("showProgress", () => {
            it("should show progress", () => {
                let todos: Todo[] = Array(100).fill({
                    completed: false,
                    id: 1,
                    title: "Title",
                    userId: 1
                });
                component.showProgress();
                const request = mock.expectOne(imgUrl);
                request.flush(todos);

                expect(request.request.method).toBe("GET");
                expect(request.request.headers.get("Cache-Control")).toBe("no-cache, no-store, must-revalidate");
                expect(request.request.headers.get("Pragma")).toBe("no-cache");
                expect(request.request.headers.get("Expires")).toBe("0");
                mock.verify();
            });
        });

        describe("getStatusFor", () => {
            it("should return true for existing record", () => {
                let todo: Todo = {
                    completed: false,
                    id: 1,
                    title: "Title",
                    userId: 1
                };
                component.ngOnInit();
                const request = mock.expectOne(url);
                request.flush([todo]);

                const result = component.getStatusFor(1);

                expect(result).toBeTruthy();
                mock.verify();
            });
        });

        describe("changeStatusFor", () => {
            it("should set edit mode to true", () => {
                let todo: Todo = {
                    completed: false,
                    id: 1,
                    title: "Title",
                    userId: 1
                };
                component.ngOnInit();
                const request = mock.expectOne(url);
                request.flush([todo]);

                component.changeStatusFor(1);

                const result = component.getStatusFor(1);
                expect(result).toBeFalsy();
                mock.verify();
            });

            it("should set edit mode back to false and updates it", () => {
                let todo: Todo = {
                    completed: false,
                    id: 1,
                    title: "Title",
                    userId: 1
                };
                component.todo = todo;
                component.ngOnInit();
                const request = mock.expectOne(url);
                request.flush([todo]);

                component.changeStatusFor(1);
                component.changeStatusFor(1);

                const updateRequest = mock.expectOne(`${url}/1`);
                updateRequest.flush(todo);

                const result = component.getStatusFor(1);
                expect(updateRequest.request.method).toBe("PUT");
                expect(result).toBeTruthy();
                mock.verify();
            });
        });
    });
});