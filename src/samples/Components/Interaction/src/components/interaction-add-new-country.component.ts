import { Component, EventEmitter, Output } from "@angular/core";
import { Http } from "@angular/http";
import { PubSubService } from "../services/pub-sub.service";

@Component({
    moduleId: module.id,
    selector: "app-interaction-add-new-country",
    templateUrl: "./interaction-add-new-country.component.html",
})
export class InteractionAddNewCountryComponent {
    private url: string = "https://restcountries.eu/rest/v2/alpha/";
    @Output() cancelable = new EventEmitter();

    constructor(private _http: Http, private _pubsubService: PubSubService) { }

    addCountry(input) {
        let code = input.value;
        this._http.get(this.url + code).subscribe((res) => {
            this._pubsubService.emitter.emit(res.json());
        });
    }

    cancel() {
        this.cancelable.emit();
    }
}