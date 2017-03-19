import {Subject } from "rxjs/Subject";

export class ObjectEventEmitter extends Subject<any> {
    constructor() {
        super();
    }

    public emit (value) {
        super.next(value);
    }
}