import { Location } from "../enums/Location";
import { Color } from "../models/Color";

export class ColorService {
    private colors: Color[];

    constructor() {
        this.colors = [{ name: this.getContinentName(Location.America), color: "#C9E4E7" },
        { name: this.getContinentName(Location.Europe), color: "#B4A0E5" },
        { name: this.getContinentName(Location.Africa), color: "#DDA448" },
        { name: this.getContinentName(Location.Asia), color: "#BB342F" },
        { name: this.getContinentName(Location.Oceania), color: "#C2E812" }];
    }

    private getContinentName(location: Location): string {
        return Location[location];
    }

    get Colors() {
        return this.colors;
    }
}