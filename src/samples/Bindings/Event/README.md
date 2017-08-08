# Event binding

Example shows event binding in Angular.
In event binding you use the parenthesis in HTML element on template, `(EVENT_NAME)`, to send events from the template to the underlying component.

#### Syntax goes like
`(target)="statement()"`

Use the standard browser/vanilla JS event names, like `onclick`, `onchange`, `onsubmit` etc. but remember to omit the `on` prefix, so it should be like `(click)` or `(change)` or `(submit)` and many more.

Look at the `event.component.html` and `event.component.ts` source code. You will find snippets like:

```
<div class="panel-heading">
    <div class="row">
        <div class="col-md-6">
            <h3 class="panel-title">Choose countries by continent</h3>
        </div>
        <div class="col-md-6">
            <div class="btn-group" role="group" aria-label="Continents">
                <button *ngFor="let continent of continents" [id]="continent.name" type="button" class="btn" (click)="setSelectedContinent($event, continent)">{{continent.name}}</button>
                <button id="Clear" type="button" class="btn btn-primary" (click)="clear($event)">Clear</button>
            </div>
        </div>
    </div>
</div>
```

In the snippet above, as you can see, I bind the `<button>` element with a `click` event, which calls a method.

For example, this one calls the `setSelectedContinent` method when the button is clicked. I pass the `$event` object and the current `continent`, coming from the enumeration of `continents` collection.

`<button *ngFor="let continent of continents" [id]="continent.name" type="button" class="btn" (click)="setSelectedContinent($event, continent)">`

The `$event` object is an object that contains a message about the event. It is the event message and we can pass to the calling method.

#### Example
`<button (click)="save($event)">`

The type of the `$event` object is `any`, so it can take different forms, based on the event that is fired. Of course, you can cast it to any event.
It can 

This object contains useful properties like `$event.target` which returns the target element, the target from where the event was fired, thus you can fetch it's value, state, CSS, whatever.

#### Example
```
public changeShowingList($event: Event) { // Passing it as an Event
    if (!$event) {
        throw new Error("Parameter $event should not be null");
    }

    // Casting it to HTMLSelectElement in order to use the target.value property
    let target = $event.target as HTMLSelectElement;
    this.continentToSwap = this.continents.filter((c) => c.name === target.value)[0];
    this.changedElement = target;
}
```