import { HttpClient, HttpEventType, HttpParams, HttpRequest } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import "rxjs/add/operator/map";
import "rxjs/add/operator/shareReplay";
import { Observable } from "rxjs/Observable";

type Todo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
};

@Component({
    moduleId: module.id,
    templateUrl: "./http-client.component.html",
    selector: "app-remote-httpclient"
})
export class HttpClientComponent implements OnInit {
    public todo: Todo;
    public error: any;
    private url: string = "https://jsonplaceholder.typicode.com";

    private _todos: Todo[];
    public get todos(): Todo[] {
        return this._todos;
    }

    private _notCompletedTodos: Todo[];
    public get notCompletedTodos(): Todo[] {
        return this._notCompletedTodos;
    }

    private _downloaded: boolean;
    public get downloaded(): boolean {
        return this._downloaded;
    }

    private _response: boolean;
    public get response(): boolean {
        return this._response;
    }

    private _complete: boolean;
    public get complete(): boolean {
        return this._complete;
    }

    constructor(private http: HttpClient) { }

    public ngOnInit(): void {
        this.http.get<Todo[]>(`${this.url}/todos`)
            .map((p) => p.slice(0, 5))
            .shareReplay()
            .subscribe((data) => this._todos = data);
    }

    public getTopTwoCompleted(): void {
        let params = new HttpParams().set("completed", "false");
        this.http.get<Todo[]>(`${this.url}/todos`, { params })
            .map((t) => t.slice(0, 2))
            .shareReplay()
            .subscribe((data) => this._notCompletedTodos = data);
    }

    public deleteTodo(id: string): void {
        this.http.delete(`${this.url}/todos/${id}`)
            .shareReplay()
            .subscribe(() => {
                const filtered = this.todos.filter((t) => t.id !== parseInt(id, 10));
                this._todos = filtered;
            });
    }

    public createTodo(): void {
        this.http.post(`${this.url}/todos`, this.todo)
            .shareReplay()
            .subscribe();
    }

    public updateTodo(): void {
        this.http.put(`${this.url}/todos/${this.todo.id}`, this.todo)
            .shareReplay()
            .subscribe();
    }

    public showProgress(): void {
        const request = new HttpRequest("GET", `${this.url}/todos`, { reportProgress: true });
        this.http.request<Todo[]>(request)
            .shareReplay()
            .subscribe((event) => {
                if (event.type === HttpEventType.DownloadProgress) {
                    (() => {
                        setTimeout(() => {
                            this._downloaded = true;
                        }, 2000);
                    })();
                }

                if (event.type === HttpEventType.Response) {
                    setTimeout(() => {
                        this._response = true;
                    }, 4000);
                }
            },
            (error) => this.error = error,
            () => this._complete = true);
    }
}