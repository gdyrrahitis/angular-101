import { HttpClient, HttpEventType, HttpHeaders, HttpParams, HttpRequest } from "@angular/common/http";
import { Component, OnInit, TemplateRef } from "@angular/core";
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import "rxjs/add/operator/map";
import "rxjs/add/operator/shareReplay";
import { Observable } from "rxjs/Observable";

type Todo = {
    userId?: number,
    id?: number,
    title?: string,
    completed?: boolean
};

@Component({
    moduleId: module.id,
    templateUrl: "./http-client.component.html",
    selector: "app-remote-httpclient"
})
export class HttpClientComponent implements OnInit {
    public todo: Todo = {};
    public error: any;
    private url: string = "https://jsonplaceholder.typicode.com";
    private img: string = "https://media.giphy.com/media/wETt5IIeRluUg/giphy.gif";
    private progress: number;
    private editMode: boolean = false;
    private modes: Array<{ id: number, hidden: boolean }> = [];

    private _todos: Todo[];
    public get todos(): Todo[] {
        return this._todos;
    }

    private _notCompletedTodos: Todo[];
    public get notCompletedTodos(): Todo[] {
        return this._notCompletedTodos;
    }

    private _downloading: boolean;
    public get downloading(): boolean {
        return this._downloading;
    }

    private _response: boolean;
    public get response(): boolean {
        return this._response;
    }

    private _send: boolean;
    public get send(): boolean {
        return this._send;
    }

    public modalRef: BsModalRef;
    constructor(private http: HttpClient, private modalService: BsModalService) { }

    public ngOnInit(): void {
        this.http.get<Todo[]>(`${this.url}/todos`)
            .map((p) => p.slice(0, 5))
            .shareReplay()
            .subscribe((data) => {
                this._todos = data;
                for (let t of data) {
                    this.modes.push({ id: t.id, hidden: true });
                }
            });
    }

    public openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }

    public getStatusFor(id: number) {
        const [record] = this.modes.filter((t) => t.id === id);
        return record.hidden;
    }

    public changeStatusFor(id: number): void {
        const [record] = this.modes.filter((t) => t.id === id);
        const previousState = record.hidden;
        record.hidden = !record.hidden;
        this.editMode = previousState;

        if (!previousState) {
            let [todo] = this.todos.filter((t) => t.id === record.id);
            this.updateTodo(record.id, todo);
        }
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
            }, (error) => this._todos = this._todos.filter((t) => t.id !== parseInt(id, 10)));
    }

    public createTodo(): void {
        this.http.post<Todo>(`${this.url}/todos`, this.todo)
            .shareReplay()
            .subscribe((data) => {
                this._todos.push(data);
                this.modes.push({ id: data.id, hidden: true });
                this.modalRef.hide();
            });
    }

    public updateTodo(id: number, todo: Todo): void {
        this.http.put(`${this.url}/todos/${id}`, todo)
            .shareReplay()
            .subscribe();
    }

    public showProgress(): void {
        this._downloading = this._response = this._send = false;
        this.error = undefined;

        const headers: HttpHeaders = new HttpHeaders()
            .set("Cache-Control", "no-cache, no-store, must-revalidate")
            .set("Pragma", "no-cache")
            .set("Expires", "0");
        const request = new HttpRequest("GET", this.img, { reportProgress: true, headers });
        this.http.request<Todo[]>(request)
            .shareReplay()
            .subscribe((event) => {
                if (event.type === HttpEventType.DownloadProgress) {
                    this._downloading = true;
                    this.progress = Math.floor(Math.floor(100 * event.loaded) / event.total);
                }

                if (event.type === HttpEventType.Response) {
                    this._response = true;
                }
            },
            (error) => this.error = error,
            () => this._send = true);
    }
}