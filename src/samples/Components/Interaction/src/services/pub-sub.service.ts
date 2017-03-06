import { Injectable } from "@angular/core";
import { ObjectEventEmitter } from "../eventEmitters/objectEventEmitter";

@Injectable()
export class PubSubService {
    emitter: ObjectEventEmitter;

    constructor() {
        this.emitter = new ObjectEventEmitter();
    }
}