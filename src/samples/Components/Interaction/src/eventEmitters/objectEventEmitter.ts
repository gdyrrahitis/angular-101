import {Subject } from "rxjs/Subject";

export class ObjectEventEmitter extends Subject<any> {
    constructor() {
        super();
    }

    emit (value) {
        super.next(value);
    }
}