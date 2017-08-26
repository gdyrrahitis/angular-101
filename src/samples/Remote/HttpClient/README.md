# HTTPClient

HttpClient can be found under `@angular/common/http`

It came to replace the `http` module and it is build upon `XMLHTTPRequest`. It makes remote calls easier and provides support for various features including testing, strongly typed request and responses as well as features such as progress management and interceptors.

First thing first, at `system.js` configuration, make sure you map the package to the correct bundle. Also, make sure you install `tslib`.
```
'@angular/common/http': 'npm:@angular/common/bundles/common-http.umd.js', 
```

## Usage
Now you can install the module in your application module. You just need the `HttpClientModule` to be imported in your app module.

```
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    imports: [
        HttpClientModule
    ]
})
export class AppModule {
}

```

In order to start working with the HttpClient, inject the `HttpClient` into your class constructor.

```
export class MyComponent implements OnInit {
    constructor(private http: HttpClient) {
    }
}
```

You can now start using `HttpClient` for making `GET`, `POST`, `PUT`, `DELETE`, `PATCH` requests

Example:
In the following sample, a `GET` request is issued. Notice the generic that I am using, the `<Post[]>`, so I return an array of `Post` objects.
```
// Earlier
private posts: Observable<Post[]>;

// GET all posts
this.posts = this.http.get<Post[]>(`${this.url}/posts`).shareReplay();
```

Or consider the following example, where I fetch an array of posts, by providing some HTTP parameters in the request URI.
```
const params = new HttpParams().set("userId", "1");
this.postsOfUser = this.http.get<Post[]>(`${this.url}/posts`, { params }).shareReplay();
```

_Note: The `shareReplay()` method is an RxJS method, used for preventing making a request twice_

In the examples above, I return an `Observable<T>`. This is then handled by the `async` pipe in the template like so:
```
<div *ngIf="postsOfUser | async else noData">
    <div class="panel panel-default" *ngFor="let post of postsOfUser | async | slice:0:5; let i=index">
        <div class="panel-heading">{{post.title}}</div>
        <div class="panel-body">
            {{post.body}}
        </div>
    </div>
</div>
```
The `async` pipe is discussed (with examples) [here](https://github.com/gdyrrahitis/angular-101/tree/master/src/samples/Remote/AsyncPipe).
What it does is to unwrap the observable and take the actual `T`

Of course, you could use the `subscribe` method, after all, the `HttpClient` is returning an Observable.
```
this.http.get<Post[]>(`${this.url}/posts`)
    .shareReplay()
    .subscribe(posts => this.postsArray = posts);
```

### Interceptors
__PENDING_

### Progress
_PENDING_