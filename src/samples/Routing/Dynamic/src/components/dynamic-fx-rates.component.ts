import { Component, OnInit } from "@angular/core";
import { Http, Response } from "@angular/http";
import { ActivatedRoute } from "@angular/router";

declare type Rate = {
    rate1?: number,
    rate2?: number,
};

@Component({
    moduleId: module.id,
    selector: "app-fx-rates",
    templateUrl: "./dynamic-fx-rates.component.html",
})
export class DynamicFxRatesComponent implements OnInit {
    private url: string = "http://api.fixer.io/latest?base=";
    transformRates: Rate[] = [];
    rates: any;
    error: any;
    currency: string;

    constructor(private _route: ActivatedRoute, private _http: Http) { }

    ngOnInit() {
        this._route.params.subscribe((params: any) => this.loadFxRatesByCurrencyCode(params.currency));
    }

    loadFxRatesByCurrencyCode(currency: string) {
        this.currency = currency.toUpperCase();
        this._http.get(this.url + currency).subscribe((res) => {
            let response = res.json();
            this.rates = response;

            let rates = Object.keys(this.rates.rates);
            rates.forEach((value) => {
                this.transformRates.push({});
            });
        }, (error) => {
            this.error = error;
        });
    }

    inputChange(event, transformRateKey, index) {
        let pattern = /^[0-9.]*$/;
        let charCode = String.fromCharCode(event.charCode);

        if (!pattern.test(charCode)) {
            event.preventDefault();
            return;
        }

        this.calculateFxRate(event, transformRateKey, index, charCode);
    }

    private calculateFxRate(event, transformRateKey, index, charCode) {
        let rates = Object.keys(this.rates.rates);
        let fxRate = this.rates.rates[rates[index]];
        let value: string = event.target.value + charCode;

        let result: number = transformRateKey === "rate1" ? fxRate * parseFloat(value) : parseFloat(value) / fxRate;

        if (isNaN(result)) {
            this.transformRates[index][transformRateKey] = null;
            return;
        }

        this.transformRates[index][transformRateKey] = result.toFixed(3);
    }

    onBackspace(event, transformRateKey, index) {
        if (this.isBackspace(event)) {
            this.calculateFxRate(event, transformRateKey, index, "");
        }
    }

    private isBackspace(event): boolean {
        return event.keyCode === 8;
    }
}