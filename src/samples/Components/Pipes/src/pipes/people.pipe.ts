import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "people" })
export class PeoplePipe implements PipeTransform {
    public  transform(value: string) {
        let population = +(value.replace(/,/g, ""));

        if (population < 100) {
            return value;
        }

        if (population >= 100 && population < 1000) {
            return `${value} hundreds`;
        }

        if (population >= 1000 && population < 1000000) {
            return `${value} thousands`;
        }

        if (population >= 1000000 && population < 1000000000) {
            return `${value} millions`;
        }

        if (population >= 1000000000 && population < 1000000000000) {
            return `${value} billions`;
        }
    }
}