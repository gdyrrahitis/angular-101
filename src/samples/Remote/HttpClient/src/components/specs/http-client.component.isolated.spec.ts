import { HttpClient, HttpParams } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { DebugElement, NO_ERRORS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, inject, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";

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
        let fixture: ComponentFixture<HttpClientComponent>;
        let debugElement: DebugElement;
        let component: HttpClientComponent;
        let httpClient: HttpClient;
        let mock: HttpTestingController;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [HttpClientTestingModule],
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

        it("should update todo", () => {
            let todo: Todo = {
                completed: false,
                id: 1,
                title: "Title",
                userId: 1
            };
            component.todo = todo;
            component.updateTodo();
            const request = mock.expectOne(`${url}/1`);
            request.flush(todo);

            expect(request.request.method).toBe("PUT");
            mock.verify();
        });

        it("should create new todo", () => {
            let todo: Todo = {
                completed: false,
                id: 1,
                title: "Title",
                userId: 1
            };
            component.todo = todo;
            component.createTodo();
            const request = mock.expectOne(`${url}`);
            request.flush(todo);

            expect(request.request.method).toBe("POST");
            mock.verify();
        });

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
            const request = mock.expectOne(`${url}`);
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

        it("should show progress", () => {
            let todos: Todo[] = Array(100).fill({
                completed: false,
                id: 1,
                title: "Title",
                userId: 1
            });
            component.showProgress();
            const request = mock.expectOne(url);
            request.flush(todos);

            expect(request.request.method).toBe("GET");
            mock.verify();
        });
    });
});