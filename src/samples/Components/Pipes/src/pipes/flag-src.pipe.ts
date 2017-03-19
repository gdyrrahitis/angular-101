import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: "flagSrc"})
export class FlagSrcPipe implements PipeTransform {
    private flagUrl: string = "http://flagpedia.net/data/flags/";

    public transform(value: string, type: string) {
        return `${this.flagUrl}${type.toLowerCase()}/${value.toLowerCase()}.png`;
    }
}