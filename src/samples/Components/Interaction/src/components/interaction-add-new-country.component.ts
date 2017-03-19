import { Component, EventEmitter, Output } from "@angular/core";
import { Http } from "@angular/http";
import { PubSubService } from "../services/pub-sub.service";

@Component({
    moduleId: module.id,
    selector: "app-interaction-add-new-country",
    templateUrl: "./interaction-add-new-country.component.html",
})
export class InteractionAddNewCountryComponent {
    @Output() public cancelable = new EventEmitter();
    private url: string = "https://restcountries.eu/rest/v2/alpha/";

    constructor(private http: Http, private pubSubService: PubSubService) { }

    public addCountry(input) {
        let code = input.value;
        this.http.get(this.url + code).subscribe((res) => {
            this.pubSubService.emitter.emit(res.json());
        });
    }

    public cancel() {
        this.cancelable.emit();
    }
}