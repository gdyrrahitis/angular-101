import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "keys",
})
export class KeysPipe implements PipeTransform {
    public transform(value: any, args: string[]) {
        let keys = [];

        for (let key in value) {
            if (Object.prototype.hasOwnProperty(key)) {
                keys.push(key);
            }
        }

        return keys;
    }
}